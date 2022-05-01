import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import {Button, Alert, Breadcrumb, Card} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <Card style={{ color: "#333" }}>
          <Card.Img />
          <Card.Body>
            <Card.Title>Card Example</Card.Title>
            <Card.Text>
              This is an example of cards
            </Card.Text>
            <Button variant='primary'>Read More</Button>
          </Card.Body>
        </Card>
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
