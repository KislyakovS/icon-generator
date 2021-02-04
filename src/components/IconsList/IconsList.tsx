import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import parse from "html-react-parser";

import { icons } from "../../icons.json";

import { Button } from "../";

import { AppState } from "../../redux/reducer";

import { downloadFile } from "../../utils";

import "./iconsList.css";

export const IconsList: React.FC = () => {
    const size = useSelector((state: AppState) => state.control.size);
    const border = useSelector((state: AppState) => state.control.border);
    const color = useSelector((state: AppState) => state.control.color);
    const search = useSelector((state: AppState) => state.search.value);

    const styleString = `
        <style>
            .icon-list svg {
                width: ${size}px;
                height: ${size}px;
                stroke-width: ${border / 2};
                stroke: ${color};
            }
        </style>
    `

    const replaceSvgStyle = useCallback((svg) => {
        return svg.replace('width="24" height="24"', `width="${size}" height="${size}" stroke="${color}" stroke-width="${border / 2}" fill="none"`)
    }, [size, border, color])

    return (
        <>
            {parse(styleString)}
            <ul className="icon-list">
                {icons.filter(({ name }) => name.indexOf(search) === 0).map(({ name, icon }) => (
                    <li key={name} aria-label={name}>
                        <Button className="icon-list__button" onClick={() => {downloadFile(`${name}.svg`, replaceSvgStyle(icon))}}>{parse(icon)}</Button>
                    </li>
                ))}
            </ul>
        </>
    )
}