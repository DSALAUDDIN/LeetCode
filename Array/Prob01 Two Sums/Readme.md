# Two Sum Problem

## Problem (সমস্যা)

**English:**
Given an array of numbers `nums` and a target number `target`, find two numbers in the array that add up to the target. Return the indices of these two numbers.

**বাংলা:**
একটি সংখ্যার অ্যারে `nums` এবং একটি লক্ষ্য সংখ্যা `target` দেওয়া আছে, অ্যারেতে এমন দুটি সংখ্যা খুঁজে বের করুন যা যোগফল লক্ষ্য হবে। এই দুটি সংখ্যার ইনডেক্স ফেরত দিন।

## How to Solve (কিভাবে সমাধান করবেন)

**English:**
1. Create a map to store numbers and their indices.
2. Loop through the array.
3. For each number, calculate the number needed to reach the target.
4. Check if the needed number is already in the map.
5. If it is, return the indices of the two numbers.
6. If it is not, add the current number and its index to the map.
7. If no solution is found, return an empty array.

**বাংলা:**
1. সংখ্যাগুলি এবং তাদের ইনডেক্স সংরক্ষণ করার জন্য একটি ম্যাপ তৈরি করুন।
2. অ্যারেটি লুপ করুন।
3. প্রতিটি সংখ্যার জন্য, লক্ষ্য পৌঁছানোর জন্য প্রয়োজনীয় সংখ্যা গণনা করুন।
4. প্রয়োজনীয় সংখ্যা ইতিমধ্যে ম্যাপে আছে কিনা তা চেক করুন।
5. যদি থাকে, দুটি সংখ্যার ইনডেক্স ফেরত দিন।
6. যদি না থাকে, বর্তমান সংখ্যা এবং এর ইনডেক্স ম্যাপে যোগ করুন।
7. কোনও সমাধান পাওয়া না গেলে, একটি খালি অ্যারে ফেরত দিন।

## Example (উদাহরণ)

**English:**
```javascript
console.log(twoSum([2, 7, 11, 15], 9));  // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6));      // Output: [1, 2]
console.log(twoSum([3, 3], 6));         // Output: [0, 1]