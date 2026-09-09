//Add-entry form - shown in the display area once "Add New Entry" is clicked
function AddWordForm({ onAddWord }) {
    const [word, setWord] = React.useState("");
    const [type, setType] = React.useState("n");
    const [meaning, setMeaning] = React.useState("");

    //runs when the form is submitted
    function handleSubmit(e) {
        e.preventDefault(); //stops the browser reloading the page
        
        //check if the word or meaning fields are empty, and alert the user if they are
        if (word.trim() === "" || meaning.trim() === "") {
            alert("Please fill in both the word and its definition.");
            return;
        }

        //call the onAddWord function passed as a prop from the parent component
        const wasAdded = onAddWord({
            word: word.trim(),
            type: type,
            meaning: meaning.trim()
        })

        //if the word already exists, alert the user and do not clear the form fields
        if (!wasAdded) {
            alert(`The word "${word}" already exists in the list.`);
            return;
        }

        //clear the form fields after submission
        setWord("");
        setMeaning("");
        setType("n");
    }

    return (
        <form className="entry-form" onSubmit={handleSubmit}>
            <h2>Add a New Word</h2>

            <label> {/* Word input field */}
                Word
                <input
                    type="text"
                    value={word}
                    onChange={(e) => setWord(e.target.value)}
                />
            </label>

            <label> {/* Word meaning input field */}
                Definition
                <input 
                    type="text"
                    value={meaning}
                    onChange={(e) => setMeaning(e.target.value)}
                />
            </label> 
            
            <label> {/* Word type selector */}
                Type
                <select value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="n">Noun</option>
                    <option value="v">Verb</option>
                    <option value="a">Adjective</option>
                </select>
            </label>

            <button type="submit" className="submit-button">Submit</button>
        </form>
    );
}