let selectedDeviceId;

async function CameraSelectionEnum() {
    const sourceSelect = document.getElementById('sourceSelect');
    const devices = await navigator.mediaDevices.enumerateDevices();
    const videoDevices = devices.filter(device => device.kind === 'videoinput');
    const options = videoDevices.map(videoDevice => {
        return `<option value="${videoDevice.deviceId}">${videoDevice.label}</option>`;
    });
    sourceSelect.innerHTML = options.join('');
    sourceSelect.onchange = () => {
        selectedDeviceId = sourceSelect.value;
        CameraStart(selectedDeviceId)
    };

    sourceSelect.onclick = () => {
        selectedDeviceId = sourceSelect.value;
        CameraStart(selectedDeviceId)
    };

    const sourceSelectPanel = document.getElementById('sourceSelectPanel');
    sourceSelectPanel.style.display = 'block';
};

function CameraStart(myExactCameraOrBustDeviceId) {
    const video = document.getElementById('video');
    // Get access to the camera!
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {

        //let constraint={ video: { deviceId: { exact: myExactCameraOrBustDeviceId } } }
        let constraint = {
            video: {
                width: { min: 1280, ideal: 1280 },
                height: { min: 720, ideal: 720 },
                deviceId: {
                    exact: myExactCameraOrBustDeviceId
                }
            }
        }

        navigator.mediaDevices.getUserMedia(constraint).then(function (stream) {
            video.srcObject = stream;
            video.play();
        });
    }

}

function CameraInit() {
    console.log('Camera initialized');
    CameraSelectionEnum();
}




