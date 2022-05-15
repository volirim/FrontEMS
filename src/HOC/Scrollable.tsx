import React from 'react';

interface Iprops {
    class: string;
    children: JSX.Element | JSX.Element[];
}

const Scrollable = (props: Iprops) => {
    return(
        <div className={props.class}>
            {React.Children.map(props.children, child => React.Children.only(child))}
        </div>
    )
}

export default Scrollable;