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