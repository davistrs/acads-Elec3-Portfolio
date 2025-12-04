# Cloud Computing Portfolio 🌐

A modern portfolio showcasing cloud computing and DevOps projects built with Qwik, featuring interactive project cards, journey reflections, and comprehensive documentation.

## 📋 Features

- **Interactive Project Gallery**: Browse through 7 cloud computing assignments with visual indicators for PDF docs, live demos, and local projects
- **Journey Map**: A reflective timeline of learning experiences from AWS to Kubernetes
- **Modern UI**: Built with Qwik and Tailwind CSS v4, featuring glassmorphism, animations, and responsive design
- **GitHub Pages Deployment**: Automated CI/CD via GitHub Actions

## 🛠️ Tech Stack

- **Framework**: [Qwik](https://qwik.dev/) - Resumable framework for instant-loading web apps
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework
- **Deployment**: GitHub Pages with Static Site Generation
- **CI/CD**: GitHub Actions

## 📁 Project Structure

```
├── public/               # Static assets (images, PDFs, icons)
│   ├── card-img/        # Project card images
│   └── files/           # PDF documentation
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── footer/
│   │   ├── header/
│   │   ├── home/        # Project gallery components
│   │   ├── project-card/
│   │   ├── project-modal/
│   │   └── reflection/  # Journey map and intro sections
│   ├── data/            # Project data and configuration
│   │   └── projects.tsx # Project definitions
│   └── routes/          # Page routes
│       ├── index.tsx    # Home page
│       └── reflection/  # Reflection page
└── .github/
    └── workflows/
        └── static.yml   # GitHub Pages deployment workflow
```

## 🎯 Projects Featured

1. **Spring Boot RESTful Web Services** - User Management API with MySQL
2. **AWS Deployment Guide** - EC2, S3, and RDS integration
3. **Docker & Containerization** - Two-week learning curriculum
4. **Docker Image Deployment** - Hands-on containerization lab
5. **Virtualization vs. Containerization** - Research narrative report
6. **Kubernetes Home Lab** - Minikube orchestration with WordPress & MySQL
7. **Terraform Survivor** - IaC-controlled survival game

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17.0+ or 20.3.0+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/mark-siazon/acads-Portfolio.git
cd acads-Portfolio

# Install dependencies
npm install
```

### Development

```bash
# Start development server with SSR
npm run dev

# Or open automatically in browser
npm start
```

The dev server will be available at `http://localhost:5173`

### Build

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## 🌐 Deployment

This project is configured for automatic deployment to GitHub Pages.

### Setup GitHub Pages

1. Push your code to GitHub
2. Go to **Settings** > **Pages**
3. Under **Build and deployment** > **Source**, select **GitHub Actions**
4. The workflow will automatically build and deploy on every push to `main`

### Manual Deployment

```bash
# Build the static site
npm run build

# The output will be in the `dist/` directory
```

## 🎨 Customization

### Adding Projects

Edit `src/data/projects.tsx` to add or modify projects:

```tsx
{
  title: 'Your Project',
  description: 'Short description',
  tags: ['Tag1', 'Tag2'],
  pdf: '/files/your-doc.pdf',      // Optional
  demo: 'https://demo-url.com',    // Optional
  github: 'https://github.com/...',// Optional
  local: true,                      // Optional
  image: '/card-img/your-img.webp',
  fullDescription: `Detailed description...`
}
```

### Updating Reflections

Modify `src/components/reflection/journey-map.tsx` to update the learning journey timeline.

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run fmt` - Format code with Prettier

## 🤝 Contributing

This is a personal portfolio project, but feel free to fork and adapt it for your own use!

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- **Prof. Nino Narido** - For guidance in cloud computing and orchestration
- **Qwik Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS framework

---

Built with ⚡ by [Mark Angelo Siazon](https://github.com/mark-siazon)
