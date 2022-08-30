import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeContainer from './components/containers/HomeContainer';

function App() {
  const RenderCustomerContainer = () => <h1>render Customer Container</h1>;
  const RenderCustomerListContainer = () => <h1>render Customer ListContainer</h1 >;
  const RenderCustomerNewContainer = () => <h1>render Customer New Container</h1>;
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomeContainer />} />
        <Route exact path='/customers' element={<RenderCustomerContainer />} />
        <Route exact path='/customers/:dni' element={<RenderCustomerListContainer />} />
        <Route exact path='/customers/new' element={<RenderCustomerNewContainer />} />
      </Routes>
    </Router >
  );
}

export default App;
