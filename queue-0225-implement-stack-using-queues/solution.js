var MyStack = function () {
  this.q = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.q.splice(0, 0, x); //splice(start, deleteCount, item1)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  return this.q.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  let val = this.q.at(0);
  return val;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.q.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
