/**
 * This method writes text to the document body
 * @param string
 */
function print(string) {

    "use strict";

    string += "<br />";
    document.getElementById("examples-container").insertAdjacentHTML("beforeend", string);
}