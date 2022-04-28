/* Write a program to compress the given string. 
   For example if the given string is aabaaaccdddde then the output should be a2ba3c2d4e.
*/ 


function compress(s)
{
  let char = s[0];    // first character
  let count = 0;      // no. of occurences of a character
  let result = '';    // compressed string
  for(i of s)
  {
    // if same character occurs, keep counting
    if(i === char)
    {
      count++;
    }
    // a new character occurs
    else
    {
    // append the character and its count to result
      result += char;
      if(count != 1) // skip count for single occurences of a char
      { 
        result += count;
      }            
      // reset char and count
      char = i;
      count = 1;
    }
  }
  // append final character and its count
  result += char;
  if(count != 1)
  {
    result += count;
  }  
  // display result in UI
  document.getElementById('result-box-h6').innerHTML=result;
}




