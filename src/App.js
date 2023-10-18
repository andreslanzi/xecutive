import "./App.css";
import Component from "./Component";
import { data } from "./data";

function App() {
	return (
		<div className="App">
			<Component data={data} />
		</div>
	);
}

export default App;
