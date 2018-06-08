import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import Cell from 'components/Cell/index'

const styles = {
    row: {display: "flex"}
}

class Grid extends PureComponent {


    render() {
        this.handleDimension()
        return (
            <div className="grid-container">
                {
                    Array(this.dimension.rows)
                        .fill(true)
                        .map((row, y) => (
                            <div key={`rows-${y}`} style={styles.row}>
                                {Array(this.dimension.columns)
                                    .fill(true)
                                    .map((column, x) =>
                                        <Cell key={`cell-${x}`} coordonate={`${y}-${x}`}/>
                                    )
                                }
                            </div>
                        ))
                }
            </div>
        )
    }
}

Grid.propTypes = {
    rows: PropTypes.number.isRequired,
    columns: PropTypes.number.isRequired
}

Grid.defaultProps = {
    row: 50,
    column: 50
}

export default Grid
