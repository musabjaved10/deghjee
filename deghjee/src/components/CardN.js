import React from 'react';
import '../App.css';
import {Card } from 'react-bootstrap';
import {Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function CardN (props) {

  return (   
    <button  className="cardhead">
<Card style={{ width: '15rem',padding:"0px" ,float:"left",backgroundColor:"white"}}   key={props.id}>
  <Card.Img variant="top" src={props.imgsrc} className="cardimg"/>
  {props.fill == "true"?
  <span className="featuredtrue">{props.feat}</span>:
  ""
   }
    <Card.Body style={{textAlign:"left",padding:"15px",backgroundColor:"white"}}>
      <strong>
    <Card.Title style={{paddingTop:"10px"}}>{props.mname}  
    </Card.Title>
    </strong>
    <Card.Text>
        {props.detail}
    </Card.Text>
   
  </Card.Body>
  <Card.Footer style={{textAlign:"left",padding:"15px",backgroundColor:"white"}}>
  <Button className="hello" variant="primary" style={{float:"right"}}>{props.time}</Button>
  <Card.Text style={{float:"left",backgroundColor:"white"}}><strong>{props.delivery}</strong>
    </Card.Text>
    </Card.Footer>
</Card>
</button>
  );

}
