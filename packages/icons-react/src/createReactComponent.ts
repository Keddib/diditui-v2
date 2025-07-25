import { forwardRef, createElement } from "react";
import defaultAttributes from "./defaultAttributes";
import type { IconNode, IconProps, Icon } from "./types";

const createReactComponent = (
  type: "linear" | "bold",
  iconName: string,
  iconNamePascal: string,
  iconNode: IconNode,
) => {
  const Component = forwardRef<Icon, IconProps>(
    (
      {
        color = "currentColor",
        size = 24,
        stroke = 1.5,
        title,
        className,
        children,
        ...rest
      }: IconProps,
      ref,
    ) =>
      createElement(
        "svg",
        {
          ref,
          ...defaultAttributes[type],
          width: size,
          height: size,
          className: [`didit-icon`, `didit-icon-${iconName}`, className].join(" "),
          ...(type === "bold"
            ? {
                fill: color,
              }
            : {
                strokeWidth: stroke,
                stroke: color,
              }),
          ...rest,
        },
        [
          title && createElement("title", { key: "svg-title" }, title),
          ...iconNode.map(([tag, attrs]) => createElement(tag, attrs)),
          ...(Array.isArray(children) ? children : [children]),
        ],
      ),
  );

  Component.displayName = iconNamePascal;

  return Component;
};

export default createReactComponent;
