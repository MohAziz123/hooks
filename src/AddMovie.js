import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Rating from '@mui/material/Rating';

const AddMovie = ({movies,setMovies}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [PosterURL,setPosterURL] = useState('')
    const [rating,setRating] = useState(0)
    const handlesubmit=()=> setMovies ([...movies,{title :title,description,PosterURL,rating,id : Math.random()}])
    
    return (
        <>
        <Button variant="primary" onClick={handleShow}>
          movie add
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>                
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>title</Form.Label>
                <Form.Control  onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Enter title" />
            </Form.Group> 

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Description</Form.Label>
                <Form.Control  onChange={(e)=>setDescription(e.target.value)} type="text" placeholder="Enter Description" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>photo</Form.Label>
                <Form.Control onChange={(e)=>setPosterURL(e.target.value)} type="text" placeholder="Enter title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Rating</Form.Label>
                        <br/>
                        <Rating name="simple-controlled" onChange={(e)=>setRating(e.target.value)}/>   
                </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );

}
export default AddMovie




