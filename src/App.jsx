import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeContainer from './components/containers/HomeContainer';
import CustomerContainer from './components/containers/CustomerContainer';
import './App.css';

function App() {
  const RenderCustomerListContainer = () => <h1>render Customer ListContainer</h1 >;
  const RenderCustomerNewContainer = () => <h1>render Customer New Container</h1>;
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomeContainer />} />
        <Route exact path='/customers' element={<CustomerContainer />} />
        <Route exact path='/customers/:dni' element={<RenderCustomerListContainer />} />
        <Route exact path='/customers/new' element={<RenderCustomerNewContainer />} />
      </Routes>
    </Router >
  );
}

export default App;
