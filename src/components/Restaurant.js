import { React, useState, useEffect } from "react";
import Restcard from "./Restcard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { restList } from '../action/restaction'
import { useDispatch,useSelector } from 'react-redux'

function Restaurant() {
  // state to hold data from api
  // var [restaurantList, setRestaurant] = useState([]);

  // function to call api
  // const fetchData = async () => {
    // const result = await fetch("/restaurants.json");
    // result.json().then((data) => {
      // setRestaurant(data.restaurants);  
    // });
  // };

  
  //  object for usedispatch
  const dispatch= useDispatch()
  useEffect(() => {
    // fetchData();
    dispatch(restList())
  }, []);

 const {restaurantList}= useSelector(state=>state.restaurantReducer)
//  console.log(result);

  return (
    <Row>
      {restaurantList.map((item) => (
        <Col className="p-5" lg={4} md={6}>
          <Restcard restdata={item}></Restcard>
        </Col>
      ))}
    </Row>
  );
}

export default Restaurant;
