import { useState } from "react";
import "./App.css";

function App() {
    const [buttonColor, setButtonColor] = useState("red");
    const newButtonColor = buttonColor === "red" ? "blue" : "red";
    const [disabled, setDisabled] = useState(false);

    return (
        <div>
            <button style={{ backgroundColor: disabled ? "gray" : buttonColor }} onClick={() => setButtonColor(newButtonColor)} disabled={disabled}>
                Change to {newButtonColor}
            </button>

            <input
                type="checkbox"
                id="disable-button-checkbox"
                defaultChecked={disabled}
                aria-checked={disabled}
                onChange={(e) => {
                    setDisabled(e.target.checked);
                    console.log(disabled);
                }}
            />
            <label htmlFor="disable-button-checkbox">Disable Button</label>
        </div>
    );
}

export default App;
