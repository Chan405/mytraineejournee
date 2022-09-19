import {useState, useEffect} from "react";
const UseEffectComponent = () => {
	const [time, settime] = useState(new Date());

	useEffect( () => {
		const timer = setTimeout(() => settime(new Date()), 1000);
		return () => clearTimeout(timer);
	})

	
	return (
		<h2 className="p-5 text-center"> 
		This is UseEffectComponent : {time.toLocaleTimeString()}
		</h2>
		)
}
export default UseEffectComponent;