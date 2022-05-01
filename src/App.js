import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <Container>
          <Form>
            <Row>
              <Col>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="example@email.com" />
                  <Form.Text className="text-muted">
                    Enter valid email address
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="password" />
                  <Form.Text className="text-muted">
                  Password must be at least 8 characters in length
                  </Form.Text>
                </Form.Group>
              </Col>
            </Row>
            <Button className="mb-3" variant="secondary" type="submit">Login</Button>
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
        </Container>
      </header>      
    </div>
  );
}

export default App;
