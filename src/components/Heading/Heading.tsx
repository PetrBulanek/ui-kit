import React, { FC, forwardRef } from 'react';
import { Text } from '..';
import { TextProps } from '../../types';

export const Heading: FC<TextProps> = forwardRef((props, ref) => <Text ref={ref} as="h2" {...props} />);

Heading.displayName = 'Heading';
