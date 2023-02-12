import React from "react";
import classes from "./SimpleBox.module.css";

export interface SimpleBoxIconProps {
    icon: React.ReactNode | any;
    isActive?: boolean;
}
export const SimpleBox: React.FC<SimpleBoxIconProps> = ({icon}) => {
    return (
        <>
            <div className={classes.SimpleBox}>
                {icon}
            </div>
        </>
    )
}