/**
 * Problem: Median of Two Sorted Arrays
 *
 * Problem link:
 * https://leetcode.com/problems/median-of-two-sorted-arrays/
 *
 * Problem statement:
 * Given two sorted arrays nums1 and nums2 of size m and n respectively,
 * return the median of the two sorted arrays.
 * The overall run time complexity should be O(log(m+n)).
 *
 * Assumptions:
 * - Both arrays are sorted in ascending order.
 * - The arrays can be of different lengths.
 * - The combined length of the arrays is at least 1.
 * - Array elements are numbers (integers or floats).
 *
 * Intuition behind the solution:
 * To achieve O(log(m+n)) time complexity, we use a binary search approach.
 * The key insight is to partition both arrays in such a way that the left
 * parts of both arrays combined contain exactly half of the total elements,
 * and all elements in the left parts are smaller than or equal to all
 * elements in the right parts.
 *
 * Approach:
 * 1. Ensure nums1 is the smaller array to optimize the binary search.
 * 2. Perform binary search on the smaller array to find the correct partition.
 * 3. Calculate the corresponding partition in the larger array.
 * 4. Adjust the partitions until we find the correct split where:
 *    - max(left_part1) <= min(right_part2) and
 *    - max(left_part2) <= min(right_part1)
 * 5. Once the correct partition is found, calculate the median based on
 *    the maximum of the left parts and the minimum of the right parts.
 *
 * Mathematical theory:
 * - Time Complexity: O(log(min(m,n))) - Binary search on the smaller array.
 * - Space Complexity: O(1) - Constant extra space used.
 *
 * Detailed algorithm:
 * 1. If nums1 is longer than nums2, swap them to ensure nums1 is the shorter array.
 * 2. Initialize binary search boundaries: imin = 0, imax = m (length of nums1).
 * 3. Calculate halfLen = (m + n + 1) / 2.
 * 4. While imin <= imax:
 *    a. Set i = (imin + imax) / 2 and j = halfLen - i.
 *    b. If i < m and nums1[i] < nums2[j-1], increase imin.
 *    c. Else if i > 0 and nums1[i-1] > nums2[j], decrease imax.
 *    d. Else, we've found the correct partition:
 *       - Calculate maxLeft as the maximum of the left parts.
 *       - If total length is odd, return maxLeft.
 *       - If total length is even, calculate minRight as the minimum of
 *         the right parts and return average of maxLeft and minRight.
 * 5. If no valid partition is found, throw an error.
 *
 * @param {number[]} nums1 - First sorted array of numbers.
 * @param {number[]} nums2 - Second sorted array of numbers.
 * @return {number} The median of the two sorted arrays.
 */


var findMedianSortedArrays = function(nums1, nums2) {
    // Ensure nums1 is the smaller array
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    const m = nums1.length;
    const n = nums2.length;
    let imin = 0, imax = m, halfLen = Math.floor((m + n + 1) / 2);

    while (imin <= imax) {
        const i = Math.floor((imin + imax) / 2);
        const j = halfLen - i;

        if (i < m && nums1[i] < nums2[j - 1]) {
            // i is too small, must increase it
            imin = i + 1;
        } else if (i > 0 && nums1[i - 1] > nums2[j]) {
            // i is too big, must decrease it
            imax = i - 1;
        } else {
            // i is perfect
            let maxOfLeft;
            if (i === 0) { maxOfLeft = nums2[j - 1]; }
            else if (j === 0) { maxOfLeft = nums1[i - 1]; }
            else { maxOfLeft = Math.max(nums1[i - 1], nums2[j - 1]); }

            if ((m + n) % 2 === 1) {
                return maxOfLeft;
            }

            let minOfRight;
            if (i === m) { minOfRight = nums2[j]; }
            else if (j === n) { minOfRight = nums1[i]; }
            else { minOfRight = Math.min(nums1[i], nums2[j]); }

            return (maxOfLeft + minOfRight) / 2.0;
        }
    }

    throw new Error("Input arrays are not sorted or have invalid lengths.");
};

// Example usage
console.log(findMedianSortedArrays([1, 3], [2])); // Output: 2.00000
console.log(findMedianSortedArrays([1, 2], [3, 4])); // Output: 2.50000