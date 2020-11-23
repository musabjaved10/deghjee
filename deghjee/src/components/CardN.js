import React from 'react';
import '../App.css';
import {Card } from 'react-bootstrap';
import {Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function CardN (props) {

  return (
   
    
    <button  className="cardhead">
<Card style={{ width: '15rem',padding:"0px" ,position:"relative"}}   key={props.id}>
  <Card.Img variant="top" src={props.imgsrc} className="cardimg"/>
  <span className={`featured${props.fill}`}>{props.feat}</span>
    <Card.Body style={{textAlign:"left",padding:"15px"}}>
      <strong>
    <Card.Title style={{paddingTop:"10px"}}>{props.mname}
   
    </Card.Title>
    </strong>
    <Card.Text>
        {props.detail}
    </Card.Text>
    <Card.Footer>
  <Button className="hello" variant="primary" style={{float:"right"}}>{props.time}</Button>
  <Card.Text style={{float:"left"}}><strong>{props.delivery}</strong>
    </Card.Text>
    </Card.Footer>
  </Card.Body>
</Card>
</button>
  );

}
