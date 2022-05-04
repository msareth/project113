function preload() {
  img = loadImage(
    'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pf-frame-ted0908-teddy.png?auto=&bg=transparent&con=3&cs=srgb&dpr=1&fm=png&ixlib=php-3.1.0&mark=rawpixel-watermark.png&markalpha=90&markpad=13&markscale=10&markx=25&q=75&usm=15&vib=3&w=1400&s=b1d79e9f1b1f87f99db7c96cf3c28b2e',
  )
}

function setup() {
  canvas = createCanvas(640, 480)
  canvas.center
  video = createCapture(VIDEO)
  video.hide()
}

function draw() {
  image(img, 0, 0, 640, 480)
  image(video, 70, 55, 480, 370)
}

function take_snapshot() {
  save('student_name.png')
}
