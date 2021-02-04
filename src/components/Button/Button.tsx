import React from "react";
import classNames from "classnames";

import "./button.css";

type TProps = {
    className: String,
    onClick: () => void,
    children: JSX.Element | JSX.Element[] | String
}

export const Button: React.FC<TProps> = ({ className, children, onClick }: TProps) => {
    return (<button className={classNames("main-button", className)} onClick={onClick}>{children}</button>)
}