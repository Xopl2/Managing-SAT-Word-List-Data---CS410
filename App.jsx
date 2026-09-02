function App() {
    return (
        <div className="app"> {/* App window — encompases the entire application window */}
            <div className="menu-window"> {/* Menu window — holds the four option buttons */}
                <h1>SAT Word List</h1>
            </div>

            <div className="display-window">{/*Display Window - Displays content for whichever option was selected */}
                <h1>Display area</h1>
            </div>
        </div>
    );
}