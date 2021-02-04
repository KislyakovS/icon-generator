import React from "react";

import { Search } from "../";

import "./header.css";

export const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <h1 className="header__title">Icon Generator</h1>
            </div>
            <Search className="header__search" />
        </header>
    )
} 