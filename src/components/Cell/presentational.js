import React, {PureComponent} from 'react'

const stylize = (props, state) => ({
    cell: {
        height: '4px',
        width: '4px',
        border: '1px solid black'
    }
})

class Cell extends PureComponent {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id={this.props.coordonate} style={stylize(this.props).cell}></div>
        )
    }
}

export default Cell
