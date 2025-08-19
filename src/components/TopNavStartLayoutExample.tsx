import React, { useState, useEffect } from 'react';
import { ConfluenceIcon } from '@atlaskit/logo';
import { Help } from '@atlaskit/navigation-system';
import { AppLogo, AppSwitcher, CreateButton } from '@atlaskit/navigation-system/top-nav-items';
import TextField from '@atlaskit/textfield';
import SearchIcon from '@atlaskit/icon/core/search';
import RovoChatIcon from '@atlaskit/icon/core/rovo-chat';
import Button from '@atlaskit/button/new';
import Avatar from '@atlaskit/avatar';
import { Box, Inline } from '@atlaskit/primitives';
import { token } from '@atlaskit/tokens';

interface TopNavStartLayoutExampleProps {
	onSidebarToggle?: () => void;
	sidebarCollapsed?: boolean;
}

export function TopNavStartLayoutExample({ onSidebarToggle, sidebarCollapsed }: TopNavStartLayoutExampleProps) {
	const [isSmallScreen, setIsSmallScreen] = useState(false);

	useEffect(() => {
		const checkScreenSize = () => {
			setIsSmallScreen(window.innerWidth < 480);
		};

		checkScreenSize();
		window.addEventListener('resize', checkScreenSize);
		return () => window.removeEventListener('resize', checkScreenSize);
	}, []);

	return (
		<Box
			backgroundColor="elevation.surface"
			style={{
				borderBottom: `1px solid ${token('color.border')}`,
				height: '56px',
				position: 'sticky',
				top: 0,
				zIndex: 100,
				width: '100%',
				margin: 0,
				padding: 0
			}}
		>
			<Box
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					height: '100%',
					paddingLeft: '12px',
					paddingRight: '12px',
					gap: '8px',
					margin: 0,
					position: 'relative'
				}}
			>
				{/* Left section: Sidebar toggle + App switcher + Confluence logo */}
				<Box style={{ 
					display: 'flex', 
					alignItems: 'center', 
					gap: token('space.100'),
					zIndex: 1
				}}>
					<Button
						appearance="subtle"
						onClick={onSidebarToggle}
						spacing="compact"
					>
						{sidebarCollapsed ? '→' : '←'}
					</Button>
					<AppSwitcher label="App switcher" />
					<AppLogo
						href="https://jira.atlassian.com"
						icon={ConfluenceIcon}
						name="Confluence"
						label="Home page"
					/>
				</Box>

				{/* Center section: Search bar and Create button */}
				<Box style={{ 
					position: 'absolute',
					left: '50%',
					transform: 'translateX(-50%)',
					display: 'flex', 
					alignItems: 'center', 
					gap: '8px',
					justifyContent: 'center',
					width: isSmallScreen ? 'auto' : 'calc(100vw - 400px)',
					maxWidth: isSmallScreen ? 'auto' : '780px'
				}}>
					{/* Search bar */}
					{isSmallScreen ? (
						<Button
							iconBefore={SearchIcon}
							appearance="subtle"
							spacing="compact"
						/>
					) : (
						<Box style={{ 
							position: 'relative', 
							flex: 1,
							minWidth: '200px',
							maxWidth: '600px'
						}}>
							<TextField
								placeholder="Search"
								style={{
									paddingLeft: token('space.400'),
									width: '100%',
									height: '32px',
									boxSizing: 'border-box'
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
					)}
					
					<CreateButton>Create</CreateButton>
				</Box>

				{/* Right section: Rovo Chat + Help + Avatar */}
				<Box style={{ 
					display: 'flex', 
					alignItems: 'center'
				}}>
					<Inline space="space.050" alignBlock="center">
						<Button
							iconBefore={RovoChatIcon}
							appearance="default"
							spacing="default"
						>
							Rovo Chat
						</Button>
						<Help label="Help" />
						<Avatar
							size="small"
							appearance="circle"
							name="User Name"
							src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face"
						/>
					</Inline>
				</Box>
			</Box>
		</Box>
	);
}

export default TopNavStartLayoutExample;
