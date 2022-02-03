import { ElementType, HTMLProps, RefAttributes } from 'react';
import { FlexboxProps, LayoutProps, SpaceProps, TypographyProps } from 'styled-system';

export interface BaseProps extends RefAttributes<HTMLElement> {
	as?: ElementType;
}

interface BoxBaseProps extends BaseProps, FlexboxProps, LayoutProps, SpaceProps {}
export interface BoxProps extends BoxBaseProps, Omit<HTMLProps<HTMLElement>, keyof BoxBaseProps> {}

interface TextBaseProps extends BoxBaseProps, TypographyProps {}
export interface TextProps extends TextBaseProps, Omit<HTMLProps<HTMLElement>, keyof TextBaseProps> {}

interface HeadingBaseProps extends BoxBaseProps, TypographyProps {}
export interface HeadingProps extends HeadingBaseProps, Omit<HTMLProps<HTMLElement>, keyof HeadingBaseProps> {}
