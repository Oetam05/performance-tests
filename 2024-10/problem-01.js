function waterTrap(height) {
  if (height.length === 0) return 0;

  let totalWater = 0;
  const n = height.length;
  const leftMax = new Array(n).fill(0);
  const rightMax = new Array(n).fill(0);

  // Initialize leftMax array
  leftMax[0] = height[0];
  for (let i = 1; i < n; i++) {
      leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }

  // Initialize rightMax array
  rightMax[n - 1] = height[n - 1];
  for (let i = n - 2; i >= 0; i--) {
      rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }

  // Calculate trapped water
  for (let i = 0; i < n; i++) {
      totalWater += Math.min(leftMax[i], rightMax[i]) - height[i];
  }

  return totalWater;
}

module.exports = { waterTrap };


console.log(waterTrap([4,2,0,3,2,5]))