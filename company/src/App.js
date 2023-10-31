
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Badge from 'react-bootstrap/Badge';

function App() {
  return (
    <div className="App">
      <h1>
        Example heading <Badge bg="secondary">New</Badge>
      </h1>
    </div>
  );
}

export default App;
