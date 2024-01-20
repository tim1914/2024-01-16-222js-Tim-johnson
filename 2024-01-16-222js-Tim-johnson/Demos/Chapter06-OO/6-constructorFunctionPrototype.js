function BetterSquare(width) {
      this.width = width;
}

BetterSquare.prototype.area = function() {
  return this.width * this.width;
};

const square = new BetterSquare(4);
console.log(square.area());

