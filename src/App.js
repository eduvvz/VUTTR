import React, { useState, useEffect } from 'react'

import { useForm } from 'react-hook-form'

import { useDispatch } from 'react-redux'
import { 
  SET_MODAL, 
  NEED_UPDATE_LIST_TOOLS 
} from './redux/actions/actionTypes'

import ToolsList from './components/ToolsList'
import MultiModal from './components/shared/MultiModal'
import { 
  postTools,
  deleteTool
} from './service/tools'

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
  const { register, handleSubmit } = useForm()
  const [valueSearch, setValueSearch] = useState('')

  useEffect(() => {
    const handleSearchItens = () => {
      
    }

    handleSearchItens()
  }, [valueSearch])

  const onClickAddToolBtn = () => {
    dispatch({ 
      type: SET_MODAL,
      modal: {
        show: true,
        onHide: hideModal,
        title: 'Add New Tool',
        body: bodyModalAddTool,
        showButtonFooter: false
      }
    })
  }

  const onClickRemoveToolBtn = (toolName, toolId) => {
    dispatch({ 
      type: SET_MODAL,
      modal: {
        show: true,
        onHide: hideModal,
        title: 'Remove Tool',
        body: (<h3>Are you sure you want to remove <b>{toolName}</b>?</h3>),
        textButton: 'Yes, remove',
        showButtonFooter: true,
        onClickButton: () => {
          deleteTool(toolId)
            .then(() => {
              updateList()
              hideModal()
            })
            .catch(error => {
              console.log(error)
            })
        }
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

  const onSubmitTool = (data, e) => {
    const tags = data.tags.split(',')
    postTools({
      ...data,
      tags
    }).then((() => {
      updateList()
      hideModal()
      e.target.reset()
    })).catch(error => {
      console.log(error)
    })
  }

  const updateList = () => {
    dispatch({
      type: NEED_UPDATE_LIST_TOOLS,
      needUpdateList: true
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
            <Form.Control placeholder='Search' className="text-muted" onChange={e => setValueSearch(e.target.value)}>
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
          <ToolsList onRemoveTool={onClickRemoveToolBtn} />
        </Row>
      </Container>
      <MultiModal />
    </div>
  );
}

export default App;
