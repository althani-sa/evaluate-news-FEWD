export const checkForLink =(inputText) =>{
    let linkChecker = RegExp(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm)

    if (linkChecker.test(inputText)!= true) {
        alert("Please enter a valid URL");
    }
    else {
        return
    }
}