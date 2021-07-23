
import './App.css';
import { Route } from 'react-router';
import AllOrders from './components/AllOrders';
//import OrderDetail from './components/OrderDetail';
import CreateOrder from './components/CreateOrder';


function App() {
  return (
    <div className="App">
      <Route exact path="/orders" component={AllOrders} />
      {/* <Route exact path="/orders/:id" component={OrderDetail} /> */}
      <Route exact path="/orders/createOrder" component={CreateOrder} />
    </div>
  );
}

export default App;
