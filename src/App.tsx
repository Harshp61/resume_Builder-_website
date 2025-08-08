import React, { useState, useRef } from 'react';
import { ResumeData } from './types';
import PersonalInfoForm from './components/PersonalInfoForm';
import ExperienceForm from './components/ExperienceForm';
import EducationForm from './components/EducationForm';
import SkillsForm from './components/SkillsForm';
import AdditionalInfoForm from './components/AdditionalInfoForm';
import ResumePreview from './components/ResumePreview';
import { Download, Eye, Edit3 } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const App: React.FC = () => {
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      linkedin: '',
      website: '',
      summary: '',
    },
    education: [],
    experience: [],
    skills: [],
    projects: [],
    certifications: [],
    languages: [],
  });

  const [activeTab, setActiveTab] = useState('personal');
  const [showPreview, setShowPreview] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  const tabs = [
    { id: 'personal', label: 'Personal Info', icon: '👤' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'additional', label: 'Additional', icon: '➕' },
  ];

  const handleDownloadPDF = async () => {
    if (resumeRef.current) {
      try {
        const canvas = await html2canvas(resumeRef.current, {
          scale: 2,
          useCORS: true,
          allowTaint: true,
        });
        
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 210;
        const pageHeight = 295;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;

        let position = 0;

        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        pdf.save(`${resumeData.personalInfo.firstName}_${resumeData.personalInfo.lastName}_Resume.pdf`);
      } catch (error) {
        console.error('Error generating PDF:', error);
        alert('Error generating PDF. Please try again.');
      }
    }
  };

  const updateResumeData = (section: keyof ResumeData, data: any) => {
    setResumeData(prev => ({
      ...prev,
      [section]: data,
    }));
  };

  const updateAdditionalInfo = (data: { projects: any[]; certifications: string[]; languages: string[] }) => {
    setResumeData(prev => ({
      ...prev,
      projects: data.projects,
      certifications: data.certifications,
      languages: data.languages,
    }));
  };

  return (
    <div className="min-h-screen animated-bg">
      <header className="glass-card border-b-0 rounded-b-3xl mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-8">
            <div className="floating">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">Resume Builder</h1>
              <p className="text-white/80 mt-2 text-lg">Create your professional resume</p>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="btn-secondary glow"
              >
                {showPreview ? <Edit3 size={18} /> : <Eye size={18} />}
                {showPreview ? 'Edit' : 'Preview'}
              </button>
              <button
                onClick={handleDownloadPDF}
                className="btn-primary glow"
              >
                <Download size={18} />
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {showPreview ? (
          /* Preview Mode */
          <div className="space-y-8">
            <div className="text-center floating">
              <h2 className="section-header text-white">Resume Preview</h2>
              <p className="text-white/80 text-xl">Review your resume before downloading</p>
            </div>
            <div className="floating-card">
              <ResumePreview ref={resumeRef} data={resumeData} />
            </div>
          </div>
        ) : (
          /* Edit Mode */
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sidebar-card">
                <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <span className="text-2xl">📋</span>
                  Sections
                </h2>
                <nav className="space-y-3">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`tab-button ${
                        activeTab === tab.id ? 'active' : 'inactive'
                      }`}
                    >
                      <span className="text-xl">{tab.icon}</span>
                      <span className="font-semibold">{tab.label}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {activeTab === 'personal' && (
                <PersonalInfoForm
                  personalInfo={resumeData.personalInfo}
                  onUpdate={(data) => updateResumeData('personalInfo', data)}
                />
              )}
              
              {activeTab === 'experience' && (
                <ExperienceForm
                  experience={resumeData.experience}
                  onUpdate={(data) => updateResumeData('experience', data)}
                />
              )}
              
              {activeTab === 'education' && (
                <EducationForm
                  education={resumeData.education}
                  onUpdate={(data) => updateResumeData('education', data)}
                />
              )}
              
              {activeTab === 'skills' && (
                <SkillsForm
                  skills={resumeData.skills}
                  onUpdate={(data) => updateResumeData('skills', data)}
                />
              )}
              
              {activeTab === 'additional' && (
                <AdditionalInfoForm
                  projects={resumeData.projects}
                  certifications={resumeData.certifications}
                  languages={resumeData.languages}
                  onUpdate={updateAdditionalInfo}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
