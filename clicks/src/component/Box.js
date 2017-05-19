import React from 'react';

const LightBox = (props)=>{
    return <div>Box {props.name}</div>
}

class Box extends React.Component {
    render() {
        return <div>Box {this.props.name}</div>
    }
}

export {LightBox, Box};