import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../styles/index.scss";

const Counter = () => {
	//initilize a count variable at 0, the setCount function
	// will be used to re-set the "count" value.
	const [count, setCount] = useState(0);
	return (
		<div>
			<h2>{count} likes</h2>
			{/* Reset count to its previous value + 1 */}
			<span onClick={() => setCount(count + 1)}>👍🏽</span>
			{/* Reset count to its previous value - 1 */}
			<span onClick={() => setCount(count - 1)}>👎🏽</span>
			<h3>Like or dislike to increase/decrease</h3>
		</div>
	);
};

ReactDOM.render(<Counter />, document.getElementById("app"));
