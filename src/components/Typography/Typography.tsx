import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';
import {
	color,
	ColorProps as StyledSystemColorProps,
	compose,
	typography,
	TypographyProps as StyledSystemTypographyProps,
} from 'styled-system';
import { Box, BoxProps } from '..';

export interface TypographyProps extends BoxProps, StyledSystemColorProps, StyledSystemTypographyProps {}

export const Typography = styled(Box, {
	shouldForwardProp,
})<TypographyProps>(compose(color, typography)).withComponent('span');
