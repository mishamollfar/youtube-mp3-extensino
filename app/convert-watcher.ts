import Overlay  from './overlay';

chrome.runtime.onMessage.addListener((request) => {
    if (request.greeting === 'convert-video') {
        convertDialog();
    }
});

function convertDialog() {
    console.log('start plugin');
    createDialogBox();
}

function createDialogBox() {
    let overlay = Overlay.create();
    let box = document.createElement('div');
    box.classList.add('convert_dialog_container');
    box.setAttribute('id', 'convert_video_dialog_container');
    box.setAttribute('style', `width: 400px; height: 150px; margin: 100px auto 0; background: #383636; 
        text-align: center; border-radius: 5px`);

    overlay.attachChild(box);
    console.log(overlay);
    createInputGroup(box);
}

function createInputGroup(parentElement) {
    parentElement.innerHTML = `
        <div class="input-group mb-3" style="padding: 40px 10px 20px;">
          <input type="text" class="form-control" placeholder="Enter video url for convert" id="ml-input-url"
                  aria-label="Recipient's username" aria-describedby="basic-addon2">
          <div class="input-group-append">
            <button class="btn btn-primary" type="button" id="ml-convert-btn">Convert</button>
          </div>
        </div>`;

    createDownloadButton(parentElement);
}

function createDownloadButton(parentElement) {
    parentElement.innerHTML = parentElement.innerHTML +
        `<button type="button" class="btn btn-success" id="ml-download-btn">Download</button>`
}