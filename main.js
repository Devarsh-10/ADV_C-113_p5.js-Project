function preload()
{};

function setup()
{
    canvas = createCanvas(600,420);
    canvas.position(110,140);
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 180, 120, 220, 200);
    fill(255,0,0);
    stroke(255,0,0);
    circle(50,50,75);
    circle(50,365,75);
    circle(545,365,75);
    circle(545,50,75);
    
    fill(255,255,0)
    stroke(255,255,0);
    rect(85,35,425,30);
    rect(85,350,425,30);
    rect(35,85,30,245);
    rect(530,85,30,245);
}

function take_snapshot()
{
    save('image_result.png');
}
