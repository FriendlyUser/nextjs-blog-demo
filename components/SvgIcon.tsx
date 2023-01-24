"use client"; // this is a client component
import React from "react";
import classes from "./svgIcon.module.css";
import { SvgInline } from "./SvgInline";

export interface SearchIconProps {
  label?: string;
  iconUrl?: string;
  svgStyle?: React.CSSProperties;
}

export const SvgIcon: React.FC<SearchIconProps> = ({
  label,
  iconUrl,
}) => {
  const [testActive, setTestActive] = React.useState(false);

  const activeClasses = testActive ? classes.activeClass : classes.inActiveClass;
  return (
    <>
      <div tabIndex={-1} onClick={() => {
        setTestActive(!testActive);
      }} className={activeClasses} style={{
        width: '100px',
        maxWidth: "150px"
      }}>
        {iconUrl && <SvgInline url={iconUrl}  />}
        </div>
    </>
  );
};
