# 🚀 DevTools

> **A comprehensive dark-mode developer tools collection for everyday productivity**

## 🌟 Overview

DevTools is a modern, dark-themed web application that brings together essential developer tools in one convenient location. Built with React, TypeScript, and Tailwind CSS, it provides a seamless dark-mode experience for all the utilities developers use daily.

**Why DevTools?** Most online developer tools lack proper dark mode support or have inconsistent UI/UX. This project solves that by providing a unified, beautiful dark interface for all your daily development needs.

## ✨ Features

### 🔧 Current Tools

| Tool | Description | Status |
|------|-------------|--------|
| **JSON Formatter** | Format, minify, and validate JSON with syntax highlighting | ✅ Complete |
| **File Diff Checker** | Side-by-side file comparison with Git-style diff highlighting | ✅ Complete |
| **Git Commands Reference** | Comprehensive Git command cheatsheet with copy functionality | ✅ Complete |
| **Linux Commands Reference** | Essential Linux commands with descriptions and examples | ✅ Complete |
| **Linux Shortcuts** | Keyboard shortcuts for various Linux desktop environments | ✅ Complete |
| **Code Snippets Manager** | Save and manage your frequently used code snippets | 🚧 In Progress |

### 🎨 Design Features

- **🌙 Full Dark Mode**: Consistent dark theme across all tools
- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and builds
- **🎯 User-Friendly**: Intuitive interface with smooth animations and transitions
- **💾 Local Storage**: Your data stays private and persists locally

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/devtools.git

# Navigate to project directory
cd devtools-portal

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `https://devtools-portal.onrender.com` to see the application running.

### Build for Production

```bash
# Build the project
npm run build

# Preview the build
npm run preview
```

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Code Editor**: Monaco Editor (VS Code editor)
- **Diff Engine**: diff.js library
- **Build Tool**: Vite
- **Package Manager**: npm

## 📁 Project Structure

```
devtools-portal/
├── src/
│   ├── pages/           # Individual tool components
│   │   ├── JSONFormatter.tsx
│   │   ├── DiffChecker.tsx
│   │   ├── GitCommands.tsx
│   │   ├── LinuxCommands.tsx
│   │   ├── LinuxShortcuts.tsx
│   │   └── Snippets.tsx
│   ├── App.tsx          # Main app component with routing
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── package.json         # Dependencies and scripts
└── README.md           # Project documentation
```

## 🎯 Usage Guide

### JSON Formatter
- Paste your JSON in the left panel
- Click "Format JSON" for pretty-printing
- Click "Minify JSON" to compress
- Click "Copy" to copy the result

### File Diff Checker
- Enter original content in the left textarea
- Enter modified content in the right textarea
- Click "Compare Files" to see side-by-side diff
- Differences are highlighted in red (removed) and green (added)

### Git Commands Reference
- Browse categorized Git commands
- Click any command to copy it to clipboard
- Includes setup, branching, merging, and advanced operations

### Linux Commands & Shortcuts
- Comprehensive reference for Linux commands
- Keyboard shortcuts for different desktop environments
- Copy commands with a single click

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### 🎯 Wanted Features

- **Text Encoder/Decoder** (Base64, URL encoding, etc.)
- **Hash Generator** (MD5, SHA-1, SHA-256)
- **QR Code Generator**
- **Color Palette Generator**
- **Regex Tester**
- **Markdown Preview**
- **SQL Formatter**
- **CSV to JSON Converter**
- **Image Optimizer**
- **Password Generator**

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-tool`
3. **Follow the existing code style** (React + TypeScript + Tailwind)
4. **Ensure dark mode compatibility**
5. **Add your tool to the navigation** in `App.tsx`
6. **Test thoroughly**
7. **Submit a pull request**

### Code Style Guidelines

- Use TypeScript for type safety
- Follow React functional components with hooks
- Use Tailwind CSS for styling
- Maintain consistent dark theme colors:
  - Background: `bg-[#0b1220]`
  - Cards: `bg-[#101828]`
  - Borders: `border-gray-700`
  - Text: `text-gray-100`
  - Accent: `text-[#f0f174]`

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Monaco Editor** for the excellent code editor component
- **Tailwind CSS** for the utility-first CSS framework
- **React Router** for seamless navigation
- **Vite** for the blazing-fast build tool

## 📞 Support

If you find this project helpful, please consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs via GitHub issues
- 💡 Suggesting new features
- 🤝 Contributing code or documentation

---

**Made with ❤️ for the developer community**

*"Because every developer deserves beautiful, dark-mode tools"*