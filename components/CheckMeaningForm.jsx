//constant for types of words
const TYPE_NAMES = {n: "Noun", v: "Verb", a: "Adjective"};

// Check-Meaning panel - searches the in memory list and shows the result below
function CheckMeaningForm({ onCheckMeaning }) {
    const [searchTerm, setSearchTerm] = React.useState("");
    const [result, setResult] = React.useState(null);

    function handleSubmit(e) {
        e.preventDefault();

        const trimmed = searchTerm.trim();
        if (trimmed === "") return; // do nothing if the search term is empty

        const match = onCheckMeaning(trimmed);

        //store if it was found and with what meaning
        if (match) {
            setResult({ found: true, entry: match });
        } else {
            setResult({ found: false, term: trimmed });
        }
    }

    return (
        <form className="entry-form" onSubmit={handleSubmit}>
            <h2>Check Word Meaning</h2>

            <label>
                Word
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </label>

            <button type="submit" className="submit-button">Check</button>

            {/* results section */}
            {result && result.found && (
                <div className="search-result">
                    <h3>{result.entry.word}</h3>
                    <p><strong>Type:</strong> {TYPE_NAMES[result.entry.type] || "Unknown"} </p>
                    <p><strong>Meaning:</strong> {result.entry.meaning}</p>
                </div>
            )}

            {/* if the word was not found, display a message */}
            {result && !result.found && (
                <div className="search-result not-found">
                    <p>The word "{result.term}" was not found in the list.</p>
                </div>
            )}
        </form>
    );
}
