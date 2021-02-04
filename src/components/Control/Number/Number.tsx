import React from "react";

import { hocWrapperControl } from "../../../hoc/hocWrapperControl";

import "./number.css";

type TProps = {
    value: number,
    inc: () => void,
    dim: () => void
}

const Component: React.FC = ({ value, inc, dim }: any) => {
    return (
        <div className="control__wrapper">
            <button className="control__item control__item--button" onClick={dim}>-</button>
            <input type="text" className="control__item control__item--input" value={value} />
            <button className="control__item control__item--button" onClick={inc}>+</button>
        </div>
    )
}

export const Number = hocWrapperControl<TProps>(Component) 