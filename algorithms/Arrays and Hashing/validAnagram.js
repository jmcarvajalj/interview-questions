// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true


// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

function isAnagram(s, t) {

    let sortedS = s.split("").sort().join("")
    let sortedT = t.split("").sort().join("") 

    if(!(s.length === t.length)){
        return false
    } else {
        return sortedS === sortedT
    }    
}

let s = "anagram"
let t = "nagaram"
let c = "car"
let r = "rat"

console.log(isAnagram(s, t))
console.log(isAnagram(c, r))
