import React from 'react'
import './product.scss'
import { CardTitle } from 'react-bootstrap/Card';

class SlideProduct extends React.Component{
   render(){
       return(
           <React.Fragment>
               <div className="slide-product">
                   <div className="slide-product-item">
                   {this.props.title}
                   </div>
               </div>
           </React.Fragment>
       )
   }
}
export default SlideProduct