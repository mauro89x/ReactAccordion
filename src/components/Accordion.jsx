import React, { Component } from 'react';
import Bellow from './Bellow';

class Accordion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: -1,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(i) {
        this.setState({
            currentIndex: i,
        });
    }

    render() {
        const { data: { accordion } } = this.props;
        return accordion.map((elem, i) => (
            <Bellow key={i}
                title={elem.title}
                text={elem.text}
                index={i}
                currentIndex={this.state.currentIndex}
                handleChange={this.handleChange}
            />
        ));
    }
}

export default Accordion;
