import './App.css';
import { Link, BrowserRouter as Router } from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
        <Link to={"/customers"}>Customers</Link>
        <br />
        <Link to={"/customers/3000000"}>Customers 30 0000 0000 </Link>
      </div>
    </Router>
  );
}

export default App;
