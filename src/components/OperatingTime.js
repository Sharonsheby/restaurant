import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function OperatingTime({timeData}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button className='bg-warning' onClick={handleShow} >
       Operating Hours
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title  className='text-center text-warning'>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body  className='text-center'><ListGroup>
      <ListGroup.Item>Monday | {timeData.Monday}</ListGroup.Item>
      <ListGroup.Item>Tuesday | {timeData.Tuesday}</ListGroup.Item>
      <ListGroup.Item>Wednesday | {timeData.Wednesday}</ListGroup.Item>
      <ListGroup.Item>ThursdaY | {timeData.Thursday}</ListGroup.Item>
      <ListGroup.Item>Friday | {timeData.Friday}</ListGroup.Item>
      <ListGroup.Item>Satrday | {timeData.Saturday}</ListGroup.Item>
      <ListGroup.Item>Sunday | {timeData.Sunday}</ListGroup.Item>
    </ListGroup></Modal.Body>
       
      </Modal>
      
    </div>
  )
}

export default OperatingTime
