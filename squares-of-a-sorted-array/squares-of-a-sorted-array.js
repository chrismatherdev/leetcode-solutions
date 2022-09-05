var sortedSquares = function(nums) {
    return mappedSquares = nums.map(num => num * num).sort(function(a, b) {
        return a - b;
    });
};