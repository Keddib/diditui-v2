import type { ForwardRefExoticComponent, FunctionComponent, RefAttributes } from "react";

export type { ReactNode } from "react";

export type IconNode = [
  elementName: keyof React.JSX.IntrinsicElements,
  attrs: Record<string, string>,
][];

export interface IconProps extends Partial<Omit<React.ComponentPropsWithoutRef<"svg">, "stroke">> {
  size?: string | number;
  stroke?: string | number;
  title?: string;
}

export type Icon = FunctionComponent<IconProps>;

export type DiditIcon = ForwardRefExoticComponent<Omit<IconProps, "ref"> & RefAttributes<Icon>>;
