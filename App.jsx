function App() {
    // the word list
    const [words, setWords] = React.useState([]);

    //which panel the display window is currently showing
    const [activeView, setActiveView] = React.useState("none");

    // load words.dat when the app first loads
    React.useEffect(() => {
        fetch("words.dat")
            .then(response => response.text())
            .then(text => setWords(parseWordFile(text)));
    } , []); // empty dependency array means this runs once on mount

    //adds a word to the top of the in-memory word list (does not save to file)
    function handleAddWord(newWord) {

        //check if the word already exists in the list
        const alreadyExists = words.some(
            entry => entry.word.toLowerCase() === newWord.word.toLowerCase()
        )

        if (alreadyExists) return false; //return false if it already exists

        setWords([newWord, ...words]);
        return true; //indicate that the word does not already exist
    }

    return (
        <div className="app"> {/* App window — encompases the entire application window */}
            <MenuWindow
             words={words}
             onAddEntry={() => setActiveView("add")}
            />

            <div className="display-window">{/*Display Window - Displays content for whichever option was selected */}
                {activeView === "none" && <h1>Display area</h1>}
                {activeView === "add" && <AddWordForm onAddWord={handleAddWord} />}
            </div>
        </div>
    );
}