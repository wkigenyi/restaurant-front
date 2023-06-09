import ApplicationBar from "./components/AppBar";
import Restaurants from "./components/Restaurants";
import { RestaurantsProvider } from "./contexts/RestaurantContext";



function App() {
  return (
    <div className="App">
      <RestaurantsProvider>
        <ApplicationBar/>
        <Restaurants/>
      </RestaurantsProvider>
      
      
    </div>
  );
}

export default App;
