function App() {
    //the word list
    const [words, setWords] = React.useState([]);

    //which panel the display window is currently showing
    const [activeView, setActiveView] = React.useState("check");

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

        //return false if the word already exists
        if (alreadyExists) return false; 

        setWords([newWord, ...words]);
        return true; //indicate that the word does not already exist
    }

    //removes a word from the in-memory word list (does not save to file)
    function handleDeleteWord(searchTerm) {
        const remaining = words.filter(
            entry => entry.word.toLowerCase() !== searchTerm.toLowerCase()
        );

        //if nothing was filtered the word isnt in the list, return false
        if (remaining.length === words.length) return false;

        setWords(remaining);
        return true;
    }

    // Ends the session. Browsers block window.close() on tabs the user opened (which may cause it to not work)
    function handleQuit() {
        const confirmed = window.confirm(
            "Quit the application? Any changes made since your last save will be lost."
        );
        if (!confirmed) return;

        setActiveView("quit");
        window.close();
    }

    // Searches the in-memory word list for a matching word entry.
    function handleCheckMeaning(searchTerm) {
        const match = words.find(
            entry => entry.word.toLowerCase() === searchTerm.toLowerCase()
        );
        return match || null;
    }

    return (
        <div className="app"> {/* App window — encompases the entire application window */}
            <MenuWindow
             words={words}
             onAddEntry={() => setActiveView("add")}
             onDeleteEntry={() => setActiveView("delete")}
             onCheckMeaning={() => setActiveView("check")}
             onQuit={handleQuit}
            />

            <div className="display-window">{/*Display Window - Displays content for whichever option was selected */}
                {activeView === "add" && <AddWordForm onAddWord={handleAddWord} />}
                {activeView === "check" && <CheckMeaningForm onCheckMeaning={handleCheckMeaning} />}
                {activeView === "delete" && <DeleteWordForm onDeleteWord={handleDeleteWord} />}
            </div>
        </div>
    );
}