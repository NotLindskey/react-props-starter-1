import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App.jsx";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

// reducer
const count = (state = 0, action) => {
	console.log("inside reducer");
	return state;
};

// another reducer
const elementList = (state = [], action) => {
	return state;
};

// store
const storeInstance = createStore(count);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={storeInstance}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
