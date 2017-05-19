import React from 'react';

const LightBox = (props)=>{
    return <div>Box {props.name}</div>
}

class Box extends React.Component {
    constructor(props, context, updater){
        super(props, context, updater);
        //Would be cool do this automatically with all prototype functions
        this.onClick = this.onClick.bind(this);

        //State
        this.state = {
            countClick: 0
        };
    }
    render() {
        // Parenthesis used to help babel understand that h1 is inside div. 
        // If not, odd things can happen.
        const styleTitle = {
            border: '1px solid dashed',
            color: this.props.color
        };
        
        //Inline style. Not a good praxis
        return (
            <div onClick={this.onClick}>
                <h1 style={styleTitle}>Box {this.props.name}</h1>
                <p> Clicked {this.state.countClick} times </p>
                {/*
                This is not updated unless props are changed, state is updated, or forceUpdate() called.
                <p> Clicked {this.state.countClick} times </p>
                */}
            </div>
        );
    }
    onClick () {
        console.log('Clicked on ' + this.props.color + ' ' + this.state.countClick + ' times' );

        //This doesn't override the state. It merge them, but only in the first level of the state object,
        //it doesn't merge subobjecs
        this.setState({
            countClick: this.state.countClick+1
        });
    }
}

export {LightBox, Box};