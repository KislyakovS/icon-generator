import React from "react";
import classNames from "classnames";

type TProps = {
    className: string,
    title: string,
}

export function hocWrapperControl<T>(Component: React.ComponentType) {
    return ({ className, title, ...props }: TProps & T) => (
        <section className={classNames("control", className)}>
            <h2 className="control__title">{title}</h2>
            <Component {...props} />
        </section>
    )
}