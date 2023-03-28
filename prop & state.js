import React from 'react'
 export default class Prop extends React.Component
 {
    render()
    {
        return(
            <div>
                <h1>{this.props.text.name}</h1>
                <h1>{this.props.data}</h1>
            </div>
        )
    }
 }