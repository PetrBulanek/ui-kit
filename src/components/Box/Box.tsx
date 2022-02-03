import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';
import { FC } from 'react';
import { color, compose, flexbox, grid, layout, position, space } from 'styled-system';
import { BoxProps } from '../../types';

export const Box: FC<BoxProps> = styled('div', {
	shouldForwardProp,
})(
	{
		minWidth: 0,
	},
	compose(color, flexbox, grid, layout, position, space),
);
