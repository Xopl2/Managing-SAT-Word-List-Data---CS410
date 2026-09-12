function parseWordFile(fileText) {
  const words = [];
  const lines = fileText.split("\n");
  
  // iterate through each line in the file
  for (const line of lines) {
    const trimmedLine = line.trim();
    if (trimmedLine === "") continue; // skip empty lines

    const parts = trimmedLine.split(/\s+/); // split by whitespace
    if (parts.length < 3) continue; // skip incomplete lines
    
    // build the word entry object
    const wordEntry = {
        word: parts[0],
        type: parts[1],
        meaning: parts.slice(2).join(" ") // join the rest as the meaning
    };

    // add the word entry to the words array
    words.push(wordEntry);
  }

  // return the array of word entries
  return words;
}

// Converts the in-memory word list back into word.dat's column format.
// The inverse of the above function
function serializeWordList(words) {
  //turn each erntry into one formatted line
  const lines = words.map(entry => entry.word.padEnd(16) + entry.type.padEnd(5) + entry.meaning)

  //join the lines with newlines, and add one to the end of the file
  return lines.join("\n") + "\n";
}