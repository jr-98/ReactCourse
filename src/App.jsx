import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  const RenderHome = () => <h1>Home</h1>;
  const RenderCustomerContainer = () => <h1>render Customer Container</h1>;
  const RenderCustomerListContainer = () => <h1>render Customer ListContainer</h1 >;
  const RenderCustomerNewContainer = () => <h1>render Customer New Container</h1>;
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<RenderHome />} />
        <Route exact path='/customers' element={<RenderCustomerContainer />} />
        <Route exact path='/customers/:dni' element={<RenderCustomerListContainer />} />
        <Route exact path='/customers/new' element={<RenderCustomerNewContainer />} />
      </Routes>
    </Router >
  );
}

export default App;
