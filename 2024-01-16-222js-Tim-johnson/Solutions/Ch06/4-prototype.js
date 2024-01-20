//overwrite toString

function Product(id, name) {
    this.id = id;
    this.name = name;
}

let cup = new Product(1, "cup");

console.log(`cup`, cup.toString());

Product.prototype.toString = function () { 
            return `Product ${this.id} is a ${this.name}` ;
};

console.log(`cup`, cup.toString());

