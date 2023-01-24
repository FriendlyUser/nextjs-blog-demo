import React, { useEffect, useState } from "react";

export interface SvgInlineProps {
  url: string;
  className?: string;
  style?: React.CSSProperties | undefined;
}
export const SvgInline: React.FC<SvgInlineProps> = ({ url, className, style }) => {
  const [svg, setSvg] = useState<string>("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [isErrored, setIsErrored] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.text();
      })
      .then(setSvg)
      .catch(setIsErrored)
      .then(() => {
        return setIsLoaded(true);
      });
  }, [url]);

  return (
    <div
      className={`svgInline svgInline--${isLoaded ? "loaded" : "loading"} ${
        isErrored ? "svgInline--errored" : ""
      } ${className || ""}`}
      style={style}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};
