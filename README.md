# 🎨 Modern 3D Resume Builder

A beautiful, modern resume builder with stunning 3D effects, glass morphism design, and professional PDF export functionality.

![Resume Builder Preview](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### 🎯 **Core Functionality**
- **Personal Information** - Complete contact details and professional summary
- **Work Experience** - Add jobs with achievements and detailed descriptions
- **Education** - Academic background with GPA and field of study
- **Skills** - Color-coded skill badges with proficiency levels
- **Additional Information** - Projects, certifications, and languages
- **Live Preview** - Real-time resume preview with professional formatting
- **PDF Export** - Download your resume as a professional PDF document

### 🎨 **3D Visual Design**
- **Animated Gradient Background** - Beautiful flowing colors
- **Glass Morphism Effects** - Translucent cards with backdrop blur
- **Floating Animations** - Elements gently float with smooth transitions
- **3D Shadows & Depth** - Realistic shadows and hover effects
- **Interactive Elements** - Cards lift, scale, and glow on hover
- **Modern Typography** - Gradient text and enhanced spacing

### 🚀 **Technical Features**
- **React 18** - Latest React with hooks and modern patterns
- **TypeScript** - Full type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework with custom components
- **Responsive Design** - Works perfectly on all devices
- **Accessibility** - ARIA labels and keyboard navigation
- **Performance Optimized** - Fast loading and smooth animations

## 🛠️ Installation

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/resume-builder.git
   cd resume-builder
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

## 📖 Usage

### Creating Your Resume

1. **Personal Information**
   - Fill in your name, contact details, and professional summary
   - Add LinkedIn and website links

2. **Work Experience**
   - Add company name, position, and dates
   - Include location and detailed description
   - Add key achievements with the dynamic achievement system

3. **Education**
   - Enter school/university details
   - Include degree, field of study, and GPA
   - Add graduation dates and location

4. **Skills**
   - Add skills with proficiency levels (Beginner, Intermediate, Advanced, Expert)
   - Skills are displayed with beautiful color-coded badges

5. **Additional Information**
   - Add projects with descriptions and technologies
   - Include certifications and languages
   - All sections are optional and customizable

### Preview and Export

1. **Live Preview**
   - Click the "Preview" button to see your resume in real-time
   - Switch between edit and preview modes seamlessly

2. **PDF Export**
   - Click "Download PDF" to generate a professional PDF
   - The PDF maintains all formatting and styling
   - File is automatically named with your name

## 🎨 Customization

### Styling
The application uses Tailwind CSS with custom components. You can customize:

- **Colors**: Modify the primary color scheme in `tailwind.config.js`
- **Animations**: Adjust timing and effects in `src/index.css`
- **Layout**: Modify component layouts in individual component files

### Adding New Sections
To add new resume sections:

1. Create a new component in `src/components/`
2. Add the section to the types in `src/types/index.ts`
3. Update the main App component to include the new section
4. Add the section to the sidebar navigation

## 🏗️ Project Structure

```
resume-builder/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── PersonalInfoForm.tsx
│   │   ├── ExperienceForm.tsx
│   │   ├── EducationForm.tsx
│   │   ├── SkillsForm.tsx
│   │   ├── AdditionalInfoForm.tsx
│   │   └── ResumePreview.tsx
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🚀 Deployment

### Building for Production

1. **Create a production build**
   ```bash
   npm run build
   ```

2. **Deploy to your preferred platform**
   - **Netlify**: Drag and drop the `build` folder
   - **Vercel**: Connect your GitHub repository
   - **GitHub Pages**: Use the `gh-pages` package
   - **Firebase**: Use Firebase Hosting

### Environment Variables
No environment variables are required for basic functionality. The application works entirely client-side.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Lucide React** - For the beautiful icons
- **html2canvas & jsPDF** - For PDF generation functionality

## 📞 Support

If you have any questions or need help:

- Create an issue on GitHub
- Check the documentation above
- Review the code comments for implementation details

---

**Made with ❤️ and React**
