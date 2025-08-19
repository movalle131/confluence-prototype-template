import React from 'react';
import { Box } from '@atlaskit/primitives';
import { token } from '@atlaskit/tokens';

interface MockTopBarProps {
  children: React.ReactNode;
}

export const MockTopBar: React.FC<MockTopBarProps> = ({ children }) => {
  return (
    <Box
      backgroundColor="elevation.surface"
      style={{
        borderBottom: `1px solid ${token('color.border')}`,
        height: '56px',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        width: '100%'
      }}
    >
      {children}
    </Box>
  );
};
