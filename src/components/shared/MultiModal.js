import React from 'react'

import { useSelector } from 'react-redux'

import { 
    Modal,
    Button
} from 'react-bootstrap'

function MultiModal() {

    const modalConfig = useSelector(state => {
        return state.modalState.modal
    })

    return(
        <Modal
            show={modalConfig.show}
            onHide={modalConfig.onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {modalConfig.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {modalConfig.body}
            </Modal.Body>
            <Modal.Footer>
                {modalConfig.showButtonFooter && 
                    <Button variant='dark' onClick={modalConfig.onClickButton}>{modalConfig.textButton}</Button>}
            </Modal.Footer>
        </Modal>
    )
}

export default MultiModal