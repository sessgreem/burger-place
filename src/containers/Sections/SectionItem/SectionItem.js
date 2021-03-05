import React from "react";

const SectionItem = (props) => {
    console.log(props.options);
    return (
        <div>
            <h2>{props.name}</h2>
            <p>{JSON.stringify(props.options)}</p>
        </div>
    );
};

export default SectionItem;
