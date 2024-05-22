
import React, { useState } from "react";

function MainComponent() {
	const [fName, setfName] = useState("firstName");
	const [lName, setlName] = useState("LastName");
	return (
		<>
			<div className="parent">This is a Parent component</div>
			<br />
			<ChildA fName={fName} lName={lName} />
		</>
	);
}

function ChildA({ fName, lName }) {
	return (
		<>
			<div className="childA">his is ChildA Component.
			<br />
			<ChildB fName={fName} lName={lName} />
			</div>T
		</>
	);
}

function ChildB({ fName, lName }) {
	return (
		<>
			<div className="childB">This is ChildB Component.
			<br />
			<ChildC fName={fName} lName={lName} />
			</div>
		</>
	);
}

function ChildC({ fName, lName }) {
	return (
		<>
			<div className="childC">This is ChildC component.
			<br />
			<h3> Data from Parent component is as follows:</h3>
			<h4>{fName}</h4>
			<h4>{lName}</h4>
			</div>
		</>
	);
}

export default MainComponent;
