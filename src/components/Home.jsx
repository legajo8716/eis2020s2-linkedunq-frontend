import { Button } from "bootstrap";
import React, { Component } from "react";
export default class Home extends React.Component{

    constructor(props){
        super(props)
        this.state = {}
        // this.setComponent = this.setComponent.bind(this);
    }

    render(){
        return (
            <div>
                <h1>Hola LinkedUNQ</h1>
                <button className="btn btn-dark">Click</button>
            </div>
          );
    }
}
