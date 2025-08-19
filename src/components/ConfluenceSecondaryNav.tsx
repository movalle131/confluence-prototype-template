import React from 'react';
import { Box, Text, Inline } from '@atlaskit/primitives';
import Button, { IconButton, SplitButton } from '@atlaskit/button/new';
import Avatar from '@atlaskit/avatar';
import AvatarGroup from '@atlaskit/avatar-group';
import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';
import ChevronDownIcon from '@atlaskit/icon/core/chevron-down';
import ShareIcon from '@atlaskit/icon/core/share';
import LockUnlockedIcon from '@atlaskit/icon/core/lock-unlocked';
import LinkIcon from '@atlaskit/icon/core/link';
import ShowMoreHorizontalIcon from '@atlaskit/icon/core/show-more-horizontal';
import { token } from '@atlaskit/tokens';

export function ConfluenceSecondaryNav() {
  // Avatar group data similar to the example you provided
  const avatarData = [
    {
      key: 'raissa@example.com',
      name: 'Raissa',
      href: '#',
      src: 'https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15?w=32&h=32&fit=crop&crop=face',
    },
    {
      key: 'michael@example.com', 
      name: 'Michael Chen',
      href: '#',
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face',
    },
    {
      key: 'emily@example.com',
      name: 'Emily Rodriguez', 
      href: '#',
      src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face',
    }
  ];

  return (
    <Box
      backgroundColor="elevation.surface"
      style={{
        borderBottom: `1px solid ${token('color.border')}`,
        height: '48px',
        width: '100%',
        position: 'sticky',
        top: '56px',
        zIndex: 99,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: '24px',
        paddingRight: '16px'
      }}
    >
      {/* Left section: Space name with dropdown */}
      <Box style={{ display: 'flex', alignItems: 'center' }}>
        <Button
          iconAfter={ChevronDownIcon}
          appearance="subtle"
          spacing="compact"
        >
          Vitafleet Marketing
        </Button>
      </Box>

      {/* Right section: Edit info + Avatars */}
      <Box style={{ display: 'flex', alignItems: 'center' }}>
        <Inline space="space.150" alignBlock="center">
          <Text
            size="small"
            color="subtle"
            style={{
              fontSize: token('font.size.075'),
              whiteSpace: 'nowrap'
            }}
          >
            Edited 4h ago
          </Text>
          
          <AvatarGroup
            appearance="stack"
            data={avatarData}
            size="small"
          />
          
          <SplitButton appearance="default" spacing="default">
            <Button iconBefore={LockUnlockedIcon}>
              Share
            </Button>
            <DropdownMenu<HTMLButtonElement>
              shouldRenderToParent
              trigger={({ triggerRef, ...triggerProps }) => (
                <IconButton
                  ref={triggerRef}
                  {...triggerProps}
                  icon={LinkIcon}
                  label="More share options"
                />
              )}
            >
              <DropdownItemGroup>
                <DropdownItem>Copy link</DropdownItem>
                <DropdownItem>Share via email</DropdownItem>
                <DropdownItem>Embed page</DropdownItem>
                <DropdownItem>Export to PDF</DropdownItem>
              </DropdownItemGroup>
            </DropdownMenu>
          </SplitButton>
          
          <Button
            iconBefore={ShowMoreHorizontalIcon}
            appearance="subtle"
            spacing="compact"
          />
        </Inline>
      </Box>
    </Box>
  );
}

export default ConfluenceSecondaryNav;
