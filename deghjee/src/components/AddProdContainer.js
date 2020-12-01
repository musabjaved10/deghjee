import React from 'react';
import DragDrop from "./DragDrop";
import AddProduct from "./AddProduct.js"
import './AddProdContainer.css';
import { Table ,Row,Col} from 'react-bootstrap';


export default function AddProdContainer() {
  return (
    <div>
        <div className="details" >
            <Table>
                <Row>
                    <Col>
        <p>Upload Your Product Image Here</p>
        </Col>
                            
                               <Col> 
                                
                                <DragDrop/>
                                   
                                
                                </Col>
                                
                                </Row>
                            <Row>
                                <Col className="col2">
                                <p>Add your Product description and necessary information from here</p>
                                </Col>
                                <Col  className="col2">
                                <AddProduct/>
                                </Col>
                            </Row>                     
                            </Table>
                        </div>
                        
      
     
    </div>
  )
}
