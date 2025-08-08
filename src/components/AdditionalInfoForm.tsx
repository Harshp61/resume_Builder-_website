import React, { useState } from 'react';
import { Project } from '../types';
import { Plus, Trash2 } from 'lucide-react';

interface AdditionalInfoFormProps {
  projects: Project[];
  certifications: string[];
  languages: string[];
  onUpdate: (data: { projects: Project[]; certifications: string[]; languages: string[] }) => void;
}

const AdditionalInfoForm: React.FC<AdditionalInfoFormProps> = ({ 
  projects, 
  certifications, 
  languages, 
  onUpdate 
}) => {
  const [newProject, setNewProject] = useState<Partial<Project>>({
    name: '',
    description: '',
    technologies: [''],
    link: '',
    startDate: '',
    endDate: '',
  });
  const [newCertification, setNewCertification] = useState('');
  const [newLanguage, setNewLanguage] = useState('');

  const handleAddProject = () => {
    if (newProject.name && newProject.description) {
      const projectToAdd: Project = {
        id: Date.now().toString(),
        name: newProject.name!,
        description: newProject.description!,
        technologies: newProject.technologies?.filter(t => t.trim()) || [],
        link: newProject.link || '',
        startDate: newProject.startDate || '',
        endDate: newProject.endDate || '',
      };
      onUpdate({
        projects: [...projects, projectToAdd],
        certifications,
        languages,
      });
      setNewProject({
        name: '',
        description: '',
        technologies: [''],
        link: '',
        startDate: '',
        endDate: '',
      });
    }
  };

  const handleDeleteProject = (id: string) => {
    onUpdate({
      projects: projects.filter(project => project.id !== id),
      certifications,
      languages,
    });
  };

  const handleAddCertification = () => {
    if (newCertification.trim()) {
      onUpdate({
        projects,
        certifications: [...certifications, newCertification.trim()],
        languages,
      });
      setNewCertification('');
    }
  };

  const handleDeleteCertification = (index: number) => {
    onUpdate({
      projects,
      certifications: certifications.filter((_, i) => i !== index),
      languages,
    });
  };

  const handleAddLanguage = () => {
    if (newLanguage.trim()) {
      onUpdate({
        projects,
        certifications,
        languages: [...languages, newLanguage.trim()],
      });
      setNewLanguage('');
    }
  };

  const handleDeleteLanguage = (index: number) => {
    onUpdate({
      projects,
      certifications,
      languages: languages.filter((_, i) => i !== index),
    });
  };

  const handleTechnologyChange = (index: number, value: string) => {
    setNewProject(prev => ({
      ...prev,
      technologies: prev.technologies?.map((tech, i) => 
        i === index ? value : tech
      ) || [''],
    }));
  };

  const addTechnology = () => {
    setNewProject(prev => ({
      ...prev,
      technologies: [...(prev.technologies || []), ''],
    }));
  };

  const removeTechnology = (index: number) => {
    setNewProject(prev => ({
      ...prev,
      technologies: prev.technologies?.filter((_, i) => i !== index) || [],
    }));
  };

  return (
    <div className="space-y-6">
      {/* Projects */}
      <div className="card">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Projects</h2>
        
        {/* Add New Project Form */}
        <div className="border border-gray-200 rounded-lg p-4 mb-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">Add New Project</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Name *
              </label>
              <input
                type="text"
                value={newProject.name}
                onChange={(e) => setNewProject(prev => ({ ...prev, name: e.target.value }))}
                className="input-field"
                placeholder="Project Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Link
              </label>
              <input
                type="url"
                value={newProject.link}
                onChange={(e) => setNewProject(prev => ({ ...prev, link: e.target.value }))}
                className="input-field"
                placeholder="https://github.com/..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Start Date
              </label>
              <input
                type="month"
                value={newProject.startDate}
                onChange={(e) => setNewProject(prev => ({ ...prev, startDate: e.target.value }))}
                className="input-field"
                placeholder="Select start date"
                title="Select start date"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                End Date
              </label>
              <input
                type="month"
                value={newProject.endDate}
                onChange={(e) => setNewProject(prev => ({ ...prev, endDate: e.target.value }))}
                className="input-field"
                placeholder="Select end date"
                title="Select end date"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description *
            </label>
            <textarea
              value={newProject.description}
              onChange={(e) => setNewProject(prev => ({ ...prev, description: e.target.value }))}
              className="input-field h-24 resize-none"
              placeholder="Describe your project..."
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Technologies Used
            </label>
            {newProject.technologies?.map((tech, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={tech}
                  onChange={(e) => handleTechnologyChange(index, e.target.value)}
                  className="input-field flex-1"
                  placeholder="e.g., React, Node.js"
                />
                <button
                  onClick={() => removeTechnology(index)}
                  className="px-3 py-2 text-red-600 hover:text-red-800"
                  title="Remove technology"
                  aria-label="Remove technology"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
            <button
              onClick={addTechnology}
              className="text-primary-600 hover:text-primary-800 text-sm font-medium"
            >
              + Add Technology
            </button>
          </div>
          <button
            onClick={handleAddProject}
            className="btn-primary mt-4 flex items-center gap-2"
          >
            <Plus size={16} />
            Add Project
          </button>
        </div>

        {/* Projects List */}
        <div className="space-y-4">
          {projects.map((project) => (
            <div key={project.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-semibold text-lg">{project.name}</h4>
                  <p className="text-sm text-gray-500">
                    {project.startDate} - {project.endDate || 'Present'}
                  </p>
                </div>
                <button
                  onClick={() => handleDeleteProject(project.id)}
                  className="text-red-600 hover:text-red-800"
                  title="Delete project"
                  aria-label="Delete project"
                >
                  <Trash2 size={16} />
                </button>
              </div>
              <p className="text-gray-700 mb-2">{project.description}</p>
              {project.technologies.length > 0 && (
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Technologies:</strong> {project.technologies.join(', ')}
                </p>
              )}
              {project.link && (
                <a href={project.link} className="text-blue-600 hover:underline text-sm">
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="card">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Certifications</h2>
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            value={newCertification}
            onChange={(e) => setNewCertification(e.target.value)}
            className="input-field flex-1"
            placeholder="e.g., AWS Certified Solutions Architect"
          />
          <button
            onClick={handleAddCertification}
            className="btn-primary flex items-center gap-2"
          >
            <Plus size={16} />
            Add
          </button>
        </div>
        <div className="space-y-2">
          {certifications.map((cert, index) => (
            <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-700">{cert}</span>
              <button
                onClick={() => handleDeleteCertification(index)}
                className="text-red-600 hover:text-red-800"
                title="Delete certification"
                aria-label="Delete certification"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div className="card">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Languages</h2>
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            value={newLanguage}
            onChange={(e) => setNewLanguage(e.target.value)}
            className="input-field flex-1"
            placeholder="e.g., English, Spanish"
          />
          <button
            onClick={handleAddLanguage}
            className="btn-primary flex items-center gap-2"
          >
            <Plus size={16} />
            Add
          </button>
        </div>
        <div className="space-y-2">
          {languages.map((lang, index) => (
            <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-700">{lang}</span>
              <button
                onClick={() => handleDeleteLanguage(index)}
                className="text-red-600 hover:text-red-800"
                title="Delete language"
                aria-label="Delete language"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfoForm;
