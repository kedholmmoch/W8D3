function Cat(owner, name) {
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function () {
  return `${this.owner} loves ${this.name}`;
};


Cat.prototype.meow = function () {
  return this.cuteStatement()
};