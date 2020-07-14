import React, { Component } from 'react'
import './productcard.css'
import {ProductConsumer} from './Contaxt';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
class Productcard extends Component {
    render() {

        return (


        <ProductConsumer>
            
            {(value)=>(
            
            <Link  to="/detail">
                <div>
            <div  onClick={
                    ()=>{
               console.log( value.handleproduct(this.props.itempass.id))}}    >                        
               
                    <div  >
                <img alt="picture"              
                 className="cardimg" 
                 src={this.props.itempass.img} />
           
            </div>
            <br/>
            <br/>
            
    <Button  style={{width:"100%",backgroundColor:"black", border:"2px solid black",marginTop:" 4 %",textAlign:"center"}} onClick={
        ()=>{console.log(value.addcart(this.props.itempass.id)),
              console.log(value.modal(this.props.itempass.id,"modall"))
        
    }}
    
    disabled={this.props.itempass.incart?true:false}>{this.props.itempass.incart?"Added In Cart":<div><FontAwesomeIcon icon={faShoppingCart}/> BUY</div>   }</Button>
 
 <br/>
            <br/>
            </div>
            </div>
            </Link>)}
            </ProductConsumer>
      )
                }
            }
    
export default Productcard























