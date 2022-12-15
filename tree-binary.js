"use strict";

/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /** minDepth(): return the minimum depth from the invoking node -- that is,
   * the length of the shortest path from the invoking node to a leaf. */
  minDepth() {

    if (!this.left && !this.right) { return 1; }
    // let rightDepth = this.right ? this.right.minDepth() : 0;
    // let leftDepth = this.left ? this.left.minDepth() : 0;
    let leftDepth;
    let rightDepth;

    if (!this.left) {
      rightDepth = this.right.minDepth();
      leftDepth = Infinity;
    } else if (!this.right) {
      leftDepth = this.left.minDepth();
      rightDepth = Infinity;
    } else {
      rightDepth = this.right.minDepth();
      leftDepth = this.left.minDepth();
    }

    return Math.min(leftDepth, rightDepth) + 1;
  }

  /** maxDepth(): return the maximum depth from the invoking node -- that is,
   * the length of the longest path from the invoking node to a leaf. */
  maxDepth() {
    let leftDepth = this.left ? this.left.maxDepth() : 0;
    let rightDepth = this.right ? this.right.maxDepth() : 0;

    return Math.max(leftDepth, rightDepth) + 1;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  minDepth() {
    if (!this.root) return 0;

    return this.root.minDepth();
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  maxDepth() {
    if (!this.root) return 0;

    return this.root.maxDepth();
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }
}

module.exports = { BinaryTree, BinaryTreeNode };
