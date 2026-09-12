// Delete-Entry panel - removes a word from the in-memory list (does not update data file)
function DeleteWordForm({ onDeleteWord }) {
    const [searchTerm, setSearchTerm] = React.useState("");
    const [result, setResult] = React.useState(null);

    function handleSubmit(e) {
        e.preventDefault();

        const trimmed = searchTerm.trim();
        if (trimmed === "") return;

        //deleting is destructive, so confirm first
        const confirmed = window.confirm(`Remove "${trimmed}" from the word list?`);
        if (!confirmed) return;

        const wasDeleted = onDeleteWord(trimmed);

        if(wasDeleted) {
            setResult({ deleted: true, term: trimmed });
            setSearchTerm("");
        } else {
            setResult({ deleted: false, term: trimmed });
        }
    }

    return (
        <form className="entry-form" onSubmit={handleSubmit}>
            <h2>Delete an Entry</h2>

            <label>
                Word
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </label>

            <button type="submit" className="submit-button">Delete</button>

            {/* feedback after delete attempt */}
            {result && result.deleted && (
                <div className="search-result">
                    <p>"{result.term}" was removed from the list.</p>
                </div>
            )}

            {result && !result.deleted && (
                <div className="search-result not-found">
                    <p>The word "{result.term}" was not found in the list.</p>
                </div>
            )}
        </form>
    );
}