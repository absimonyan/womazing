import React from 'react';
import "./OurValues.scss";
const OurValues = ({item}) => {
    return (
        <div className='value'>
            {<img src={item.src} alt="" />}
            <h3>{item.header}</h3>
            <p>{item.paragraph}</p>
        </div>
    );
}

export default OurValues;
