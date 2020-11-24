


function resize_canvas(canvas_src, canvas_dst) {

    let settings = {
        max_width: canvas_dst.width,
        max_height: canvas_dst.height
    }
    let ratio = 1
    if (canvas_src.width > settings.max_width)
        ratio = settings.max_width / canvas_src.width
    else if (canvas_src.height > settings.max_height)
        ratio = settings.max_height / canvas_src.height

    canvas_dst.width = Math.floor(canvas_src.width * ratio)
    canvas_dst.height = Math.floor(canvas_src.height * ratio)
    let ctx = canvas_dst.getContext("2d");
    ctx.drawImage(canvas_src, 0, 0, canvas_src.width, canvas_src.height, 0, 0, canvas_dst.width, canvas_dst.height)
}