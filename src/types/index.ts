import { ElementType, HTMLProps, RefAttributes } from 'react';
import {
	ColorProps,
	FlexboxProps,
	GridProps,
	LayoutProps,
	PositionProps,
	SpaceProps,
	TypographyProps,
} from 'styled-system';

export interface BaseProps extends RefAttributes<HTMLElement> {
	as?: ElementType;
}

interface BoxBaseProps extends BaseProps, ColorProps, FlexboxProps, GridProps, LayoutProps, PositionProps, SpaceProps {}
export interface BoxProps extends BoxBaseProps, Omit<HTMLProps<HTMLElement>, keyof BoxBaseProps> {}

interface TextBaseProps extends BoxBaseProps, TypographyProps {}
export interface TextProps extends TextBaseProps, Omit<HTMLProps<HTMLElement>, keyof TextBaseProps> {}
