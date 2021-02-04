import React, { useCallback } from "react";

import { hocWrapperControl } from "../../../hoc/hocWrapperControl";

import "./color.css";

type TProps = {
    value: string,
    setColor: (color: string) => void
}

const Component: React.FC = ({ value, setColor }: any) => {
    const onChange = useCallback((e) => {
        setColor(e.target.value);
    }, [setColor])

    return (
        <div className="control__wrapper">
            <div className="control__item control__item--swatch">
                <div className="control__item__swatch" style={{ background: value }}></div>
            </div>
            <input type="text" value={value} onChange={onChange} className="control__item control__item--input control__item--3" />
        </div>
    )
}

export const Color = hocWrapperControl<TProps>(Component)