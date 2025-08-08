import React, { useState } from 'react';
import { Experience } from '../types';
import { Plus, Trash2, Edit } from 'lucide-react';

interface ExperienceFormProps {
  experience: Experience[];
  onUpdate: (data: Experience[]) => void;
}

const ExperienceForm: React.FC<ExperienceFormProps> = ({ experience, onUpdate }) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newExperience, setNewExperience] = useState<Partial<Experience>>({
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    location: '',
    description: '',
    achievements: [''],
  });

  const handleAdd = () => {
    if (newExperience.company && newExperience.position) {
      const experienceToAdd: Experience = {
        id: Date.now().toString(),
        company: newExperience.company!,
        position: newExperience.position!,
        startDate: newExperience.startDate || '',
        endDate: newExperience.endDate || '',
        location: newExperience.location || '',
        description: newExperience.description || '',
        achievements: newExperience.achievements?.filter(a => a.trim()) || [],
      };
      onUpdate([...experience, experienceToAdd]);
      setNewExperience({
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        location: '',
        description: '',
        achievements: [''],
      });
    }
  };



  const handleDelete = (id: string) => {
    onUpdate(experience.filter(exp => exp.id !== id));
  };

  const handleAchievementChange = (index: number, value: string) => {
    setNewExperience(prev => ({
      ...prev,
      achievements: prev.achievements?.map((achievement, i) => 
        i === index ? value : achievement
      ) || [''],
    }));
  };

  const addAchievement = () => {
    setNewExperience(prev => ({
      ...prev,
      achievements: [...(prev.achievements || []), ''],
    }));
  };

  const removeAchievement = (index: number) => {
    setNewExperience(prev => ({
      ...prev,
      achievements: prev.achievements?.filter((_, i) => i !== index) || [],
    }));
  };

  return (
    <div className="floating-card">
      <div className="flex items-center gap-3 mb-8">
        <span className="text-3xl">💼</span>
        <h2 className="section-header">Work Experience</h2>
      </div>
      
      {/* Add New Experience Form */}
      <div className="glass-card mb-8">
        <h3 className="text-xl font-semibold mb-6 text-gray-700 flex items-center gap-2">
          <span className="text-2xl">➕</span>
          Add New Experience
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company *
            </label>
            <input
              type="text"
              value={newExperience.company}
              onChange={(e) => setNewExperience(prev => ({ ...prev, company: e.target.value }))}
              className="input-field"
              placeholder="Company Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Position *
            </label>
            <input
              type="text"
              value={newExperience.position}
              onChange={(e) => setNewExperience(prev => ({ ...prev, position: e.target.value }))}
              className="input-field"
              placeholder="Job Title"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Start Date
            </label>
            <input
              type="month"
              value={newExperience.startDate}
              onChange={(e) => setNewExperience(prev => ({ ...prev, startDate: e.target.value }))}
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
              value={newExperience.endDate}
              onChange={(e) => setNewExperience(prev => ({ ...prev, endDate: e.target.value }))}
              className="input-field"
              placeholder="Select end date"
              title="Select end date"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <input
              type="text"
              value={newExperience.location}
              onChange={(e) => setNewExperience(prev => ({ ...prev, location: e.target.value }))}
              className="input-field"
              placeholder="City, State"
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            value={newExperience.description}
            onChange={(e) => setNewExperience(prev => ({ ...prev, description: e.target.value }))}
            className="input-field h-24 resize-none"
            placeholder="Brief description of your role and responsibilities..."
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Key Achievements
          </label>
          {newExperience.achievements?.map((achievement, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                value={achievement}
                onChange={(e) => handleAchievementChange(index, e.target.value)}
                className="input-field flex-1"
                placeholder="Describe a key achievement..."
              />
              <button
                onClick={() => removeAchievement(index)}
                className="px-3 py-2 text-red-600 hover:text-red-800"
                title="Remove achievement"
                aria-label="Remove achievement"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
          <button
            onClick={addAchievement}
            className="text-primary-600 hover:text-primary-800 text-sm font-medium"
          >
            + Add Achievement
          </button>
        </div>
        <button
          onClick={handleAdd}
          className="btn-primary mt-4 flex items-center gap-2"
        >
          <Plus size={16} />
          Add Experience
        </button>
      </div>

      {/* Existing Experience List */}
      <div className="space-y-4">
        {experience.map((exp) => (
          <div key={exp.id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="font-semibold text-lg">{exp.position}</h4>
                <p className="text-gray-600">{exp.company}</p>
                <p className="text-sm text-gray-500">
                  {exp.startDate} - {exp.endDate || 'Present'} • {exp.location}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setEditingId(editingId === exp.id ? null : exp.id)}
                  className="text-blue-600 hover:text-blue-800"
                  title="Edit experience"
                  aria-label="Edit experience"
                >
                  <Edit size={16} />
                </button>
                <button
                  onClick={() => handleDelete(exp.id)}
                  className="text-red-600 hover:text-red-800"
                  title="Delete experience"
                  aria-label="Delete experience"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
            {exp.description && (
              <p className="text-gray-700 mb-3">{exp.description}</p>
            )}
            {exp.achievements.length > 0 && (
              <div>
                <h5 className="font-medium text-gray-700 mb-2">Key Achievements:</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {exp.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceForm;
