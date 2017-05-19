import React from 'react';

const LightBox = (props)=>{
    return <div>Box {props.name}</div>
}

class Box extends React.Component {
    constructor(props, context, updater){
        super(props, context, updater);
        //Would be cool do this automatically with all prototype functions?
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

        const clickMessage = this.props.showClickMessage
            ? <p> Clicked {this.state.countClick} times </p>
            : '';
        
        //Inline style. Not a good praxis
        return (
            <div onClick={this.onClick}>
                <h1 style={styleTitle}>Box {this.props.name}</h1>
                {/*
                    - Conditional element.
                    - This is not updated unless props are changed, state is updated, or forceUpdate() called.
                    <p> Clicked {this.state.countClick} times </p>
                */}
                {clickMessage}
                
            </div>
        );
    }
    onClick () {
        console.log('Clicked on ' + this.props.color + ' ' + this.state.countClick + ' times' );

        /*
        setState():
        - It doesn't override the state, merges it, but only in the first level of the state object, not in subobjecs
        - It doesn't 'set' the state. If asks for a change state, and that state change is done async!
        that's why an state object should never be manually changed, instead, create another and ask for update
        - Also, react check what has changed to know what to update in the view. If the object is the same, it needs
        to evaluate prop by prop... slow
        - WRONG!!!: this.setState(this.state.countClick++);
        */
        this.setState({
            countClick: this.state.countClick+1
        });

        /*
        We can't rely in the state after setState. If may have changed or not!
        To do something when the state changes, there are other methods.
        */
    }
}

export {LightBox, Box};