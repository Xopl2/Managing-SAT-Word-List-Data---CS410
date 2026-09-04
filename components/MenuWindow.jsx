// Menu window - hold the four option buttons and the list of words
function MenuWindow({ words}) {
    return (
        <div className="menu-window">
            <h1>SAT Word List</h1>

            <ul className="word-list">
                {words.map(entry => (
                    <li key={entry.word}>{entry.word}</li>
                ))}
            </ul>



            <div className="menu-buttons">
                <button>Add New Entry</button>
                <button>Check Meaning</button>
                <button>Save Word List</button>
                <button>Quit Application</button>
            </div>
        </div>
    );
}
