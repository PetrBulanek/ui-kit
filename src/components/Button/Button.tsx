import React, { FC, forwardRef } from 'react';
import { Text } from '..';
import { TextProps } from '../../types';

export const Button: FC<TextProps> = forwardRef((props, ref) => <Text ref={ref} as="button" {...props} />);

Button.displayName = 'Button';
