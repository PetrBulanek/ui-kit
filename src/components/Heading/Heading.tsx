import React, { FC, forwardRef } from 'react';
import { Text } from '..';
import { HeadingProps } from '../../types';

export const Heading: FC<HeadingProps> = forwardRef((props, ref) => <Text ref={ref} as="h2" {...props} />);

Heading.displayName = 'Heading';
