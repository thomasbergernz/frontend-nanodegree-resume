var sampleArray = [0,0,7];

var incrementLastArrayElement = function(_array) {
    var newArray = [];
    // Your code should make newArray equal to an array that has the same
    // values as _array, but the last number has increased by one.
    
    // For example:
    // _array = [1, 2, 3];
    // turns into:
    // newArray = [1, 2, 4];
    
    // Your code goes in here! http://forums.udacity.com/questions/100243446/where-does-_array-come-from
    // array.pop() The pop() method pulls the last element off of the given array and returns it. This alters the array on which the method was called.
    // array.push() The push() method can append one or more elements to the end of an array. This alters the array on which the method was called.
    newArray = _array.slice(0);
    var lastValue = newArray.pop();
    newArray.push(lastValue + 1);
    // Don't delete this line!
    return newArray;
};

// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));