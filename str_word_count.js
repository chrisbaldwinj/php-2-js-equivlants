/*
  created by: chrisbaldwinj
  edited last on: 9/10/15
*/


// str_word_count
// PHP Docs: http://php.net/manual/en/function.str-word-count.php


function str_word_count(string,format) {
  if(typeof string !== "string")
    return false;
    
    
  if(format && format !== 0) {
      switch(format)
      {
        case 1: return string.split(" ");
        case 2: return (function() {
          var assoc = {};
          var str_match = string.split(" ");
          var len = str_match.length;
          for(var i=0;i<len;i++) {
            assoc[i] = str_match[i];
          }
          return assoc;
        })();
      }
  }

  if( (!format || format && format === 0) )
  return (string.split(" ").length);
}

/*
  Notes:
    The only parameter that this function does not use is the additional characters. Yet at least.
*/
