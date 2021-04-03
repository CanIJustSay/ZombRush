var Camera = function() {
    this.x = 0;
    this.y = 0;
    this.xfocus = 0;
    this.yfocus = 0;
    
    Camera.prototype.focus = function(value, axis) {
        return -(value-axis/2);
    };
    Camera.prototype.follow = function(value,find,cushion) {
        value += (find-value)/cushion;
        return value;
    };
};
Camera.prototype.setView = function(x, y, lag) {
    this.xfocus = this.focus(x, width);
    this.yfocus = this.focus(y, height);
    this.x = this.follow(this.x, this.xfocus, lag);
    this.y = this.follow(this.y, this.yfocus, lag);
    push();
    translate(this.x, this.y);
};
Camera.prototype.endView = function() {
    pop();
};