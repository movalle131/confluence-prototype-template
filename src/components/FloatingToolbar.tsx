import React from 'react';
import { Box, Stack } from '@atlaskit/primitives';
import { IconButton } from '@atlaskit/button/new';
import { token } from '@atlaskit/tokens';
import CommentIcon from '@atlaskit/icon/core/comment';
import VideoIcon from '@atlaskit/icon/core/video';
import MegaphoneIcon from '@atlaskit/icon/core/megaphone';
import InformationCircleIcon from '@atlaskit/icon/core/information-circle';
import RovoIcon from '@atlaskit/icon-lab/core/rovo';

interface FloatingToolbarProps {
  // Future props can be added here
}

export function FloatingToolbar({}: FloatingToolbarProps) {
  return (
    <>
      {/* Main white toolbar group */}
      <Box
        backgroundColor="elevation.surface.raised"
        style={{
          position: 'fixed',
          bottom: 'calc(24px + 48px + 8px)',
          right: '24px',
          borderRadius: '12px',
          boxShadow: token('elevation.shadow.raised'),
          padding: token('space.100'),
          zIndex: 1000
        }}
      >
      <Stack space="space.100">
        {/* First toolbar item - Comment icon */}
        <IconButton
          appearance="subtle"
          spacing="compact"
          icon={CommentIcon}
          label="Add comment"
        />
        
        {/* Second toolbar item - Information Circle icon */}
        <IconButton
          appearance="subtle"
          spacing="compact"
          icon={InformationCircleIcon}
          label="Information"
        />
        
        {/* Divider line */}
        <Box
          style={{
            width: '100%',
            height: '1px',
            backgroundColor: token('color.border'),
            margin: `${token('space.100')} 0`
          }}
        />
        
        {/* Third toolbar item - Video icon */}
        <IconButton
          appearance="subtle"
          spacing="compact"
          icon={VideoIcon}
          label="Video"
        />
        
        {/* Fourth toolbar item - Megaphone icon */}
        <IconButton
          appearance="subtle"
          spacing="compact"
          icon={MegaphoneIcon}
          label="Announcement"
        />
      </Stack>
      </Box>
      
      {/* Separate black button at bottom - 8px gap from toolbar */}
      <Box
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 1000
        }}
      >
        <IconButton
          appearance="primary"
          spacing="default"
          icon={RovoIcon}
          label="Rovo"
          style={{
            backgroundColor: `${token('color.background.brand.boldest')} !important`,
            borderRadius: '12px !important',
            width: '48px',
            height: '48px',
            minWidth: '48px',
            minHeight: '48px',
            padding: '0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        />
      </Box>
    </>
  );
}

export default FloatingToolbar;
