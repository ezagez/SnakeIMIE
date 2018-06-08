import React, {Component} from 'react'
import Grid from 'components/Grid'


const styles = {
    app: {
        position: "relative",
        minHeight: "100vp",
        top: "0px",
    },
    main: {

    }
}

class App extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="app" style={styles.app}>
                <main>
                    <Grid rows={48} columns={84}/>
                </main>
            </div>
        )
    }
}

export default App
