function setup() {
canvas = createCanvas(400, 400);
canvas.position(110, 125);
video = createCapture(VIDEO);
video.hide()

tint_color = "" ;
}

function draw() {
circle(20,20,20)
fill(0,800,0)
circle(380,380,20)
circle(20,380,20)
circle(380,20,20)
rect(40,25,300,20)
rect(25,40,300,20)
rect(25,25,300,20)
rect(40,40,300,20)
}

function take_snapshot() {

    SVGAElement('student_name.png');
}
function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}