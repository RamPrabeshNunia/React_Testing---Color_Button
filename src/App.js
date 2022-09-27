import { useState } from "react";
import "./App.css";

export function replaceCamelWithSpaces(colorName) {
    return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
    const [buttonColor, setButtonColor] = useState("MediumVioletRed");
    const newButtonColor = buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";
    const [disabled, setDisabled] = useState(false);

    return (
        <div>
            <button style={{ backgroundColor: disabled ? "gray" : buttonColor }} onClick={() => setButtonColor(newButtonColor)} disabled={disabled}>
                Change to {replaceCamelWithSpaces(newButtonColor)}
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
