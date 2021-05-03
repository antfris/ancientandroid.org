import React from 'react';

class Ant extends React.Component {
    render () {
        return (
            <div className="antWatermark">
                <div className="antWatermarkImg"></div>
                <div className="antWatermarkText">
                    <div className="antWatermarkName">Author: antfris</div>
                    <div className="antWatermarkDate">{this.props.date}</div>
                </div>
                <div className="clearBoth"></div>
            </div>
        )
    }
}

export default Ant;
