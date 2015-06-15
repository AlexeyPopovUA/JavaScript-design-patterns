/**
 * This method adds js file to an html head
 * @param src {String} - source path
 */
function loadScript(src) {

    "use strict";

    var head = document.getElementsByTagName('HEAD').item(0),
        script = document.createElement("script");

    script.type = "text/javascript";
    script.src = src;
    head.appendChild(script);
}
