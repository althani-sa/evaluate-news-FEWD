import { checkForLink } from "../src/client/js/nameChecker"
window.alert = jest.fn(); // Please see the README for this specific code. It's to prevent an error caused by the alert('') code.
describe("Check that the INPUT is a VALID URL",() => {
    test("The user has entered a VALID URL", () => {
        let input = "https://www.cnn.com/2020/07/27/politics/donald-trump-coronavirus-economy-unemployment-congress-testing/index.html"
        expect(checkForLink(input)).toBeTruthy()
        window.alert.mockClear();

    })
})