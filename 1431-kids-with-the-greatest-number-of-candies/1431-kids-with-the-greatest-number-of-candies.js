function kidsWithCandies(candies, extraCandies) {
    const maxCandies = Math.max(...candies);
    
    return candies.map(function maxCandyCheck(candyCount) {
        return candyCount + extraCandies >= maxCandies;
    })
}

