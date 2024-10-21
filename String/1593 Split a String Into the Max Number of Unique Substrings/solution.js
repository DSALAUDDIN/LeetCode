/**
 * Problem link: [Link to the problem statement]
 *
 * Problem statement:
 * Given a string s, find the maximum number of unique substrings that can be formed by splitting s.
 *
 * Assumptions:
 * - The input string s is non-empty.
 * - Each substring must be non-empty and consist of contiguous characters from the original string.
 * - Substrings cannot be repeated in the same unique split.
 *
 * Intuition behind the solution:
 * The problem can be approached using a backtracking method, which allows us to explore all possible ways
 * to split the string into unique substrings. By maintaining a set of seen substrings, we can ensure that
 * we only count unique ones during our exploration.
 *
 * Approach:
 * 1. Initialize a variable `maxCount` to keep track of the maximum number of unique substrings found.
 * 2. Use a helper function `backtrack` that takes the current starting index and a set of seen substrings
 *    as arguments.
 * 3. If the starting index reaches the end of the string, update `maxCount` with the size of the `seen` set.
 * 4. Iterate through all possible end indices to form substrings, checking if the substring is unique
 *    before adding it to the `seen` set.
 * 5. Recursively call `backtrack` for the next start position after adding a substring to `seen`, and
 *    remove it afterward for backtracking.
 *
 * Mathematical theory (if applicable):
 * - This approach explores all combinations of substrings, ensuring optimal uniqueness through set operations,
 *   which are average O(1) for insertion and deletion.
 *
 * Detailed algorithm:
 * 1. Define the main function `maxUniqueSplit` that initializes `maxCount`.
 * 2. Define a nested function `backtrack` that:
 *    - Checks if the current start index equals the length of the string, updates `maxCount`.
 *    - Iterates through possible substrings using two indices (start and end).
 *    - If the substring is not in the `seen` set, add it and recurse.
 *    - Remove the substring from the `seen` set after the recursive call.
 * 3. Invoke `backtrack` starting from index 0 with an empty set.
 * 4. Return `maxCount`.
 *
 * Input parameters and return value description:
 * - Input: A non-empty string s.
 * - Output: An integer representing the maximum number of unique substrings that can be formed by splitting s.
 *
 * Complexity analysis:
 * - Time Complexity: O(n * 2^n) in the worst case, where n is the length of the string. This accounts for
 *   generating all possible substrings and the backtracking calls.
 * - Space Complexity: O(n) for the `seen` set, which stores unique substrings.
 *
 * Example:
 * Input: s = "aba"
 * Output: 2 (Unique splits could be ["a", "b", "a"] or ["ab", "a"])
 */

var maxUniqueSplit = function(s) {
    let maxCount = 0;

    const backtrack = (start, seen) => {
        if (start === s.length) {
            maxCount = Math.max(maxCount, seen.size);
            return;
        }

        for (let end = start + 1; end <= s.length; end++) {
            const substring = s.slice(start, end);
            if (!seen.has(substring)) {
                seen.add(substring);
                backtrack(end, seen);
                seen.delete(substring);
            }
        }
    };

    backtrack(0, new Set());
    return maxCount;
};

// Example usage
var param_1 = "ababccc";
var param_2 = "aba";
var ret = maxUniqueSplit(param_1);
var ret2 = maxUniqueSplit(param_2);
console.log(ret); // Output: 5
console.log(ret2); // Output: 2