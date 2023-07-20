export default function ButtonContainer() {
	function ButtonContainer({ onClick, emoji, count }) {
		return (
		  <div className="buttonContainer">
			 <button onClick={onClick}>{emoji}</button>
			 <h2>{count}</h2>
		  </div>
		);
	 }
}