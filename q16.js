function leapYearRange(stYear  , endYear) {
    let yearRange = [];
    for (var i = stYear; i <= endYear; i++){
        if ( i % 4 ===0 )
        yearRange.push(i);
    }
    return yearRange;
    }
console.log(leapYearRange(2000,2020));