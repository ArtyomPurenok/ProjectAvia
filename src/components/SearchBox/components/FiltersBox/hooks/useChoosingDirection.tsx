import React from "react";

import { RiArrowLeftRightFill } from "react-icons/ri";
import { MdArrowRightAlt } from "react-icons/md";

export const useChoosingDirection = (el: any) => {
    if (el === "Туда и обратно") {
        return <RiArrowLeftRightFill/>;
    }else if (el === "В одну сторону") {
        return <MdArrowRightAlt/>;
    }

    return <RiArrowLeftRightFill/>;
};