import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import {Button, Alert, Breadcrumb, Card, Form} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
      <Form>
        <Form.Group>
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="example@email.com" />
          <Form.Text className="text-muted">
            Enter valid email address
          </Form.Text>
        </Form.Group>


      </Form>
        <Card className="mb-3" style={{ color: "#333", marginBottom: 20 }}>
          <Card.Img src="https://picsum.photos/200/50" />
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
