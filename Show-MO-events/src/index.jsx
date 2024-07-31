import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";  // Add your global styles here

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
