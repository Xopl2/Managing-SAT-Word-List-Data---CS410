function App() {
    // the word list
    const [words, setWords] = React.useState([]);

    // load words.dat when the app first loads
    React.useEffect(() => {
        fetch("words.dat")
            .then(response => response.text())
            .then(text => setWords(parseWordFile(text)));
    } , []); // empty dependency array means this runs once on mount

    return (
        <div className="app"> {/* App window — encompases the entire application window */}
            <MenuWindow words={words}/> {/* Menu Window - holds the four option buttons */}
            <div className="display-window">{/*Display Window - Displays content for whichever option was selected */}
                <h1>Display area</h1>
            </div>
        </div>
    );
}