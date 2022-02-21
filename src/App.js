import HomeScreen from "./components/HomeScreen";
import ContextProvider from "./context/ContextProvider";

function App() {
  return (    
    <ContextProvider>
      <HomeScreen />
    </ContextProvider>
  );
}

export default App;
