var lengthOfLongestSubstring = function(s) {
    var maxLength = 0
    var left = 0
    var charSet = new Set()
    
    for (var right = 0; right < s.length; right++){
        while (charSet.has(s[right])){
            charSet.delete(s[left])
            left += 1
        }
        charSet.add(s[right])
        maxLength = Math.max(maxLength, right - left + 1)
    }
    
    return maxLength
};