import {useState} from "react";
const Usestatecomponent = () => {
	const [isgreen, setgreen] = useState(true);

	return (
		<h2 
			className="p-5 text-center"
			onClick={ () => setgreen(!isgreen)}
			style = { { 
				color: isgreen ? "green" : "red",
			} }
		> 
		Hello This is useState component.
		</h2>
		)
}
export default Usestatecomponent;