import React, { Component } from 'react'

 class Order extends Component {
    render() {
        return (
            <div>
               <h2>Order Component</h2> 
               <pre>json.stringify{this.props}</pre>
            </div>
        )
    }
}

export default Order
