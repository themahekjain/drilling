import React, { useState, useContext } from "react";
let context = React.createContext(null);
import "./styles.css";

function Parent() {
	const [fName, setfName] = useState("firstName");
	const [lName, setlName] = useState("LastName");
	return (
		<context.Provider value={{ fName, lName }}>
			<div className="parent">
				This is a Parent component
			</div>
			<ChildA />
		</context.Provider>
	);
}

function ChildA() {
	return (
		<>
			<div className="child">
			  This is ChildA Component.
		    </div>
			<ChildB />
		</>
	);
}

function ChildB() {
	return (
		<div className="childB">
			This is ChildB Component.
			<br />
			<ChildC />
		</div>
	);
}

function ChildC() {
	const { fName, lName } = useContext(context);
	return (
		<div className="childC">
			This is ChildC component.
			<br />
			<h3> Data from Parent component is as follows:</h3>
			<h4>{fName}</h4>
			<h4>{lName}</h4>
		</div>
	);
}

export default Parent;
