const longestConsecutive = (nums) => {
  let maxLength = 0;
  let set = new Set(nums); //Intialize set with nums array

  for (let num of nums) {
    if (set.has(num - 1)) continue; // Not the start of a new consecutive list, so skip.
    let length = 1;
    while (set.has(num + length)) length++; // Build up the length as we find the next consecutive num
    maxLength = Math.max(length, maxLength); // Update max
  }
  return maxLength;
};