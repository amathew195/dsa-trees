"use strict";

/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }

  /** sumValues(): add up all values of invoking node and its children.
   * Returns sum as an integer. */

  sumValues() {

    let toVisitStack = [this];
    let sum = 0;

    while (toVisitStack.length) {
      let current = toVisitStack.pop();

      sum += current.val;

      for (let child of current.children)
        toVisitStack.push(child);
    }

    return sum;
  }

  /** countEvens(): starting from the invoking node and moving through its
   * children, count how many nodes have even values. Returns that count as
   * an integer. */
  countEvens() {
    let toVisitStack = [this];
    let totalEvenNodes = 0;

    while (toVisitStack.length) {
      let current = toVisitStack.pop();

      if (current.val % 2 === 0) {
        totalEvenNodes++;
      }

      for (let child of current.children)
        toVisitStack.push(child);
    }

    return totalEvenNodes;
  }

  /** numGreater(lowerBound): starting from the invoking node and moving through
   * its children, return a count of the number of nodes whose value is greater
   * than lowerBound. */
  numGreater(lowerBound) {
    let toVisitStack = [this];
    let totalNodes = 0;

    while (toVisitStack.length) {
      let current = toVisitStack.pop();

      if (current.val > lowerBound) {
        totalNodes++;
      }

      for (let child of current.children)
        toVisitStack.push(child);
    }

    return totalNodes;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all values in the tree. */
  sumValues() {
    if (!this.root) return 0;
    return this.root.sumValues();
  }

  /** countEvens(): count all nodes in the tree that have even values. */
  countEvens() {
    if (!this.root) return 0;
    return this.root.countEvens();
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */
  numGreater(lowerBound) {
    if (!this.root) return 0;
    return this.root.numGreater(lowerBound);
  }
}

module.exports = { Tree, TreeNode };
