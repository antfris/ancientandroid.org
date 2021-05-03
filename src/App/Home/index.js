import React from 'react';
import { withRouter } from "react-router";

class Home extends React.Component {
    render () {
        return (
            <div>{this.props.location.pathname}</div>
        )
    }
}

export default withRouter(Home);
