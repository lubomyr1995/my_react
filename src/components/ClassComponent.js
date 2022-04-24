import {Component} from "react";

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {a: 0, b: 0}
        console.log('constructor')
    }

    componentDidMount() {
        console.log('didMount')
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        if (prevState.a === 3) {
            return 'snapshooottt!!!'
        }
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        console.log('snapshot', snapshot);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    inc() {
        this.setState(prev => ({a: prev.a + 1}));
    }

    render() {
        console.log('render')
        return (
            <div>
                Hello this is ClaasComponent Lifecycles
                <div>{this.props.sss}</div>
                <div>A: {this.state.a}</div>
                <div>B: {this.state.b}</div>
                <button onClick={() => this.inc()}>inc</button>
            </div>
        )
    }
}

export {ClassComponent}