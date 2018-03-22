"use strict";
exports.__esModule = true;
var overlay_1 = require("./overlay");
chrome.runtime.onMessage.addListener(function (request) {
    if (request.greeting === 'convert-video') {
        convertDialog();
    }
});
function convertDialog() {
    console.log('start plugin');
    createDialogBox();
}
function createDialogBox() {
    var overlay = overlay_1["default"].create();
    var box = document.createElement('div');
    box.classList.add('convert_dialog_container');
    box.setAttribute('id', 'convert_video_dialog_container');
    box.setAttribute('style', "width: 400px; height: 150px; margin: 100px auto 0; background: #383636; \n        text-align: center; border-radius: 5px");
    overlay.attachChild(box);
    console.log(overlay);
    createInputGroup(box);
}
function createInputGroup(parentElement) {
    parentElement.innerHTML = "\n        <div class=\"input-group mb-3\" style=\"padding: 40px 10px 20px;\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Enter video url for convert\" id=\"ml-input-url\"\n                  aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-primary\" type=\"button\" id=\"ml-convert-btn\">Convert</button>\n          </div>\n        </div>";
    createDownloadButton(parentElement);
}
function createDownloadButton(parentElement) {
    parentElement.innerHTML = parentElement.innerHTML +
        "<button type=\"button\" class=\"btn btn-success\" id=\"ml-download-btn\">Download</button>";
}
