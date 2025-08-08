import React from 'react';
import { PersonalInfo } from '../types';

interface PersonalInfoFormProps {
  personalInfo: PersonalInfo;
  onUpdate: (data: PersonalInfo) => void;
}

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({ personalInfo, onUpdate }) => {
  const handleChange = (field: keyof PersonalInfo, value: string) => {
    onUpdate({
      ...personalInfo,
      [field]: value,
    });
  };

  return (
    <div className="floating-card">
      <div className="flex items-center gap-3 mb-8">
        <span className="text-3xl">👤</span>
        <h2 className="section-header">Personal Information</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-group">
          <label className="form-label">First Name *</label>
          <input
            type="text"
            value={personalInfo.firstName}
            onChange={(e) => handleChange('firstName', e.target.value)}
            className="input-field"
            placeholder="John"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Last Name *</label>
          <input
            type="text"
            value={personalInfo.lastName}
            onChange={(e) => handleChange('lastName', e.target.value)}
            className="input-field"
            placeholder="Doe"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Email *</label>
          <input
            type="email"
            value={personalInfo.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="input-field"
            placeholder="john.doe@email.com"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Phone *</label>
          <input
            type="tel"
            value={personalInfo.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className="input-field"
            placeholder="(555) 123-4567"
          />
        </div>
        <div className="form-group md:col-span-2">
          <label className="form-label">Address</label>
          <input
            type="text"
            value={personalInfo.address}
            onChange={(e) => handleChange('address', e.target.value)}
            className="input-field"
            placeholder="123 Main Street"
          />
        </div>
        <div className="form-group">
          <label className="form-label">City</label>
          <input
            type="text"
            value={personalInfo.city}
            onChange={(e) => handleChange('city', e.target.value)}
            className="input-field"
            placeholder="New York"
          />
        </div>
        <div className="form-group">
          <label className="form-label">State</label>
          <input
            type="text"
            value={personalInfo.state}
            onChange={(e) => handleChange('state', e.target.value)}
            className="input-field"
            placeholder="NY"
          />
        </div>
        <div className="form-group">
          <label className="form-label">ZIP Code</label>
          <input
            type="text"
            value={personalInfo.zipCode}
            onChange={(e) => handleChange('zipCode', e.target.value)}
            className="input-field"
            placeholder="10001"
          />
        </div>
        <div className="form-group">
          <label className="form-label">LinkedIn</label>
          <input
            type="url"
            value={personalInfo.linkedin}
            onChange={(e) => handleChange('linkedin', e.target.value)}
            className="input-field"
            placeholder="https://linkedin.com/in/johndoe"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Website</label>
          <input
            type="url"
            value={personalInfo.website}
            onChange={(e) => handleChange('website', e.target.value)}
            className="input-field"
            placeholder="https://johndoe.com"
          />
        </div>
        <div className="form-group md:col-span-2">
          <label className="form-label">Professional Summary</label>
          <textarea
            value={personalInfo.summary}
            onChange={(e) => handleChange('summary', e.target.value)}
            className="input-field h-32 resize-none"
            placeholder="A brief summary of your professional background, skills, and career objectives..."
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
