import React, { Component } from 'react';
import Star from './Star';

class Rating extends Component {
    static defaultProps = {
        max: 5
    };
    constructor(props) {
        super(props);
        this.state = {
            initialValue: props.stars,
            value: 0
        };
        this._colors = {
            1: 'f44336',
            2: '#FF5722',
            3: '#FF9800',
            4: '#FFC107',
            5: '#FFEB3B'
        };
        this._meanings = {
            0: 'No Rating 🚫',
            1: 'Terrible 🤮',
            2: 'Mediocre 😒',
            3: 'Average 😐',
            4: 'Solid 🙂',
            5: 'Fantastic 🔥'
        };
    }
    handleMouseLeave = (value) => {
        this.setState({
            initialValue:this.state.value
        });
    }
    handleMouseEnter = (value) => {
        this.setState({
            initialValue:value
        });
    }
    handleClick = (value) => {
        this.setState({
            initialValue:value,
            value:value
        });
    }
    render() {
        const { initialValue, value } = this.state;
        const max = this.props.max;
        let count = initialValue;
        const spanStars = [];

        for (let v = 1; v <= max; v++) {
            spanStars.push(
                <Star
                    key={v}
                    event
                    color={this._colors[count]}
                    value={v}
                    isFilled={v <= initialValue}
                    handleMouseEnter={this.handleMouseEnter}
                    handleMouseLeave={this.handleMouseLeave}
                    handleClick={this.handleClick}
                />
            );
        }
        return (
            <>
                <h3>Rating Component</h3>
                <p>{this._meanings[value]}</p>
                {spanStars}
            </>
        );
    }
}


export default Rating;