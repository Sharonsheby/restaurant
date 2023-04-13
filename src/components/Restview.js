import {React,useState,useEffect} from 'react'
import { useParams} from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import './Restcrd.css'


function Restview() {
  var [ Allrestaurants,setRestaurant]=useState([])
  const fetchRest = async()=>{
    const result  = await fetch('/restaurants.json')
    result.json().then(data=>{
      setRestaurant(data.restaurants)
    })

  }
  
  const params = useParams()
  // console.log(params.id);
  console.log(Allrestaurants);

 const restuarant= Allrestaurants.find(item=>item.id==params.id)
 console.log(restuarant);
  useEffect(()=>{
    fetchRest()
  },[]
  )
  return (
    <>
    { restuarant?(
    <Row>
      <Col lg={6} md={6} className='p-5 text-center'>
        <img src={restuarant.photograph} style={{height:'500px'}} className='rounded border boder-warning' id='d1'/>
      </Col>
      <Col id='d1' className='p-5 text-center'>
      <ListGroup variant='flush'>
      <ListGroup.Item><h1 className='text-warning'>{restuarant.name}</h1></ListGroup.Item>
      <ListGroup.Item><h5>Neighborhood: <strong className='fs-5'>{restuarant.neighborhood}</strong></h5></ListGroup.Item>
      <ListGroup.Item><h5>Cusinie: <strong className='fs-5'>{restuarant.cuisine_type}</strong></h5></ListGroup.Item>
      <ListGroup.Item><h5>Address: <strong className='fs-5'>{restuarant.address}</strong></h5></ListGroup.Item>
      
    </ListGroup>
      </Col>
    
    </Row>):""
    }
    </>
  )
  
}

export default Restview
