var Particle = function(position) {
    this.acceleration = createVector(0.0,0.1);
    this.velocity = createVector(random(0, 1), random(0, -1));
    this.position = position.copy();
    this.timeToLive = 255;
};

Particle.prototype.run = function() {
    this.update();
    this.display();
};

Particle.prototype.update = function(){
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.timeToLive -= 3;
};

Particle.prototype.display = function() {
  noStroke();
    strokeWeight(2);
    fill(235, 101, 23,this.timeToLive);
    ellipse(this.position.x,this.position.y, 20, 20);


    
};

Particle.prototype.isDead = function() {
    if (this.timeToLive < 0) {
        return true;
    } else {
        return false;
    }
};

var ParticleSystem = function(position) {
    this.origin = position.copy();
    this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
    this.particles.push(new Particle(this.origin)); 
 
};

ParticleSystem.prototype.run = function() {
  for (var i = this.particles.length-1; i >= 0; i--) {
      var p = this.particles[i];
      p.run();
      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }
};

