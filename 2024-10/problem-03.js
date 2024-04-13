function maxArea(height) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
      // Calculate the current area
      const currentArea = Math.min(height[left], height[right]) * (right - left);
      // Update maxArea if currentArea is greater
      maxArea = Math.max(maxArea, currentArea);

      // Move the pointer with smaller height towards the other pointer
      if (height[left] < height[right]) {
          left++;
      } else {
          right--;
      }
  }

  return maxArea;
}

module.exports = { maxArea };

console.log(maxArea([1,1]))