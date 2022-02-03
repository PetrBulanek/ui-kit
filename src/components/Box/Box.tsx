import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';
import { FC } from 'react';
import { compose, flexbox, layout, space } from 'styled-system';
import { BoxProps } from '../../types';

export const Box: FC<BoxProps> = styled('div', {
	shouldForwardProp,
})(
	{
		minWidth: 0,
	},
	compose(flexbox, layout, space),
);
