import React, { Component } from 'react'

export class Product extends Component {
    product_name="iphone 5"
    color=['white','red','black'];
   more_Details={
       price=45000,
       usage:"very Delicate-Performance is good",
   }
    render() {
        return (
            <div>
               <h2>Product Component..</h2>
               <order name={this.product_name}
               color={this.color}
               details={this.more_Details}/> 
            </div>
        )
    }
}

export default Product
