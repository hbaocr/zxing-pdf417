const frame_time = 300;
let video_canvas_org;
function getCenterFrame(canvas_ele){
    let w = canvas_ele.width;
    let h = canvas_ele.height;
    let rect_size ={
        x:Math.floor(w / 2),
        y:Math.floor(h / 2)
    }
    let rect_start = {
        x: Math.floor((w - rect_size.x) / 2),
        y: Math.floor((h - rect_size.y) / 2)
    }
    return {rect_start,rect_size}

}
function drawFrameOnCanvas() {
    //const canvas = document.getElementById('canvasVideo');
    //const ctx = canvas.getContext('2d');
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");

    const video = document.getElementById('video');
    let w = video.videoWidth;
    let h = video.videoHeight;
    canvas.width = w;
    canvas.height = h
    

    ctx.drawImage(video, 0, 0);
    let {rect_start,rect_size}=getCenterFrame(canvas);

    //ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.rect(rect_start.x, rect_start.y, rect_size.x, rect_size.y);
    ctx.stroke();

    //go to resize
    let display_canvas = document.getElementById('canvasVideo');
    display_canvas.width = 360
    resize_canvas(canvas,display_canvas);
    video_canvas_org=canvas;
    console.log(`display w =${display_canvas.width} h =${display_canvas.height} || original w =${video_canvas_org.width} h =${video_canvas_org.height}`);

}


setInterval(() => {
    drawFrameOnCanvas();

}, frame_time)