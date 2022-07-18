import './App.css';
import DropDown from './components/DropDown';
import Header from "./components/header/header"
import CartGroup from './components/weatherCartGroup/cartGroup';
import { AppProvider} from "./context/weatherContext";
function App() {
  return ( 
    <AppProvider >
     <Header/>
     <DropDown/>
     <CartGroup/>
    </AppProvider>
  );
}

export default App;
