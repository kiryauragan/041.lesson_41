import { useState } from "react";

export default function Smiles() {
	const [countsCool, setCountsCool] = useState(0);
	let countsShock = 1;
	let countsAngry = 1;
	let countsLol = 1;
	let countsSmile = 1;

	function onCoolBtnClick() {
		let counts = countsCool + 1;
		console.log(counts);
		setCountsCool(counts);
	};

	return (
		<div className="container">
			<div className="buttonContainer">
				<button onclick={onCoolBtnClick}>😎</button>
				<h2>{countsCool}</h2>
			</div>
			<div className="buttonContainer">
				<button>😱</button>
				<h2>{countsShock}</h2>
			</div>
			<div className="buttonContainer">
				<button>😡</button>
				<h2>{countsAngry}</h2>
			</div>
			<div className="buttonContainer">
				<button>😂</button>
				<h2>{countsLol}</h2>
			</div>
			<div className="buttonContainer">
				<button>😊</button>
				<h2>{countsSmile}</h2>
			</div>
		</div>
	);
}
