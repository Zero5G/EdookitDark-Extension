var mystyle = document.createElement("link");
var myHREF = chrome.runtime.getURL("edookitdarktheme.css");
Object.assign(mystyle, {
    href: myHREF,
    rel: "stylesheet",
    type: "text/css"
});
console.log(mystyle);
document.head.appendChild(mystyle);

var myoverrides = document.createElement("link");
var myoverridesHREF = chrome.runtime.getURL("img-overrides/overrides.css");
Object.assign(myoverrides, {
    href: myoverridesHREF,
    rel: "stylesheet",
    type: "text/css"
});
console.log(myoverrides);
document.head.appendChild(myoverrides);

// Replace a path button
/*var yspathoverride = document.createElement("img");
var yspathoverrideIMG = "https://raw.githubusercontent.com/Zero5G/EdookitDarkTheme/main/img-overrides/paths/year-selector-2.svg";
Object.assign(myoverrides, {
    src: yspathoverrideIMG,
    width: "11",
    height: "18",
    onclick: "openTermSelector(0)"
})
var parentSVG = document.getElementsByTagName("svg");
parentSVG.insertBefore(yspathoverride, parentSVG.children[0]);

/* Insert at top of head:

var parentHead = document.head;
parentHead.insertBefore(mystyle, parentHead.children[0]);
*/



/* Style that imports the css file:

const newNode = document.createElement("style");
// Create a text node:
const textNode = document.createTextNode('@import "' + chrome.runtime.getURL("edookitdarktheme.css")+'";');
newNode.appendChild(textNode);
// Insert before existing child:
var parentHead = document.head;
parentHead.insertBefore(newNode, parentHead.children[0])
*/

/* Old code snippets (may not work):
var style = document.createElement("link");
document.head.appendChild(style);
style.setAttribute("HREF", "https://github.com/Zero5G/EdookitDarkTheme/blob/main/edookitdarktheme.css");
style.setAttribute("rel", "stylesheet");
var parent = document.getElementsByTagName("link").parentNode; 
var HREF = ("chrome-extension://" + chrome.runtime.id + "/edookitdarktheme.css");
mystyle.setAttribute("HREF",("chrome-extension://" + chrome.runtime.id + "/edookitdarktheme.css"));
mystyle.setAttribute("rel", "stylesheet");
document.head.insertBefore(mystyle, csslink.item[0]);*/