function validBraces(braces){
    const matches = { "(": ")", "{": "}", "[": "]", }
    const lastChar = [];
    for(const letter of braces) {
      if(matches[letter]) {
        lastChar.push(letter);
      } else {
        const lastElem = lastChar.pop();
        if(!lastElem || letter !== matches[lastElem]) { return false; }
      }
    }
  
    return lastChar.length === 0;
}