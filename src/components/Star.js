import React from 'react';


const Star = (props) => {
    const { event,color,value, isFilled,handleMouseEnter,handleMouseLeave,handleClick } = props;
    if(!event) {
        return (

            <>
                <span
                    className="Star"
                    style={{ color }}
    
                >
                    {isFilled ? '★' : '☆'}
                </span>
            </>
        );
    }
    return (

        <>
            <span
                className="Star"
                event="true"
                style={{ color }}
                onMouseEnter={() => handleMouseEnter(value)}
                onMouseLeave={() => handleMouseLeave(value)}
                onClick={() => handleClick(value)}

            >
                {isFilled ? '★' : '☆'}
            </span>
        </>
    );
};



export default Star;