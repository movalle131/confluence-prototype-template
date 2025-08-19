import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { token, setGlobalTheme } from '@atlaskit/tokens'
import Button from '@atlaskit/button'
import Heading from '@atlaskit/heading'
import { Box, Stack, Inline } from '@atlaskit/primitives'
import { TopNavStartLayoutExample } from './components/TopNavStartLayoutExample'
import { ConfluenceSecondaryNav } from './components/ConfluenceSecondaryNav'
import { SideNavigation } from './components/SideNavigation'
import { FloatingToolbar } from './components/FloatingToolbar'


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    
    setGlobalTheme({
      colorMode: newMode ? 'dark' : 'light'
    });
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

    return (
    <Box style={{ minHeight: '100vh', width: '100%' }}>
      {/* Confluence Top Navigation */}
      <TopNavStartLayoutExample 
        onSidebarToggle={toggleSidebar}
        sidebarCollapsed={sidebarCollapsed}
        isDarkMode={isDarkMode}
        onThemeToggle={toggleTheme}
      />
      
      {/* Layout with Side Nav and Main Content starting at same level as Secondary Nav */}
      <Box style={{ display: 'flex', height: 'calc(100vh - 56px)' }}>
        {/* Side Navigation */}
        <SideNavigation collapsed={sidebarCollapsed} />
        
        {/* Right Content: Secondary Nav + Main Content */}
        <Box 
          style={{ 
            flex: 1,
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {/* Confluence Secondary Navigation */}
          <ConfluenceSecondaryNav />
          
          {/* Main Content */}
          <Box 
            style={{ 
              flex: 1,
              overflow: 'auto'
            }}
          >
          {/* Hero Image */}
          <Box 
            style={{ 
              width: '100%',
              height: '345px',
              marginBottom: token('space.200'),
              overflow: 'hidden'
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=1200&h=345&fit=crop&crop=center"
              alt="Silver MacBook Air on table near iMac - UX design workspace"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </Box>
          
          <Box 
            paddingInline="space.200"
            paddingBlock="space.150"
            style={{ 
              maxWidth: '1280px',
              margin: '0 auto',
              textAlign: 'center' as const
            }}
          >
            <Stack space="space.200">
              {/* Logo Section */}
              <Inline space="space.300" alignInline="center">
                <a href="https://vitejs.dev" target="_blank">
                  <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                  <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
              </Inline>

              {/* Main Heading */}
              <Heading size="xlarge" as="h1" style={{ color: token('color.text.accent.green') }}>
                Vite + React + ADS
              </Heading>

              {/* Sample Content */}
              <Box
                padding="space.400"
                backgroundColor="elevation.surface.raised"
                style={{ borderRadius: token('border.radius.200') }}
              >
                <Stack space="space.300" alignInline="center">
                  <p style={{
                    fontSize: token('font.size.100'),
                    color: token('color.text.subtle'),
                    margin: 0,
                    textAlign: 'center'
                  }}>
                    🎉 Kickstart your Confluence prototyping using this template. Designed to help you get up and running quickly with a basic framework in place.
                  </p>
                  <Box style={{ alignSelf: 'center' }}>
                    <Button 
                      appearance="default"
                      onClick={() => window.open('https://hello.atlassian.net/wiki/x/zy_BVAE', '_blank')}
                    >
                      Learn more
                    </Button>
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Box>
          </Box>
        </Box>
      </Box>
      
      {/* Floating Toolbar */}
      <FloatingToolbar />
    </Box>
  )
}

export default App
