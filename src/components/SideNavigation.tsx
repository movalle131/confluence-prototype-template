import React from 'react';
import { Box, Stack, Text } from '@atlaskit/primitives';
import { SideNavContent } from '@atlaskit/navigation-system/layout/side-nav';
import { LinkMenuItem } from '@atlaskit/navigation-system/side-nav-items/link-menu-item';
import { ButtonMenuItem } from '@atlaskit/navigation-system/side-nav-items/button-menu-item';
import { MenuList } from '@atlaskit/navigation-system/side-nav-items/menu-list';
import {
  FlyoutMenuItem,
  FlyoutMenuItemContent,
  FlyoutMenuItemTrigger,
} from '@atlaskit/navigation-system/side-nav-items/flyout-menu-item';
import { Divider } from '@atlaskit/navigation-system/side-nav-items/menu-section';
import { ContainerAvatar } from '@atlaskit/navigation-system/side-nav-items/container-avatar';
import PersonAvatarIcon from '@atlaskit/icon/core/person-avatar';
import ClockIcon from '@atlaskit/icon/core/clock';
import StarUnstarredIcon from '@atlaskit/icon/core/star-unstarred';
import GlobeIcon from '@atlaskit/icon/core/globe';
import EditIcon from '@atlaskit/icon/core/edit';
import ShowMoreHorizontalIcon from '@atlaskit/icon/core/show-more-horizontal';
import PageIcon from '@atlaskit/icon/core/page';
import QuotationMarkIcon from '@atlaskit/icon/core/quotation-mark';
import AddIcon from '@atlaskit/icon/core/add';
import { token } from '@atlaskit/tokens';
import avatarImage from '../assets/avatar image.png';


interface SideNavigationProps {
  collapsed?: boolean;
}

export function SideNavigation({ collapsed = false }: SideNavigationProps) {
  // Don't render anything when collapsed
  if (collapsed) {
    return null;
  }

  return (
    <Box
      backgroundColor="elevation.surface"
      style={{
        width: '320px',
        height: '100%',
        borderRight: `1px solid ${token('color.border')}`,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Side Nav Content */}
      <SideNavContent>
        <MenuList>
          <LinkMenuItem
            href="#for-you"
            elemBefore={<PersonAvatarIcon label="" color="currentColor" spacing="spacious" />}
          >
            <Text as="span" size="medium" weight="medium" color="color.text.subtle">
              For you
            </Text>
          </LinkMenuItem>
          
                            <FlyoutMenuItem>
                    <FlyoutMenuItemTrigger elemBefore={<ClockIcon label="" color="currentColor" spacing="spacious" />}>
                      <Text as="span" size="medium" weight="medium" color="color.text.subtle">
                        Recent
                      </Text>
                    </FlyoutMenuItemTrigger>
            <FlyoutMenuItemContent>
              <Box paddingInlineStart="space.075" paddingBlock="space.100">
                <Text as="span" size="small" weight="medium">
                  Recent Items
                </Text>
              </Box>
              <MenuList>
                <LinkMenuItem href="#recent-item-1">
                  Recent Item 1
                </LinkMenuItem>
                <LinkMenuItem href="#recent-item-2">
                  Recent Item 2
                </LinkMenuItem>
                <LinkMenuItem href="#recent-item-3">
                  Recent Item 3
                </LinkMenuItem>
              </MenuList>
            </FlyoutMenuItemContent>
          </FlyoutMenuItem>

                            <FlyoutMenuItem>
                    <FlyoutMenuItemTrigger elemBefore={<StarUnstarredIcon label="" color="currentColor" spacing="spacious" />}>
                      <Text as="span" size="medium" weight="medium" color="color.text.subtle">
                        Starred
                      </Text>
                    </FlyoutMenuItemTrigger>
            <FlyoutMenuItemContent>
              <Box paddingInlineStart="space.075" paddingBlock="space.100">
                <Text as="span" size="small" weight="medium">
                  Starred Items
                </Text>
              </Box>
              <MenuList>
                <LinkMenuItem href="#starred-item-1">
                  Starred Item 1
                </LinkMenuItem>
                <LinkMenuItem href="#starred-item-2">
                  Starred Item 2
                </LinkMenuItem>
                <LinkMenuItem href="#starred-item-3">
                  Starred Item 3
                </LinkMenuItem>
              </MenuList>
            </FlyoutMenuItemContent>
          </FlyoutMenuItem>

          <FlyoutMenuItem>
            <FlyoutMenuItemTrigger elemBefore={<GlobeIcon label="" color="currentColor" spacing="spacious" />}>
              <Text as="span" size="medium" weight="medium" color="color.text.subtle">
                Spaces
              </Text>
            </FlyoutMenuItemTrigger>
            <FlyoutMenuItemContent>
              <Box paddingInlineStart="space.075" paddingBlock="space.100">
                <Text as="span" size="small" weight="medium">
                  Spaces
                </Text>
              </Box>
              <MenuList>
                <LinkMenuItem href="#space-1">
                  Marketing Space
                </LinkMenuItem>
                <LinkMenuItem href="#space-2">
                  Engineering Space
                </LinkMenuItem>
                <LinkMenuItem href="#space-3">
                  Design Space
                </LinkMenuItem>
              </MenuList>
            </FlyoutMenuItemContent>
          </FlyoutMenuItem>

          <LinkMenuItem
            href="#drafts"
            elemBefore={<EditIcon label="" color="currentColor" spacing="spacious" />}
          >
            <Text as="span" size="medium" weight="medium" color="color.text.subtle">
              Drafts
            </Text>
          </LinkMenuItem>
        </MenuList>
        
        <Divider />
        
        <MenuList>
          <ButtonMenuItem
            elemBefore={<ContainerAvatar src={avatarImage} />}
            elemAfter={<ShowMoreHorizontalIcon label="" color="currentColor" spacing="spacious" />}
            isSelected
          >
            <Text as="span" size="medium" weight="medium" color="color.text.subtle">
              Project Space
            </Text>
          </ButtonMenuItem>
          
          <LinkMenuItem
            href="#content"
            elemBefore={<PageIcon label="" color="currentColor" spacing="spacious" />}
          >
            <Text as="span" size="medium" weight="medium" color="color.text.subtle">
              Content
            </Text>
          </LinkMenuItem>
          
          <ButtonMenuItem
            elemBefore={<QuotationMarkIcon label="" color="currentColor" spacing="spacious" />}
            elemAfter={<AddIcon label="" color="currentColor" spacing="spacious" />}
          >
            <Text as="span" size="medium" weight="medium" color="color.text.subtle">
              Blogs
            </Text>
          </ButtonMenuItem>
        </MenuList>
      </SideNavContent>
      
      {/* Side Nav Footer */}
      <Box
        padding="space.200"
        style={{
          borderTop: `1px solid ${token('color.border')}`
        }}
      >
        <div>Footer Content</div>
      </Box>
    </Box>
  );
}

export default SideNavigation;
