import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';
import { compose, layout, LayoutProps, space, SpaceProps } from 'styled-system';

type BoxProps = LayoutProps & SpaceProps;

export const Box = styled('div', {
	shouldForwardProp,
})<BoxProps>(
	{
		minWidth: 0,
	},
	compose(layout, space),
);
