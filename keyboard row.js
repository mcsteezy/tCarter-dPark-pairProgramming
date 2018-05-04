var findWords = function(words) {
    let matchedWords = [];      //establish empty array
    let row1 = /[qwertyuiop]/gi;   //establish 3 regex that represents the rows
    let row2 = /[asdfghjkl]/gi;
    let row3 = /[zxcvbnm]/gi;  
    for(var i = 0; i < words.length; i++) {  //for each string in words
        let currWord = words[i];             //string.split store element
        let match1 = currWord.match(row1);   //establish r1,r2,r3 value 
        let match2 = currWord.match(row2);
        let match3 = currWord.match(row3);
        /* 
            Several changes made to get code running after debugging.
            First, interesting behavior with Regex. without the /gi tag at the end, the array created by match will not fill with all matched
            characters. Second, join('') does not behave as expected when the array's are created because the regex will return null if no matches
            are made. However, in order to properly get the rest of our function working, we don't have to worry about .join('') as instead of
            of solving with a strict equality match we can solve with the conditionals on lines 39-43.
        */
        if (Array.isArray(match1) && match1.length === currWord.length) {
            matchedWords.push(currWord);
        } else if (Array.isArray(match2) && match2.length === currWord.length) {
            matchedWords.push(currWord);
        } else if (Array.isArray(match3) && match3.length === currWord.length) {
            matchedWords.push(currWord);
        }
    }
    return matchedWords;   //return array
};
