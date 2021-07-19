
import './App.css';
import { Route } from 'react-router';
import AllOrders from './components/AllOrders';
import OrderDetail from './components/OrderDetail';

function App() {
  return (
    <div className="App">
      <Route exact path="/orders" component={AllOrders} />
      <Route exact path="/orders/:id" component={OrderDetail} />
    </div>
  );
}

export default App;
