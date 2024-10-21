/**
 * Problem: https://leetcode.com/problems/two-sum/
 *
 * Given an array of numbers `nums` and a target number `target`,
 * find two numbers in the array that add up to the target.
 * Return the indices of these two numbers.
 *
 * Assumptions:
 * - There is exactly one solution.
 * - You cannot use the same element twice.
 * - You can return the answer in any order.
 *
 * Intuition:
 * - We need to find two numbers in the array that add up to the given target.
 * - Using a map (or hash table), we can efficiently check for each number's complement as we loop through the array.
 *
 * Approach:
 * - Create a map to store values and their indices.
 * - Loop through the array.
 * - For each element, calculate its complement (i.e., `target - current element`).
 * - Check if the complement exists in the map.
 * - If it does, return the indices of the complement and the current element.
 * - If it does not, add the current element and its index to the map.
 * - If no solution is found by the end of the loop, return an empty array.
 *
 * Mathematical Theory:
 * - For each element `x` in the array, we need to find another element `y` such that `x + y = target`.
 * - Rearranging the equation, we get `y = target - x`.
 * - This means for each element `x`, we need to check if `target - x` exists in the array.
 *
 * Algorithm:
 * 1. Initialize an empty map.
 * 2. Loop through the array:
 *    a. Calculate the complement of the current element.
 *    b. Check if the complement exists in the map.
 *    c. If it does, return the indices.
 *    d. If it does not, add the current element and its index to the map.
 * 3. If no solution is found, return an empty array.
 *
 * @param {number[]} nums - Array of numbers.
 * @param {number} target - Target sum.
 * @return {number[]} - Indices of the two numbers that add up to the target.
 */
var twoSum = function(nums, target) {
    // Create a map to store numbers and their indices
    const map = new Map();

    // Loop through the array
    for (let i = 0; i < nums.length; i++) {
        // Calculate the number needed to reach the target
        const complement = target - nums[i];

        // Check if the needed number is already in the map
        if (map.has(complement)) {
            // If it is, return the indices of the two numbers
            return [map.get(complement), i];
        }

        // If it is not, add the current number and its index to the map
        map.set(nums[i], i);
    }

    // If no solution is found, return an empty array
    return [];
};

// Time Complexity: O(n)
// We go through the array once, and each operation inside the loop is fast.

// Space Complexity: O(n)
// We store up to n numbers in the map, where n is the length of the array.


console.time('twoSum');
console.log(twoSum([2, 7, 11, 15], 9));  // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6));        // Output: [1, 2]
console.log(twoSum([3, 3], 6));            // Output: [0, 1]
console.timeEnd('twoSum');