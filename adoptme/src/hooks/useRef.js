import {useState, useRef} from "react";

const UserefComponent = () => {
	const [number, setnumber] = useState(0);
	const numref = useRef(0);

	function increment() {
		setnumber( number + 1)
		numref.current++;
		console.log(number, numref.current)
	}

	return (
		<div className="p-5 text-center">
			<h2> This is useRef component. </h2>
			<h4> useState: {number}</h4>
			<h4> useRef: {numref.current}</h4>
			<button 
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 py-0 rounded"
				onClick={increment}> + </button>
		</div>
		)
}
export default UserefComponent;