import React from 'react';

const LightBox = (props)=>{
    return <div>Box {props.name}</div>
}

class Box extends React.Component {
    render() {
        // Parenthesis used to help babel understand that h1 is inside div. 
        // If not, odd things can happen.
        const styleTitle = {
            border: '1px solid dashed',
            color: this.props.color
        };
        
        //Inline style. Not a good praxis
        return (
            <div onClick={this.onClick.bind(this)}>
                <h1 style={styleTitle}>Box {this.props.name}</h1>
            </div>
        );
    }

    onClick () {
        console.log('Clicked on ' + this.props.color);
    }
}

export {LightBox, Box};