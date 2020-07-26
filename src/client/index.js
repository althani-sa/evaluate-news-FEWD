import { checkForName } from './js/nameChecker.js'
import { handleSubmit } from './js/formHandler.js'
// importing styles to convert in SASS loader.
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
console.log(checkForName);

alert("I EXIST")
console.log("CHANGE!!");

// exporting to client library
export {
    checkForName,
    handleSubmit
}