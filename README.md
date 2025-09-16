# Modern Portfolio Website

A stunning, fully responsive personal portfolio website built with React, TailwindCSS, and Framer Motion. Features smooth animations, dark mode, and modern UI/UX design.

## ✨ Features

- **Modern Design**: Clean, professional aesthetic with glass morphism effects
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Interactive Components**: Hover effects, scroll animations, and micro-interactions
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Filterable project gallery with live demos
- **Performance Optimized**: Fast loading with modern web technologies

## 🚀 Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Form Handling**: EmailJS (ready to integrate)
- **Build Tool**: Vite
- **Package Manager**: npm/yarn

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🛠️ Customization

### Personal Information
Update the following files with your information:
- `src/components/Hero.jsx` - Name, title, description
- `src/components/About.jsx` - Skills, experience, bio
- `src/components/Projects.jsx` - Your projects data
- `src/components/Contact.jsx` - Contact information

### Styling
- Colors: Modify `tailwind.config.js` for custom color schemes
- Animations: Adjust animations in component files or `tailwind.config.js`
- Fonts: Update Google Fonts in `index.html`

### Email Integration
To enable the contact form:
1. Sign up for [EmailJS](https://www.emailjs.com/)
2. Get your service ID, template ID, and public key
3. Update the form submission logic in `Contact.jsx`

## 📁 Project Structure

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Components Overview

- **Navbar**: Sticky navigation with smooth scroll and mobile menu
- **Hero**: Eye-catching landing section with animated elements
- **About**: Skills showcase with progress bars and statistics
- **Projects**: Filterable project gallery with hover effects
- **Contact**: Functional contact form with validation
- **Footer**: Links, social media, and additional information

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with automatic builds

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons by [Lucide](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Styling with [TailwindCSS](https://tailwindcss.com/)

---

**Made with ❤️ and lots of ☕**