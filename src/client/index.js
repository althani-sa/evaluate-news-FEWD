import { checkForLink } from './js/nameChecker.js'
import { handleSubmit } from './js/formHandler.js'

// importing styles to convert in SASS loader.
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'


// exporting to client library
export {
    checkForLink,
    handleSubmit
}