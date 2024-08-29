import "../src/styles/css/index.css"
import SmallTile from "./features/home-page/components/SmallTile";

function App() {
	return (
		<>
			<div className="test-div">
				<SmallTile
					title="Title"
					body="body"
					bgimg="marathon"
					href="#/Marathon"
					textColor="black"
				/>
			</div>
		</>
	);
}

export default App;
