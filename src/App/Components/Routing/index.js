import React from 'react';

class Routing extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {
        // stop react adding a br object when multiple spaces are entered in the children
        let sanitised = "";
        this.props.children.forEach((child, index) => {
            if (typeof child === 'string' || child instanceof String) {
                sanitised = sanitised + child;
            } else {
                sanitised = sanitised + '\n';
            }
        });
        const split = sanitised.split('\n');

        // fill in the content to the table
        const rows = split.map((row, index) => {
            return (
                <tr key={index}>
                    {this.props.cols.map((col, index2) => (
                        <td>{row.split(' / ')[index2]}</td>
                    ))}
                </tr>
            )
        });
        return (
            <div>
                <h4>{this.props.title}</h4>
                <table>
                    <thead>
                        <tr>
                            {this.props.cols.map((col, index) => (
                                <th>{col}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Routing;
