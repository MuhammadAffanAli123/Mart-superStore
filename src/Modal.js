import React, { Component } from 'react'
import Modal from 'react-modal';
import { Link } from 'react-router-dom'

import {ProductConsumer} from './Contaxt';
import Button from 'react-bootstrap/Button';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      backgroundcolor       : "black"
    }
  };

class Nodal extends Component {

   
       
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    return(
                          
               <Modal 
               style={customStyles}
               isOpen={value.modalcondition}>
                                     <Link to="/"> <Button variant="dark" onClick={()=>{
                                          console.log(value.modalclosebutton())
                                      }}>X</Button></Link>

<div className="container">
                      <div className="row" style={{}}>

                   <div className="col-xl-12 col-lg-12 col-xs-12 col-sm-12 text-center">

                    <h4 style={{fontFamily:'Trade Winds',color:"rgb(49, 92, 232)"}}>{value.modalproduct.title}</h4>
                       </div>
                       </div>
                       <div className="row">
                           <div className="col-12 text-center">
                     <img alt="modal" src={value.modalproduct.img} />
                       </div>
                       </div>
                       
                      <div> 
                       <div className="row" style={{marginTop:"1%"}}>

                
                    <Link  className="col-lg-6 col-md-6 col-sm-6 col-xs-12" to="/"><Button onClick={value.modalclose}  style={{width:"100%"}}  variant="outline-dark">ADD TO</Button></Link>


                    
                
                        <Link to="/cart"    className="col-lg-6 col-md-6 col-sm-6 col-xs-12 " ><Button variant="outline-dark" style={{width:"100%"}}  onClick={()=>{value.modalclose()
                            value.gtotal()}}>GO TO </Button></Link>
                        

                         
                      
                        </div>
                         </div>
                         </div>
                         
                   </Modal> 
                         
        

            )
                }
    }
            </ProductConsumer>
        
        )
    }

customStyle={
    overlay:{
bgColore:"black",
color:"red"
    },
    content:{

    }
}
    
}




 
export default Nodal