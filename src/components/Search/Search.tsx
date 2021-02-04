import React, { useCallback } from "react";
import classNames from "classnames";

import { useSearch } from "../../bus/search/hook";

import "./search.css";

type TProps = {
    className: String
}

export const Search: React.FC<TProps> = ({ className }: TProps) => {
    const { value, setSearch } = useSearch();

    const onChangeSearch = useCallback((e) => {
        setSearch(e.target.value);
    }, [setSearch])

    return (
        <div className={classNames("search", className)}>
            <input type="search" value={value} onChange={onChangeSearch} placeholder="Search icon..." />
        </div>
    )
}