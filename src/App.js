import React, { useEffect } from 'react'

import { useForm } from 'react-hook-form'

import { useDispatch } from 'react-redux'
import { SET_MODAL } from './redux/actions/actionTypes'

import ToolsList from './components/ToolsList'
import MultiModal from './components/shared/MultiModal'
import { postTools } from './service/tools'

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

  const dispatch = useDispatch()
  const { register, handleSubmit, reset, errors } = useForm()

  const onClickAddToolBtn = () => {
    dispatch({ 
      type: SET_MODAL,
      modal: {
        show: true,
        onHide: hideModal,
        title: 'Add New Tool',
        body: bodyModalAddTool,
        textButton: 'Add Tool',
        showButtonFooter: false
      }
    })
  }

  const hideModal = () => {
    dispatch({
      type: SET_MODAL,
      modal: {
        show: false
      }
    })
  }

  const onSubmitTool = data => {
    const tags = data.tags.split(',')
    postTools({
      ...data,
      tags
    }).then((data => {
      console.log(data)
    })).catch(error => {
      console.log(error)
    })
  }

  const bodyModalAddTool = (
    <Form onSubmit={handleSubmit(onSubmitTool)}>
      <Form.Group controlId="toolName">
        <Form.Label>Tool Name</Form.Label>
        <Form.Control type="text" name='tool' ref={register({ required: true })} />
      </Form.Group>

      <Form.Group controlId="toolLink">
        <Form.Label>Tool Link</Form.Label>
        <Form.Control type="text" name='tool_link' ref={register({ required: true })} />
      </Form.Group>

      <Form.Group controlId="toolLink">
        <Form.Label>Tool Description</Form.Label>
        <Form.Control as='textarea' rows='3' name='description' ref={register({ required: true })} />
      </Form.Group>

      <Form.Group controlId="toolTags">
        <Form.Label>Tags</Form.Label>
        <Form.Control type="text" name='tags' ref={register({ required: true })} />
        <Form.Text className="text-muted">
          Separate tags with commas. Ex: tag 01,tag 02
        </Form.Text>
      </Form.Group>

      <div className='d-flex flex-row-reverse'>
        <Button type='submit' className='align-self-end'>Add Tool</Button>
      </div>
    </Form>
  )

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
            <Button variant="dark" onClick={onClickAddToolBtn}>
              <img src={require('./assets/img/plus_icon.png')} className='mr-2' width='17px' alt='icon plus'/>
              ADD
            </Button>
          </Col>
        </Row>

        <Row>
          <ToolsList />
        </Row>
      </Container>
      <MultiModal />
    </div>
  );
}

export default App;
