import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
//CHALLENGE: Make the code in App.jsx work.
//The final app should have a single contact
//with fName, lName and email.
