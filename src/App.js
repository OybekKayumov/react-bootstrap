import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import {Button, Alert, Breadcrumb} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <Breadcrumb>
          <Breadcrumb.Item>crumb.Item 1</Breadcrumb.Item>
          <Breadcrumb.Item>crumb.Item 2</Breadcrumb.Item>
          <Breadcrumb.Item active>crumb.Item 3</Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant="success">This is a alert</Alert>
        <Button>Test Button</Button>
      </header>      
    </div>
  );
}

export default App;
