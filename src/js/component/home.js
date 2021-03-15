import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export const Home = () => {
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
			<div>
				<h5>Like or dislike to increase/decrease</h5>
			</div>
		</div>
	);
};
