import React, { Component } from 'react'
import { Button, Col, Row, Modal, Form } from 'react-bootstrap';

export default class CreateVoucher extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mdCreate: false,
        }
    }
    handleCreateClose = () => {
        this.setState({ mdCreate: false })
    }
    handleCreateShow = () => {
        this.setState({ mdCreate: true })
    }
    render() {
        return (
            <div className="float-right">
                <button type="button" className="btn btn-primary px-5" onClick={this.handleCreateShow} >สร้าง</button>
                <Modal show={this.state.mdCreate} onHide={this.handleCreateClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group as={Row} controlId="formPlaintextEmail">
                                <Form.Label column sm="2">
                                    Email
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control plaintext readOnly defaultValue="email@example.com" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formPlaintextPassword">
                                <Form.Label column sm="2">
                                    Password
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="password" placeholder="Password" />
                                </Col>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleCreateClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleCreateClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
