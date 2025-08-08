import React, { useState } from 'react';
import { Education } from '../types';
import { Plus, Trash2 } from 'lucide-react';

interface EducationFormProps {
  education: Education[];
  onUpdate: (data: Education[]) => void;
}

const EducationForm: React.FC<EducationFormProps> = ({ education, onUpdate }) => {
  const [newEducation, setNewEducation] = useState<Partial<Education>>({
    school: '',
    degree: '',
    field: '',
    startDate: '',
    endDate: '',
    gpa: '',
    location: '',
  });

  const handleAdd = () => {
    if (newEducation.school && newEducation.degree) {
      const educationToAdd: Education = {
        id: Date.now().toString(),
        school: newEducation.school!,
        degree: newEducation.degree!,
        field: newEducation.field || '',
        startDate: newEducation.startDate || '',
        endDate: newEducation.endDate || '',
        gpa: newEducation.gpa || '',
        location: newEducation.location || '',
      };
      onUpdate([...education, educationToAdd]);
      setNewEducation({
        school: '',
        degree: '',
        field: '',
        startDate: '',
        endDate: '',
        gpa: '',
        location: '',
      });
    }
  };

  const handleDelete = (id: string) => {
    onUpdate(education.filter(edu => edu.id !== id));
  };

  return (
    <div className="card">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Education</h2>
      
      {/* Add New Education Form */}
      <div className="border border-gray-200 rounded-lg p-4 mb-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Add New Education</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              School/University *
            </label>
            <input
              type="text"
              value={newEducation.school}
              onChange={(e) => setNewEducation(prev => ({ ...prev, school: e.target.value }))}
              className="input-field"
              placeholder="University Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Degree *
            </label>
            <input
              type="text"
              value={newEducation.degree}
              onChange={(e) => setNewEducation(prev => ({ ...prev, degree: e.target.value }))}
              className="input-field"
              placeholder="Bachelor's, Master's, etc."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Field of Study
            </label>
            <input
              type="text"
              value={newEducation.field}
              onChange={(e) => setNewEducation(prev => ({ ...prev, field: e.target.value }))}
              className="input-field"
              placeholder="Computer Science, Business, etc."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <input
              type="text"
              value={newEducation.location}
              onChange={(e) => setNewEducation(prev => ({ ...prev, location: e.target.value }))}
              className="input-field"
              placeholder="City, State"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Start Date
            </label>
            <input
              type="month"
              value={newEducation.startDate}
              onChange={(e) => setNewEducation(prev => ({ ...prev, startDate: e.target.value }))}
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
              value={newEducation.endDate}
              onChange={(e) => setNewEducation(prev => ({ ...prev, endDate: e.target.value }))}
              className="input-field"
              placeholder="Select end date"
              title="Select end date"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              GPA
            </label>
            <input
              type="text"
              value={newEducation.gpa}
              onChange={(e) => setNewEducation(prev => ({ ...prev, gpa: e.target.value }))}
              className="input-field"
              placeholder="3.8/4.0"
            />
          </div>
        </div>
        <button
          onClick={handleAdd}
          className="btn-primary mt-4 flex items-center gap-2"
        >
          <Plus size={16} />
          Add Education
        </button>
      </div>

      {/* Existing Education List */}
      <div className="space-y-4">
        {education.map((edu) => (
          <div key={edu.id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="font-semibold text-lg">{edu.degree}</h4>
                <p className="text-gray-600">{edu.school}</p>
                {edu.field && <p className="text-gray-600">{edu.field}</p>}
                <p className="text-sm text-gray-500">
                  {edu.startDate} - {edu.endDate || 'Present'} • {edu.location}
                </p>
                {edu.gpa && <p className="text-sm text-gray-500">GPA: {edu.gpa}</p>}
              </div>
              <button
                onClick={() => handleDelete(edu.id)}
                className="text-red-600 hover:text-red-800"
                title="Delete education"
                aria-label="Delete education"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationForm;
