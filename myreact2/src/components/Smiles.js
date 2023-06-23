import { useState } from "react";

export default function Smiles() {
	const [countsCool, setCountsCool] = useState(0);
	const [countsShock, setCountsShock] = useState(0);
	const [countsAngry, setCountsAngry] = useState(0);
	const [countsLol, setCountsLol] = useState(0);
	const [countsSmile, setCountsSmile] = useState(0);

	function onCoolBtnClick() {
		let counts = countsCool + 1;
		setCountsCool(counts);
	}
	function onShockBtnClick() {
		let counts = countsShock + 1;
		setCountsShock(counts);
	}
	function onAngryBtnClick() {
		let counts = countsAngry + 1;
		setCountsAngry(counts);
	}
	function onLolBtnClick() {
		let counts = countsLol + 1;
		setCountsLol(counts);
	}
	function onSmileBtnClick() {
		let counts = countsSmile + 1;
		setCountsSmile(counts);
	}

	function onShowResults() {
		let results = [countsCool,	countsShock,countsAngry,countsLol,countsSmile];
		console.log(results);
	}

	return (
		<div className="container">
			<div className="buttonContainer">
				<button onClick={onCoolBtnClick}>😎</button>
				<h2>{countsCool}</h2>
			</div>
			<div className="buttonContainer">
				<button onClick={onShockBtnClick}>😱</button>
				<h2>{countsShock}</h2>
			</div>
			<div className="buttonContainer">
				<button onClick={onAngryBtnClick}>😡</button>
				<h2>{countsAngry}</h2>
			</div>
			<div className="buttonContainer">
				<button onClick={onLolBtnClick}>😂</button>
				<h2>{countsLol}</h2>
			</div>
			<div className="buttonContainer">
				<button onClick={onSmileBtnClick}>😊</button>
				<h2>{countsSmile}</h2>
			</div>

			<button onClick={onShowResults}>Show results</button>
		</div>
	);
}
