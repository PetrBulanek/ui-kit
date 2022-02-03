import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';
import { FC } from 'react';
import { color, compose, typography } from 'styled-system';
import { Box } from '..';
import { TextProps } from '../../types';

export const Text: FC<TextProps> = styled(Box, {
	shouldForwardProp,
})(compose(color, typography)).withComponent('span');
