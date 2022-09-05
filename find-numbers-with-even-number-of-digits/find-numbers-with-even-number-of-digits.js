var findNumbers = function(nums) {
    let digitCount = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i].toString().length % 2 === 0) {
            digitCount++;
        }
    }
    
    return digitCount;
};