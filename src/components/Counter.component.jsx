import React from 'react';
// class Counter {
//     greet() {
//         return 'Hello I am greet';
//     }

// }

// $counter = new Counter;

// $counter.greet();


class Counter extends React.Component {

    componentName = '';
    state = {
        myInitCounter: 100
    };
    constructor(props) {
        super(props);
        this.componentName = props.name;
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    componentWillUpdate() {
        const t = 100;
        console.log('I Will Update');
    }
    componentDidMount() {
        console.log('I am did mount');
    }
    componentDidCatch() {
        console.log('Fire Error logic here');
    }
    componentWillUnmount() {
        console.log('I am will mount');
    }

    componentWillReceiveProps() {
        console.log('Will receive properies');
    }

    increment() {
        // console.log('ADDING');
        this.setState({ myInitCounter: this.state.myInitCounter + 1 });
        // this.setState(({ myInitCounter }) => ({
        //     myInitCounter: myInitCounter + 1
        // }));
    }
    decrement() {
        // console.log('REMOVING');
        this.setState({ myInitCounter: this.state.myInitCounter - 1 });
    }

    render() {
        return (
            <div>
                <p>{this.componentName}</p>
                <span>{this.state.myInitCounter}</span>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        );
    }
}

export default Counter;