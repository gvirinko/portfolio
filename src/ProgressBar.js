import React from 'react';

const ProgressBar = (props) => {
    return (
        <div className="progress-bar">
            <div className="progress-bar__bar" style={{width: `${props.level*10}%`}}>
            </div>
        </div>
    )
}

export default ProgressBar;