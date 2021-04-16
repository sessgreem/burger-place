import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SyncLoader from "react-spinners/SyncLoader";

const Delayed = (props) => {
    const [hidden, setHidden] = useState(true);

    useEffect(() => {
        let timeout = setTimeout(() => {
            setHidden(false);
        }, props.waitBeforeShow);
        return () => {
            clearTimeout(timeout);
        };
    }, [props.waitBeforeShow]);

    return hidden ? (
        <SyncLoader color={"red"} css={"margin: 23px 20px"} size={11} />
    ) : (
        props.children
    );
};

export default Delayed;

Delayed.propTypes = {
    waitBeforeShow: PropTypes.number.isRequired,
};
