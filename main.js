// create a player constructor that takes the players name as an argument




//player constructor
function Player(name) {
  this.name = name;
  //add position
  this.position = 0;
  //add a method that moves a player over 1 each time it is called
  this.move = function() {
    this.position += 1;
    //add a method that returns a walk function(option 1)
    this.walk = function() {
      function walker() {
        this.move()
      }
      setInterval(walker.bind(this), 1000);
    }
    //add a method that returns a walk function(option 2)
    this.walker = function() {
      return function() {
        this.move();
      }
    }
  }
}

var player1 = new Player('Jacob');
player1.move();
player1.walk();


//function
var walker = player1.walker;
walker();
walker();

// setTimeOut(function,milliseconds) (option 3)

for (var i = 0; i < 5; i++) {
  (function(i) {
    setTimeout(function(){
      console.log(i);
    }, i * 1000);
  })(i)
}
