"use strict";
exports.__esModule = true;
var Overlay = /** @class */ (function () {
    function Overlay() {
        this.closed = false;
        this.attachOverlay();
    }
    Overlay.create = function () {
        return new Overlay();
    };
    Overlay.prototype.close = function () {
        this.detachOverlay();
        this.detachChild();
        this.closed = true;
        return true;
    };
    Overlay.prototype.attachChild = function (element) {
        this.overlayElement.innerHTML = '';
        this.childElement = element;
        this.overlayElement.appendChild(element);
    };
    Overlay.prototype.detachChild = function () {
        this.overlayElement.removeChild(this.childElement);
    };
    Overlay.prototype.attachOverlay = function () {
        var body = document.body;
        var overlayNumber = new Date().getTime();
        var overlay = document.createElement('div');
        overlay.classList.add('ml-overlay');
        overlay.setAttribute('id', 'ml_overlay_' + overlayNumber);
        overlay.setAttribute('style', 'background: rgba(136, 136, 136, 0.8); width: 100%; height: 100%; z-index: 10000; position: fixed; top: 0; left: 0;');
        body.appendChild(overlay);
        this.overlayElement = overlay;
        body.setAttribute('style', 'overflow: hidden;');
        this.overlayElement.addEventListener('click', this.closeOnClick);
        body.addEventListener('keydown', this.closeOnPressEscape);
    };
    Overlay.prototype.detachOverlay = function () {
        var body = document.body;
        this.overlayElement.remove();
        body.setAttribute('style', 'overflow: auto;');
        this.overlayElement.removeEventListener('click', this.closeOnClick);
        // body.removeEventListener('keydown', this.closeOnPressEscape);
    };
    Overlay.prototype.closeOnClick = function (event) {
        var isClickOutside = function (element) {
            if (element && element.parentNode) {
                if (element.parentNode === this.childElement) {
                    return false;
                }
                return isClickOutside(element.parentNode);
            }
            else {
                return true;
            }
        };
        if (event.srcElement && isClickOutside(event.srcElement)) {
            this.close();
            event.preventDefault();
            return false;
        }
    };
    Overlay.prototype.closeOnPressEscape = function (event) {
        if (event.keyCode === 27) {
            this.close();
            event.preventDefault();
            return false;
        }
    };
    return Overlay;
}());
exports["default"] = Overlay;
