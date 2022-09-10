import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeContainer from './components/containers/HomeContainer';
import CustomersContainer from './components/containers/CustomersContainer';
import CustomerContainer from './components/containers/CustomerContainer';
import './App.css';

function App() {
  const RenderCustomerNewContainer = () => <h1>render Customer New Container</h1>;

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomeContainer />} />
        <Route exact path='/customers' element={<CustomersContainer />} />
        <Route exact path='/customers/:id' element={<CustomerContainer />} />
        <Route exact path='/customers/new' element={<RenderCustomerNewContainer />} />
      </Routes>
    </Router >
  );
}

export default App;
