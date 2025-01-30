import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
    return (
        <div>
            <p>hello</p>
        </div>
    )
}


const root = ReactDOM.createRoot(document.querySelector(".todoapp"));
root.render(<App/>)
