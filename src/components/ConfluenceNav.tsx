import React from 'react';
import { IconButton } from '@atlaskit/button/new';
import Button from '@atlaskit/button/new';
import TextField from '@atlaskit/textfield';
import Avatar from '@atlaskit/avatar';
import { Box, Flex, Inline } from '@atlaskit/primitives';
import { token } from '@atlaskit/tokens';

// Import ADS icons
import AppSwitcherIcon from '@atlaskit/icon/core/app-switcher';
import SearchIcon from '@atlaskit/icon/core/search';
import AddIcon from '@atlaskit/icon/core/add';
import RovoChatIcon from '@atlaskit/icon/core/rovo-chat';
import NotificationIcon from '@atlaskit/icon/core/notification';
import QuestionCircleIcon from '@atlaskit/icon/core/question-circle';

export const ConfluenceNav: React.FC = () => {
  return (
    <Box
      backgroundColor="elevation.surface"
      style={{
        borderBottom: `1px solid ${token('color.border')}`,
        height: '56px',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        gap="8px"
        style={{ 
          height: '100%',
          paddingLeft: '12px',
          paddingRight: '12px',
          paddingTop: '8px',
          paddingBottom: '8px',
          width: '100%'
        }}
      >
        {/* Left section: App switcher + Confluence logo */}
        <Flex alignItems="center" gap="space.100">
          <IconButton
            icon={AppSwitcherIcon}
            label="Switch apps"
            appearance="subtle"
            spacing="compact"
          />
          
          <Box 
            style={{ 
              display: 'flex',
              alignItems: 'center',
              paddingLeft: token('space.100'),
              paddingRight: token('space.200')
            }}
          >
            {/* Confluence logo text */}
            <Box
              style={{
                display: 'flex',
                alignItems: 'center',
                color: token('color.text'),
                fontSize: '18px',
                fontWeight: 600,
                textDecoration: 'none',
                cursor: 'pointer'
              }}
              as="a"
              href="#"
            >
              {/* Confluence icon - simplified blue squares */}
              <Box
                style={{
                  width: '24px',
                  height: '24px',
                  marginRight: token('space.100'),
                  position: 'relative'
                }}
              >
                <Box
                  style={{
                    position: 'absolute',
                    width: '10px',
                    height: '10px',
                    backgroundColor: '#0052CC',
                    borderRadius: '2px',
                    top: '0',
                    left: '0'
                  }}
                />
                <Box
                  style={{
                    position: 'absolute',
                    width: '10px',
                    height: '10px',
                    backgroundColor: '#0052CC',
                    borderRadius: '2px',
                    top: '0',
                    right: '0'
                  }}
                />
                <Box
                  style={{
                    position: 'absolute',
                    width: '10px',
                    height: '10px',
                    backgroundColor: '#0052CC',
                    borderRadius: '2px',
                    bottom: '0',
                    left: '0'
                  }}
                />
                <Box
                  style={{
                    position: 'absolute',
                    width: '10px',
                    height: '10px',
                    backgroundColor: '#0052CC',
                    borderRadius: '2px',
                    bottom: '0',
                    right: '0'
                  }}
                />
              </Box>
              Confluence
            </Box>
          </Box>
        </Flex>

        {/* Center section: Search bar */}
        <Box style={{ flex: 1, maxWidth: '600px', marginLeft: token('space.200') }}>
          <Box style={{ position: 'relative' }}>
            <TextField
              placeholder="Search"
              style={{
                paddingLeft: token('space.400'),
              }}
            />
            <Box
              style={{
                position: 'absolute',
                left: token('space.150'),
                top: '50%',
                transform: 'translateY(-50%)',
                pointerEvents: 'none',
                color: token('color.icon.subtle')
              }}
            >
              <SearchIcon label="Search icon" />
            </Box>
          </Box>
        </Box>

        {/* Right section: Action buttons and user menu */}
        <Inline space="space.050" alignBlock="center">
          {/* Create button */}
          <Button
            appearance="primary"
            iconBefore={AddIcon}
          >
            Create
          </Button>
          
          {/* Rovo Chat */}
          <IconButton
            icon={RovoChatIcon}
            label="Rovo Chat"
            appearance="subtle"
            spacing="compact"
          />
          
          {/* Notifications */}
          <IconButton
            icon={NotificationIcon}
            label="Notifications"
            appearance="subtle"
            spacing="compact"
          />
          
          {/* Help */}
          <IconButton
            icon={QuestionCircleIcon}
            label="Help"
            appearance="subtle"
            spacing="compact"
          />
          
          {/* User avatar */}
          <Box style={{ marginLeft: token('space.100') }}>
            <Avatar
              size="medium"
              name="User Name"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
            />
          </Box>
        </Inline>
      </Flex>
    </Box>
  );
};
