export function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let URL = document.getElementById('name').value

    Client.checkForName(URL)

    console.log("::: Form Submitted :::")

    let parseURL = {
        url: URL
    };
    fetch('http://localhost:8081/aylien', {

        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        credentials: 'same-origin',
        body: JSON.stringify(parseURL)
    })
    .then(res => res.json())
    .then(function(res) {

        document.getElementById('form__results').innerHTML = res.polarity
    })
}

// export { handleSubmit }
