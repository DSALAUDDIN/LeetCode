# Median of Two Sorted Arrays

## Problem (সমস্যা)

**English:**
Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log(m+n)).

**বাংলা:**
দুটি সাজানো অ্যারে `nums1` এবং `nums2` দেওয়া আছে, যাদের আকার যথাক্রমে `m` এবং `n`। এই দুটি সাজানো অ্যারের মধ্যম সংখ্যা ফেরত দিন। মোট রান টাইম কমপ্লেক্সিটি O(log(m+n)) হওয়া উচিত।

## Assumptions (ধারণা)

**English:**
- Both arrays are sorted in ascending order.
- The arrays can be of different lengths.
- The combined length of the arrays is at least 1.
- Array elements are numbers (integers or floats).

**বাংলা:**
- উভয় অ্যারেই ঊর্ধ্বক্রমে সাজানো।
- অ্যারেগুলি বিভিন্ন দৈর্ঘ্যের হতে পারে।
- অ্যারেগুলির সম্মিলিত দৈর্ঘ্য কমপক্ষে 1।
- অ্যারের উপাদানগুলি সংখ্যা (ইন্টিজার বা ফ্লোট)।

## Intuition behind the solution (সমাধানের অন্তর্দৃষ্টি)

**English:**
To achieve O(log(m+n)) time complexity, we use a binary search approach. The key insight is to partition both arrays in such a way that the left parts of both arrays combined contain exactly half of the total elements, and all elements in the left parts are smaller than or equal to all elements in the right parts.

**বাংলা:**
O(log(m+n)) সময় জটিলতা অর্জন করতে, আমরা একটি বাইনারি সার্চ পদ্ধতি ব্যবহার করি। মূল অন্তর্দৃষ্টি হল উভয় অ্যারেকে এমনভাবে ভাগ করা যাতে উভয় অ্যারের বাম অংশগুলি সম্মিলিতভাবে মোট উপাদানের ঠিক অর্ধেক ধারণ করে এবং বাম অংশের সমস্ত উপাদান ডান অংশের সমস্ত উপাদানের চেয়ে ছোট বা সমান হয়।

## Approach (পদ্ধতি)

**English:**
1. Ensure `nums1` is the smaller array to optimize the binary search.
2. Perform binary search on the smaller array to find the correct partition.
3. Calculate the corresponding partition in the larger array.
4. Adjust the partitions until we find the correct split where:
    - `max(left_part1) <= min(right_part2)` and
    - `max(left_part2) <= min(right_part1)`
5. Once the correct partition is found, calculate the median based on the maximum of the left parts and the minimum of the right parts.

**বাংলা:**
1. বাইনারি সার্চ অপ্টিমাইজ করতে `nums1` ছোট অ্যারে নিশ্চিত করুন।
2. সঠিক পার্টিশন খুঁজে পেতে ছোট অ্যারেতে বাইনারি সার্চ করুন।
3. বড় অ্যারেতে সংশ্লিষ্ট পার্টিশন গণনা করুন।
4. পার্টিশনগুলি সামঞ্জস্য করুন যতক্ষণ না আমরা সঠিক বিভাজন খুঁজে পাই যেখানে:
    - `max(left_part1) <= min(right_part2)` এবং
    - `max(left_part2) <= min(right_part1)`
5. সঠিক পার্টিশন পাওয়া গেলে, বাম অংশের সর্বাধিক এবং ডান অংশের সর্বনিম্নের উপর ভিত্তি করে মধ্যম সংখ্যা গণনা করুন।

## Mathematical theory (গাণিতিক তত্ত্ব)

**English:**
- **Time Complexity:** O(log(min(m,n))) - Binary search on the smaller array.
- **Space Complexity:** O(1) - Constant extra space used.

**বাংলা:**
- **সময় জটিলতা:** O(log(min(m,n))) - ছোট অ্যারেতে বাইনারি সার্চ।
- **স্থান জটিলতা:** O(1) - ধ্রুবক অতিরিক্ত স্থান ব্যবহৃত।

## Detailed algorithm (বিস্তারিত অ্যালগরিদম)

**English:**
1. If `nums1` is longer than `nums2`, swap them to ensure `nums1` is the shorter array.
2. Initialize binary search boundaries: `imin = 0`, `imax = m` (length of `nums1`).
3. Calculate `halfLen = (m + n + 1) / 2`.
4. While `imin <= imax`:
    - Set `i = (imin + imax) / 2` and `j = halfLen - i`.
    - If `i < m` and `nums1[i] < nums2[j-1]`, increase `imin`.
    - Else if `i > 0` and `nums1[i-1] > nums2[j]`, decrease `imax`.
    - Else, we've found the correct partition:
        - Calculate `maxLeft` as the maximum of the left parts.
        - If total length is odd, return `maxLeft`.
        - If total length is even, calculate `minRight` as the minimum of the right parts and return the average of `maxLeft` and `minRight`.
5. If no valid partition is found, throw an error.

**বাংলা:**
1. যদি `nums1` `nums2` এর চেয়ে দীর্ঘ হয়, তবে তাদের অদলবদল করুন যাতে `nums1` ছোট অ্যারে হয়।
2. বাইনারি সার্চ সীমানা আরম্ভ করুন: `imin = 0`, `imax = m` (`nums1` এর দৈর্ঘ্য)।
3. `halfLen = (m + n + 1) / 2` গণনা করুন।
4. যতক্ষণ `imin <= imax`:
    - `i = (imin + imax) / 2` এবং `j = halfLen - i` সেট করুন।
    - যদি `i < m` এবং `nums1[i] < nums2[j-1]`, `imin` বাড়ান।
    - অন্যথায় যদি `i > 0` এবং `nums1[i-1] > nums2[j]`, `imax` কমান।
    - অন্যথায়, আমরা সঠিক পার্টিশন পেয়েছি:
        - বাম অংশগুলির সর্বাধিক হিসাবে `maxLeft` গণনা করুন।
        - যদি মোট দৈর্ঘ্য বিজোড় হয়, `maxLeft` ফেরত দিন।
        - যদি মোট দৈর্ঘ্য জোড় হয়, ডান অংশগুলির সর্বনিম্ন হিসাবে `minRight` গণনা করুন এবং `maxLeft` এবং `minRight` এর গড় ফেরত দিন।
5. যদি কোনও বৈধ পার্টিশন পাওয়া না যায়, একটি ত্রুটি নিক্ষেপ করুন।

## Input parameters and return value description (ইনপুট প্যারামিটার এবং রিটার্ন ভ্যালু বর্ণনা)

**English:**
- **Input:** Two sorted arrays `nums1` and `nums2`.
- **Output:** The median of the two sorted arrays as a number.

**বাংলা:**
- **ইনপুট:** দুটি সাজানো অ্যারে `nums1` এবং `nums2`।
- **আউটপুট:** দুটি সাজানো অ্যারের মধ্যম সংখ্যা একটি সংখ্যা হিসাবে।

## Code implementation (কোড বাস্তবায়ন)

```javascript
var findMedianSortedArrays = function(nums1, nums2) {
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
            imin = i + 1;
        } else if (i > 0 && nums1[i - 1] > nums2[j]) {
            imax = i - 1;
        } else {
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