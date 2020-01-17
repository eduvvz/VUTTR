import React from 'react'

import ToolsList from './components/ToolsList'

import { 
  Container, 
  Row, 
  Col,
  Button,
  Form
} from 'react-bootstrap'

import {
  PageTitle,
  PageSubtitle
} from './assets/styles/main'

function App() {
  return (
    <div className="App">
      <Container>

        <Row className='mt-5'>
          <Col>
            <PageTitle className='mt-5'>VUTTR</PageTitle>
            <PageSubtitle className='mt-4'>Very Useful Tools to Remember</PageSubtitle>
          </Col>
        </Row>

        <Row  className='mt-4'>
          <Col sm={3}>
            <Form.Control placeholder='Search' className="text-muted">
            </Form.Control>
          </Col>
          <Col sm={3} className={'d-flex align-items-center'}>
          <Form.Check
            type={"checkbox"}
            label={`search in tags only`}
            id={`search-in-tags`}
            />
          </Col>
          <Col sm={6} className={'d-flex flex-row-reverse'}>
            <Button variant="dark">
              <img src={require('./assets/img/plus_icon.png')} className='mr-2' width='17px' alt='icon plus'/>
              ADD
            </Button>
          </Col>
        </Row>

        <Row>
          <ToolsList />
        </Row>
      </Container>
    </div>
  );
}

export default App;
