/* Write a JS function that accepts an array of numbers as an argument, 
   where each number is given as a string and returns the second maximum value from the input array. 
   If there is no second maximum return -1. 
   
   Restrictions:
    1. Time complexity should be O(n).
    2. You are not allowed to change the array.
    3. Maximum length of a single element can be 1024 digits.
*/

function SecondMaxInArray(a)
{
    // check if duplicates exist in the array (no second maximum)
    const unique = Array.from(new Set(a));
    if(unique.length === 1)
    {
        console.log("duplicates")
        return "-1";
    }

    // check if array is empty
    if (a.length === 0)
    {
        console.log("empty")
        return "-1";
    }

    // assign minimum possible integer 
    let max, SecondMax;
    max = SecondMax = Number.MIN_SAFE_INTEGER;

    for (i of a)
    {
        i = Number(i);
        if(i > max) // current element is greater than max
        {
            SecondMax = max;
            max = i;
        }

        else if(i > SecondMax) // curr element is lesser than max but greater than secondMax
        {
            SecondMax = i;
        }
        
    }
    return SecondMax;
}

a = ["-3","-1","-9"];
b = ["3","5","1"];
c = [];
d = ["8","8","8","8"];

console.log(SecondMaxInArray(a));
