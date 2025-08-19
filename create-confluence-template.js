#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

// Get the project name from command line arguments
const projectName = process.argv[2];

if (!projectName) {
  console.log('❌ Please provide a project name!');
  console.log('Usage: node create-confluence-template.js <project-name>');
  console.log('Example: node create-confluence-template.js my-confluence-app');
  process.exit(1);
}

// Validate project name
if (!/^[a-zA-Z0-9-_]+$/.test(projectName)) {
  console.log('❌ Project name can only contain letters, numbers, hyphens, and underscores');
  process.exit(1);
}

const currentDir = process.cwd();
const templateDir = __dirname;
const targetDir = path.join(currentDir, projectName);

console.log('🚀 Creating Confluence Prototype Template...');
console.log(`📁 Project: ${projectName}`);
console.log(`📍 Location: ${targetDir}`);

// Check if target directory already exists
if (fs.existsSync(targetDir)) {
  console.log('❌ Directory already exists! Please choose a different name.');
  process.exit(1);
}

try {
  // Create target directory
  fs.ensureDirSync(targetDir);
  
  console.log('📋 Copying template files...');
  
  // Copy all files except node_modules, .git, and this script
  const excludePatterns = [
    'node_modules',
    '.git',
    'create-confluence-template.js',
    '.DS_Store',
    'dist',
    '.vite'
  ];
  
  const copyFilter = (src) => {
    const basename = path.basename(src);
    return !excludePatterns.some(pattern => basename.includes(pattern));
  };
  
  fs.copySync(templateDir, targetDir, { filter: copyFilter });
  
  // Update package.json with new project name
  console.log('📝 Updating package.json...');
  const packageJsonPath = path.join(targetDir, 'package.json');
  const packageJson = fs.readJsonSync(packageJsonPath);
  packageJson.name = projectName;
  packageJson.version = '1.0.0';
  packageJson.description = 'Confluence prototype built from template';
  fs.writeJsonSync(packageJsonPath, packageJson, { spaces: 2 });
  
  // Update README if it exists
  const readmePath = path.join(targetDir, 'README.md');
  if (fs.existsSync(readmePath)) {
    console.log('📄 Updating README...');
    let readme = fs.readFileSync(readmePath, 'utf8');
    readme = readme.replace(/test08151|test-enhanced-app/g, projectName);
    readme = `# ${projectName}\n\n🎉 Confluence Prototype Template\n\nKickstart your Confluence prototyping using this template. Designed to help you get up and running quickly with a basic framework in place.\n\n## Getting Started\n\n\`\`\`bash\nnpm install\nnpm run dev\`\`\`\n\nOpen [http://localhost:3000](http://localhost:3000) to view your prototype.\n\n## Features\n\n- ⚡ Vite + React + TypeScript\n- 🎨 Atlassian Design System (ADS)\n- 🧭 Complete navigation system\n- 📱 Responsive design\n- 🌙 Dark/Light theme toggle\n- 🔧 Floating toolbar\n- 📋 Secondary navigation\n\n## Template Structure\n\n- \`src/components/TopNavStartLayoutExample.tsx\` - Main navigation\n- \`src/components/ConfluenceSecondaryNav.tsx\` - Secondary navigation\n- \`src/components/SideNavigation.tsx\` - Sidebar navigation\n- \`src/components/FloatingToolbar.tsx\` - Floating action toolbar\n- \`src/App.tsx\` - Main application layout\n\n## Customization\n\nThis template is ready to customize for your specific Confluence prototype needs:\n\n1. Update navigation items in the component files\n2. Modify the hero image and content\n3. Add your own components and pages\n4. Customize the theme and styling\n\nHappy prototyping! 🚀\n`;
    fs.writeFileSync(readmePath, readme);
  }
  
  console.log('📦 Installing dependencies...');
  
  // Change to target directory and install dependencies
  process.chdir(targetDir);
  execSync('npm install', { stdio: 'inherit' });
  
  console.log('✅ Template created successfully!');
  console.log('');
  console.log('🎉 Your Confluence prototype is ready!');
  console.log('');
  console.log('To get started:');
  console.log(`  cd ${projectName}`);
  console.log('  npm run dev');
  console.log('');
  console.log('🌐 Your app will be available at http://localhost:3000');
  console.log('');
  console.log('Features included:');
  console.log('  ⚡ Vite + React + TypeScript');
  console.log('  🎨 Atlassian Design System');
  console.log('  🧭 Complete navigation system');
  console.log('  🌙 Dark/Light theme toggle');
  console.log('  🔧 Floating toolbar');
  console.log('  📱 Responsive design');
  console.log('');
  console.log('Happy prototyping! 🚀');
  
} catch (error) {
  console.error('❌ Error creating template:', error.message);
  
  // Clean up if something went wrong
  if (fs.existsSync(targetDir)) {
    fs.removeSync(targetDir);
  }
  
  process.exit(1);
}
