// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// A circular particle

// Constructor
function Particle(x,y,r, _color, type) {
  this.r = r;
  console.log("Particles pushing");
  this.col = _color;
  this.type = type;

  // Define a body
  var bd = new box2d.b2BodyDef();
  bd.type = box2d.b2BodyType.b2_dynamicBody;
  bd.position = scaleToWorld(x,y);

  // Define a fixture
  var fd = new box2d.b2FixtureDef();
  // Fixture holds shape
  fd.shape = new box2d.b2CircleShape();
  fd.shape.m_radius = scaleToWorld(this.r);
  
  // Some physics
  fd.density = 1.0;
  fd.friction = 0.1;
  fd.restitution = 0.3;
 
  // Create the body
  this.body = world.CreateBody(bd);
  // Attach the fixture
  this.body.CreateFixture(fd);

  // Some additional stuff
  this.body.SetLinearVelocity(new box2d.b2Vec2(random(-5, 5), random(2, 5)));
  this.body.SetAngularVelocity(random(-5,5));

    this.body.SetUserData(this);

  // Change color when hit
  this.change = function(_type1) {
     /* if(this.r < 30){
    this.r++;
      }*/
      this.col = color(255, 0, 0);
  }
 
  this.changeOther = function(_type2){
      this.col = color(0, 0, 0);
  }
  
  this.getRelationship = function(_type1, _type2){
    this.type = "NA";
      //air = 0;
      //earth = 1;
      //water = 2;
      //fire = 3; 
      if(_type1 == 1 && _type2 == 2){ //earth & water
          
          
      }
      if(_type1 == 2 && _type2 == 1){ //water & earth
          
          
      }
      if(_type1 == 2 && _type2 == 3){ //water & fire
          
          
      }
      if(_type1 == 3 && _type2 == 2){ //fire & water
          
          
      }
      
      if(_type1 == 1 && _type2 == 3){ //earth & fire
          
          
      }
      
      if(_type1 == 3 && _type2 == 2){ //fire & water
          
          
      }
      
      return this.type;
      
  }
  
  this.getType = function(){
      console.log("Returning type!!!");
      console.log(this.type);
   return this.type;   
  }
  // This function removes the particle from the box2d world
  this.killBody = function() {
    world.DestroyBody(this.body);
  }

  // Is the particle ready for deletion?
  this.done = function() {
    // Let's find the screen position of the particle
    var pos = scaleToPixels(this.body.GetPosition());
    // Is it off the bottom of the screen?
    if (pos.y > height+this.r*2) {
      this.killBody();
      return true;
    }
    return false;
  }

  // Drawing the box
  this.display = function() {
    // Get the body's position
    var pos = scaleToPixels(this.body.GetPosition());
    // Get its angle of rotation
    var a = this.body.GetAngleRadians();
    
    // Draw it!
    rectMode(CENTER);
    push();
    translate(pos.x,pos.y);
    rotate(a);
    fill(this.col);
    stroke(200);
    strokeWeight(2);
    ellipse(0,0,this.r*2,this.r*2);
    // Let's add a line so we can see the rotation
    line(0,0,this.r,0);
    pop();
  }
}