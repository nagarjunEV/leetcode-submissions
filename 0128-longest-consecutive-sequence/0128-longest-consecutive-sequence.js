var longestConsecutive = function(nums) {
  if (nums == null || nums.length === 0) return 0;
  const set = new Set(nums);
  let longest = 0;
  for (let num of nums) {
    if (!set.has(num - 1)) {
      let count = 0;
      while (set.has(count+num)) {
        count++;
      }
      longest = Math.max(longest,count);
    }
  }
  return longest;
};