// Code your solution here
// findMatching- This function takes an array of drivers'
//  names and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.

function findMatching(drivers, testString){
    const resultArray = drivers.filter(singleDriver => singleDriver.toUpperCase() === testString.toUpperCase())
    return resultArray;
}
// fuzzyMatch - This function takes an array of drivers' 
// names and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.

function fuzzyMatch(drivers, testString){;
    const resultArray = drivers.filter(singleDriver => singleDriver.substr(0,(testString.length)) === testString)
    return resultArray;
}

// matchName - This function takes an array of driver objects 
// and a string as arguments. Each driver object has two properties: name and hometown. The function should return each element whose name property matches the provided string argument.
function matchName(drivers, testString){
    const resultArray = drivers.filter(driverObj => driverObj.name === testString || driverObj.hometown === testString)
    return resultArray;
}