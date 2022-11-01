import React from "react";

import { RiArrowLeftRightFill } from "react-icons/ri";
import { MdArrowRightAlt } from "react-icons/md";

export const useChoosingDirection = (el: any) => {
    if (el === "round") {
        return <RiArrowLeftRightFill/>;
    }else if (el === "oneway") {
        return <MdArrowRightAlt/>;
    }

    return <RiArrowLeftRightFill/>;
};