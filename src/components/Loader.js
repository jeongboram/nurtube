import { memo } from "react";
import ReactLoading from "react-loading";

const Loader = () => {
    return (
        <ReactLoading type="spin" color="#DDDDDD" />
    );
};

export default memo(Loader);