const flock = [];

let alignSlider, cohesionSlider, separtaionSlider;

function setup()
{
  alignSlider = createSlider(0,5,1,0.1);
  cohesionSlider = createSlider(0,5,1,0.1);
  separtaionSlider = createSlider(0,5,1,0.1);
    createCanvas(640,360)
  for(let i = 0; i < 100; i++){
    flock.push(new Boid());
  }
    
}

function draw(){
    background(51);

    for(let boid of flock){
      boid.edges();
      boid.show();
      boid.update();
      boid.flock(flock);
    }
}