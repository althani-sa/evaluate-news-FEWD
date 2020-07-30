export const handleSubmit = (e) => {
    e.preventDefault()
    // check what text was put into the form field
    let URL = document.getElementById('name').value;

    Client.checkForLink(URL);
    let parseURL = {
        url: URL
    };

    // This is fine as it is, but it would be nicer to see this separated into another function to make sure that no requests go into the server.
    // unless if they are URLS! I don't want to break it.
    fetch('http://localhost:8081/aylien', {

        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        credentials: 'same-origin',
        body: JSON.stringify(parseURL)
    })
        .then(res => res.json())
        .then((res) => {
            document.getElementById('form__results').innerHTML = `The link's overall sentiment is... ${res.polarity}`
            document.getElementById('confidence__results').innerHTML = `Confidence in result is... ${res.polarity_confidence * 100}%`
            // to test if result is in console --> console.log(res);
        })
};