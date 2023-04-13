import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

function Reviews({reviewData}) {
  const [open, setOpen] = useState(false);
  return (
    <div>
       <Button className='bg-warning'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
      Reviews
      </Button>
      
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            {
              reviewData.map(item=>(
                   
            <Card body style={{ width: '400px' }}>
              <h6><strong className='text-warning'> {item.name} : {item.date}</strong></h6>
              <p>Rating:  {item.rating}</p>
              <p>Comments: {item.comments}</p>

              
            </Card>
              ))

          
              }
          </div>

        </Collapse>
      </div>
  
  )
}

export default Reviews
