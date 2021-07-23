
import './App.css';
import { Route } from 'react-router';
import AllOrders from './components/AllOrders';
import CreateOrder from './components/CreateOrder';


function App() {
  return (
    <div className="App">
      <Route exact path="/orders" component={AllOrders} />
      <Route exact path="/orders/createOrder" component={CreateOrder} />
    </div>
  );
}

export default App;
