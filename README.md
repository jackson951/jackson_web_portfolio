# Jackson Khuto - Portfolio Website

A modern, cyberpunk-themed portfolio website built with React, TypeScript, and Vite.

## 🚀 Features

- **Modern Design**: Cyberpunk aesthetic with neon colors and futuristic styling
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with Vite for fast development and production builds
- **TypeScript**: Full TypeScript support for better development experience
- **Animation**: Smooth animations using Framer Motion
- **Contact Form**: Backend server for handling contact form submissions

## 🛠 Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Styled Components, CSS-in-JS
- **Animation**: Framer Motion
- **Routing**: React Router DOM
- **Backend**: Node.js, Express, Nodemailer
- **Deployment**: GitHub Pages (Frontend), GitHub Actions

## 📦 Installation

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn

### Frontend Setup
```bash
# Clone the repository
git clone https://github.com/your-username/portfolio-website.git
cd portfolio-website

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Backend Setup
```bash
# Navigate to server directory
cd server

# Install server dependencies
npm install

# Create .env file with your SMTP credentials
# See server/.env.example for reference

# Start server
npm run dev
```

## 🚀 Deployment to GitHub Pages

### Automatic Deployment
1. Push your code to GitHub
2. Go to repository **Settings** → **Pages**
3. Select **GitHub Actions** as source
4. Deployments happen automatically on push to main/master

### Manual Deployment
```bash
# Build the project
npm run build

# The /dist folder contains the production build
# Upload this to your hosting provider
```

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── components/          # React components
│   ├── pages/              # Page components
│   ├── data/               # Static data (projects, skills)
│   ├── styles/             # Global styles
│   ├── utils/              # Utility functions
│   └── App.tsx             # Main app component
├── server/                 # Backend server
│   ├── server.js          # Express server
│   ├── package.json       # Server dependencies
│   └── .env              # Environment variables
├── .github/workflows/     # GitHub Actions workflows
├── public/               # Static assets
└── vite.config.ts        # Vite configuration
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the server directory:
```env
NODE_ENV=development
PORT=3001
MAIL_USERNAME=your-email@gmail.com
MAIL_PASSWORD=your-app-password
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_SECURE=false
```

### Vite Configuration
The `vite.config.ts` is pre-configured for GitHub Pages deployment:
- Base URL set to `/` for GitHub Pages
- Code splitting for performance
- Source maps for debugging

## 🎨 Customization

### Colors and Theme
Edit the theme variables in `src/utils/theme.ts`:
```typescript
export const theme = {
  colors: {
    primary: '#00f5ff',
    secondary: '#ff00ff',
    background: '#0f172a',
    // ...
  }
}
```

### Content
Update the data files in `src/data/`:
- `skills.ts` - Skills and technologies
- `projects.ts` - Project portfolio

## 📞 Contact Form

The contact form sends emails via SMTP. To configure:

1. Set up SMTP credentials in `.env`
2. For Gmail, use App Passwords (not regular password)
3. Enable "Less secure app access" or use OAuth2

## 🚨 Troubleshooting

### Build Issues
- Ensure Node.js version is 18+
- Clear npm cache: `npm cache clean --force`
- Reinstall dependencies: `rm -rf node_modules package-lock.json && npm install`

### GitHub Pages Issues
- Check that the workflow runs successfully
- Verify the base URL in `vite.config.ts`
- Ensure the `dist` folder is being uploaded

### Contact Form Issues
- Verify SMTP credentials
- Check firewall settings
- Test with different email providers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Support

If you find this project helpful, consider:
- ⭐ Starring this repository
- 🐛 Reporting issues
- 💡 Suggesting features
- 🔧 Contributing code

---

**Built with ❤️ using React and TypeScript**

For more information, visit [jacksonkhuto.dev](https://jacksonkhuto.dev)"# Force commit to trigger GitHub Actions"  
