function parseWordFile(fileText) {
  const words = [];
  const lines = fileText.split("\n");
  
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

    words.push(wordEntry);
  }

  console.log(words); // for debugging, log the parsed words
  return words;
}