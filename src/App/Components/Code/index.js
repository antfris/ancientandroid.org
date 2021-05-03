import React from 'react';
import Highlight from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
//import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


class Code extends React.Component {
    render () {
        return (
            <Highlight language="javascript" style={docco} customStyle="">
                {this.props.children}
            </Highlight>
        )
    }
}

export default Code;
