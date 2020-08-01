export const checkForLink = (inputText = '') =>{
    let linkChecker = RegExp(/^((ftp|http|https):\/\/)?www\.([A-z]+)\.([A-z]{2,})/)

    if (linkChecker.test(inputText) != true) {
        alert("Please enter a valid URL");
    }
    else {
        return linkChecker.test(inputText)
    }
}