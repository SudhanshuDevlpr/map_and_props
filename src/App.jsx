import Heading from "./components/Heading";
import Food from "./components/Food";
function App() {
  let food=['dal','sabji','potato','tomato','fingerlady','pumpkin','speenech'];
  return <>
  <Heading></Heading>
  <Food vegitables={food}></Food>
  </>
}
export default App
