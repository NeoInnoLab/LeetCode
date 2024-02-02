// Beats 70.97%; Time O(1); Space O(1)
class BrowserNode {
  constructor(url, prev = null, next = null) {
    this.url = url;
    this.prev = prev;
    this.next = next;
  }
}
/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
  this.homepage = new BrowserNode(homepage);
  this.current = this.homepage;
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  let newSite = new BrowserNode(url, this.current);
  this.current.next = newSite; // consider the forward() traversal.
  this.current = newSite;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  let curr = this.current;
  let i = 0;
  while (i++ < steps && curr.prev) {
    curr = curr.prev;
    // i++;
  }
  this.current = curr;
  return curr.url;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  let curr = this.current;
  let i = 0;
  while (i++ < steps && curr.next) {
    curr = curr.next;
    // i++;
  }
  this.current = curr;
  return curr.url;
};

// Solution 2.

// Space O(N); Time O(1); Beats 34.06%
/**
 * @param {string} homepage
 */

// class BrowserHistory {
//     constructor(homepage) {
//         this.history = [homepage];
//         this.current = 0
//     }

//     /**
//     * @param {string} url
//     * @return {void}
//     */
//     visit(url) {
//         // this.history = [...url];
//         // this.current++;
//         /* Explaination: This line creates a new array by spreading the contents of url.
//             If url is a string, it will create an array where each character of the string
//             is an individual element of the array. This is likely not the intended behavior
//             for tracking a history of URLs. */
//         this.history[++this.current] = url;
//         this.history.length = this.current + 1;
//         /*  it removes all elements beyond the current index. */
//     };

//     /**
//     * @param {number} steps
//     * @return {string}
//     */
//     back(steps) {
//         this.current = Math.max(this.current - steps, 0);
//         return this.history[this.current];
//     };

//     /**
//     * @param {number} steps
//     * @return {string}
//     */
//     forward(steps) {
//         this.current = Math.min(this.history.length - 1, this.current+steps)
//         return this.history[this.current];
//     };
// };

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
