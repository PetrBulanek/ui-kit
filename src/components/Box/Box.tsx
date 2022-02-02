import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';
import {
	compose,
	layout,
	LayoutProps as StyledSystemLayoutProps,
	space,
	SpaceProps as StyledSystemSpaceProps,
} from 'styled-system';

export interface BoxProps extends StyledSystemLayoutProps, StyledSystemSpaceProps {}

export const Box = styled('div', {
	shouldForwardProp,
})<BoxProps>(
	{
		minWidth: 0,
	},
	compose(layout, space),
);
