# Split a String Into the Max Number of Unique Substrings

## Problem (সমস্যা)

**English:**
Given a string `s`, return the maximum number of unique substrings that the given string can be split into. You can split string `s` into any list of non-empty substrings, where the concatenation of the substrings forms the original string. However, you must split the substrings such that all of them are unique. A substring is a contiguous sequence of characters within a string.

**বাংলা:**
একটি স্ট্রিং `s` দেওয়া আছে, স্ট্রিংটিকে সর্বাধিক সংখ্যক অনন্য সাবস্ট্রিংয়ে বিভক্ত করার জন্য সর্বাধিক সংখ্যা ফেরত দিন। আপনি স্ট্রিং `s` কে যেকোনো নন-এম্পটি সাবস্ট্রিংয়ের তালিকায় বিভক্ত করতে পারেন, যেখানে সাবস্ট্রিংগুলির সংযোজন মূল স্ট্রিংটি গঠন করে। তবে, আপনাকে সাবস্ট্রিংগুলি এমনভাবে বিভক্ত করতে হবে যাতে সেগুলি সবই অনন্য হয়। একটি সাবস্ট্রিং একটি স্ট্রিংয়ের মধ্যে একটি ধারাবাহিক অক্ষরের ক্রম।

## Assumptions (ধারণা)

**English:**
- The length of the string `s` is between 1 and 16.
- The string `s` contains only lowercase English letters.

**বাংলা:**
- স্ট্রিং `s` এর দৈর্ঘ্য 1 থেকে 16 এর মধ্যে।
- স্ট্রিং `s` শুধুমাত্র ছোট হাতের ইংরেজি অক্ষর ধারণ করে।

## Intuition behind the solution (সমাধানের অন্তর্দৃষ্টি)

**English:**
The problem can be approached using backtracking. We need to explore all possible ways to split the string and keep track of the unique substrings. The goal is to maximize the count of unique substrings.

**বাংলা:**
সমস্যাটি ব্যাকট্র্যাকিং ব্যবহার করে সমাধান করা যেতে পারে। আমাদের স্ট্রিংটি বিভক্ত করার সমস্ত সম্ভাব্য উপায়গুলি অন্বেষণ করতে হবে এবং অনন্য সাবস্ট্রিংগুলির ট্র্যাক রাখতে হবে। লক্ষ্য হল অনন্য সাবস্ট্রিংগুলির সংখ্যা সর্বাধিক করা।

## Approach (পদ্ধতি)

**English:**
1. Use a backtracking function to explore all possible splits.
2. Maintain a set to keep track of the unique substrings.
3. For each position in the string, try to split and recursively call the function for the remaining part of the string.
4. Update the maximum count of unique substrings found.

**বাংলা:**
1. সমস্ত সম্ভাব্য বিভাজন অন্বেষণ করতে একটি ব্যাকট্র্যাকিং ফাংশন ব্যবহার করুন।
2. অনন্য সাবস্ট্রিংগুলির ট্র্যাক রাখতে একটি সেট বজায় রাখুন।
3. স্ট্রিংয়ের প্রতিটি অবস্থানের জন্য, বিভক্ত করার চেষ্টা করুন এবং স্ট্রিংয়ের অবশিষ্ট অংশের জন্য পুনরাবৃত্তি করে ফাংশনটি কল করুন।
4. পাওয়া অনন্য সাবস্ট্রিংগুলির সর্বাধিক সংখ্যা আপডেট করুন।

## Mathematical theory (গাণিতিক তত্ত্ব)

**English:**
- **Time Complexity:** O(2^n), where n is the length of the string. This is because we are exploring all possible ways to split the string.
- **Space Complexity:** O(n) for the recursion stack and the set to store unique substrings.

**বাংলা:**
- **সময় জটিলতা:** O(2^n), যেখানে n হল স্ট্রিংয়ের দৈর্ঘ্য। এটি কারণ আমরা স্ট্রিংটি বিভক্ত করার সমস্ত সম্ভাব্য উপায়গুলি অন্বেষণ করছি।
- **স্থান জটিলতা:** O(n) পুনরাবৃত্তি স্ট্যাক এবং অনন্য সাবস্ট্রিংগুলি সংরক্ষণ করার জন্য সেটের জন্য।

## Detailed algorithm (বিস্তারিত অ্যালগরিদম)

**English:**
1. Initialize a variable `maxCount` to store the maximum number of unique substrings.
2. Define a backtracking function that takes the current start index and a set of seen substrings.
3. If the start index reaches the end of the string, update `maxCount` with the size of the set.
4. Iterate through the string from the start index to the end.
5. For each position, extract the substring and check if it is in the set.
6. If not, add it to the set and recursively call the backtracking function for the next part of the string.
7. Remove the substring from the set after the recursive call.

**বাংলা:**
1. সর্বাধিক সংখ্যক অনন্য সাবস্ট্রিং সংরক্ষণ করতে একটি ভেরিয়েবল `maxCount` আরম্ভ করুন।
2. একটি ব্যাকট্র্যাকিং ফাংশন সংজ্ঞায়িত করুন যা বর্তমান শুরু সূচক এবং দেখা সাবস্ট্রিংগুলির একটি সেট নেয়।
3. যদি শুরু সূচকটি স্ট্রিংয়ের শেষে পৌঁছায়, সেটের আকার দিয়ে `maxCount` আপডেট করুন।
4. স্ট্রিংয়ের শুরু সূচক থেকে শেষ পর্যন্ত পুনরাবৃত্তি করুন।
5. প্রতিটি অবস্থানের জন্য, সাবস্ট্রিংটি বের করুন এবং এটি সেটে আছে কিনা তা পরীক্ষা করুন।
6. যদি না থাকে, সেটে যোগ করুন এবং স্ট্রিংয়ের পরবর্তী অংশের জন্য পুনরাবৃত্তি করে ব্যাকট্র্যাকিং ফাংশনটি কল করুন।
7. পুনরাবৃত্তি কলের পরে সাবস্ট্রিংটি সেট থেকে সরান।

## Input parameters and return value description (ইনপুট প্যারামিটার এবং রিটার্ন ভ্যালু বর্ণনা)

**English:**
- **Input:** A string `s`.
- **Output:** An integer representing the maximum number of unique substrings.

**বাংলা:**
- **ইনপুট:** একটি স্ট্রিং `s`।
- **আউটপুট:** সর্বাধিক সংখ্যক অনন্য সাবস্ট্রিং প্রতিনিধিত্বকারী একটি পূর্ণসংখ্যা।

## Code implementation (কোড বাস্তবায়ন)

```javascript
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
```

## Complexity analysis (জটিলতা বিশ্লেষণ)

**English:**
- **Time Complexity:** O(2^n), where n is the length of the string. This is because we are exploring all possible ways to split the string.
- **Space Complexity:** O(n) for the recursion stack and the set to store unique substrings.

**বাংলা:**
- **সময় জটিলতা:** O(2^n), যেখানে n হল স্ট্রিংয়ের দৈর্ঘ্য। এটি কারণ আমরা স্ট্রিংটি বিভক্ত করার সমস্ত সম্ভাব্য উপায়গুলি অন্বেষণ করছি।
- **স্থান জটিলতা:** O(n) পুনরাবৃত্তি স্ট্যাক এবং অনন্য সাবস্ট্রিংগুলি সংরক্ষণ করার জন্য সেটের জন্য।

## Example (উদাহরণ)

**English:**
- **Input:** `s = "ababccc"`
    - **Output:** `5`
    - **Explanation:** One way to split maximally is `['a', 'b', 'ab', 'c', 'cc']`. Splitting like `['a', 'b', 'a', 'b', 'c', 'cc']` is not valid as you have `a` and `b` multiple times.

- **Input:** `s = "aba"`
    - **Output:** `2`
    - **Explanation:** One way to split maximally is `['a', 'ba']`.

- **Input:** `s = "aa"`
    - **Output:** `1`
    - **Explanation:** It is impossible to split the string any further.

**বাংলা:**
- **ইনপুট:** `s = "ababccc"`
    - **আউটপুট:** `5`
    - **ব্যাখ্যা:** সর্বাধিক বিভক্ত করার একটি উপায় হল `['a', 'b', 'ab', 'c', 'cc']`। `['a', 'b', 'a', 'b', 'c', 'cc']` এর মতো বিভক্ত করা বৈধ নয় কারণ আপনার কাছে `a` এবং `b` একাধিকবার রয়েছে।

- **ইনপুট:** `s = "aba"`
    - **আউটপুট:** `2`
    - **ব্যাখ্যা:** সর্বাধিক বিভক্ত করার একটি উপায় হল `['a', 'ba']`।

- **ইনপুট:** `s = "aa"`
    - **আউটপুট:** `1`
    - **ব্যাখ্যা:** স্ট্রিংটি আর বিভক্ত করা সম্ভব নয়।