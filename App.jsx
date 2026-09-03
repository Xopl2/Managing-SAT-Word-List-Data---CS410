function App() {
    return (
        <div className="app"> {/* App window — encompases the entire application window */}
            <MenuWindow /> {/* Menu Window - holds the four option buttons */}
            <div className="display-window">{/*Display Window - Displays content for whichever option was selected */}
                <h1>Display area</h1>
            </div>
        </div>
    );
}