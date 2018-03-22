export default class Overlay {

    private overlayElement: HTMLDivElement;
    private childElement: HTMLDivElement;
    private closed = false;

    static create() {
        return new Overlay();
    }

    constructor() {
        this.attachOverlay();
    }

    close() {
        this.detachOverlay();
        this.detachChild();

        this.closed = true;
        return true;
    }

    attachChild(element) {
        this.overlayElement.innerHTML = '';
        this.childElement = element;
        this.overlayElement.appendChild(element);
    }

    detachChild() {
        this.overlayElement.removeChild(this.childElement);
    }

    attachOverlay() {
        let body = document.body;

        let overlayNumber = new Date().getTime();

        let overlay = document.createElement('div');
        overlay.classList.add('ml-overlay');
        overlay.setAttribute('id', 'ml_overlay_' + overlayNumber);
        overlay.setAttribute('style',
            'background: rgba(136, 136, 136, 0.8); width: 100%; height: 100%; z-index: 10000; position: fixed; top: 0; left: 0;');

        body.appendChild(overlay);

        this.overlayElement = overlay;

        body.setAttribute('style', 'overflow: hidden;');

        this.overlayElement.addEventListener('click', this.closeOnClick);
        body.addEventListener('keydown', this.closeOnPressEscape);
    }

    detachOverlay() {
       let body = document.body;

        this.overlayElement.remove();

        body.setAttribute('style', 'overflow: auto;');

        this.overlayElement.removeEventListener('click', this.closeOnClick);
        // body.removeEventListener('keydown', this.closeOnPressEscape);
    }

    closeOnClick(event: MouseEvent) {
        let isClickOutside = function(element) {
            if (element && element.parentNode) {
                if (element.parentNode === this.childElement) {
                    return false;
                }
                return isClickOutside(element.parentNode);
            } else {
                return true;
            }
        };

        if (event.srcElement && isClickOutside(event.srcElement)) {
            this.close();
            event.preventDefault();
            return false;
        }
    }

    closeOnPressEscape(event: KeyboardEvent) {
        if (event.keyCode === 27) {
            this.close();

            event.preventDefault();
            return false;
        }

    }
}
