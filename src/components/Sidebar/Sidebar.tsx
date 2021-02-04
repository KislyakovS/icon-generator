import React from "react";

import { useControlSize, useControlBorder, useControlColor } from "../../bus/control/hook";
import { ControlNumber, ControlColor } from "../";

import "./sidebar.css";

export const Sidebar: React.FC = () => {
    const size = useControlSize();
    const border = useControlBorder();
    const color =  useControlColor();

    return (
        <aside className="sidebar">
            <div className="sidebar__wrapper">
                <ControlNumber className="sidebar__control" title="size" value={size.value} inc={size.inc} dim={size.dim} />
                <ControlNumber className="sidebar__control" title="border" value={border.value} inc={border.inc} dim={border.dim} />
                <ControlColor className="sidebar__control" title="color" value={color.value} setColor={color.setColor} />
            </div>
        </aside>
    )
}