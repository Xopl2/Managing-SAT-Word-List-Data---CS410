// Menu window - hold the five option buttons and the list of words
function MenuWindow({ words, onAddEntry, onCheckMeaning, onQuit }) {
    return (
        <div className="menu-window">
            <h1>SAT Word List</h1>

            <ul className="word-list">
                {words.map(entry => (
                    <li key={entry.word}>{entry.word}</li>
                ))}
            </ul>

            <div className="menu-buttons">
                <button onClick={onAddEntry}>Add New Entry</button>
                <button>Delete Entry</button>
                <button onClick={onCheckMeaning}>Check Meaning</button>
                <button>Save Word List</button>
                <button onClick={onQuit}>Quit Application</button>
            </div>
        </div>
    );
}
