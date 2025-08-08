import React, { forwardRef } from 'react';
import { ResumeData } from '../types';

interface ResumePreviewProps {
  data: ResumeData;
}

const ResumePreview = forwardRef<HTMLDivElement, ResumePreviewProps>(({ data }, ref) => {
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  const getFullAddress = () => {
    const parts = [data.personalInfo.address, data.personalInfo.city, data.personalInfo.state, data.personalInfo.zipCode];
    return parts.filter(Boolean).join(', ');
  };

  return (
    <div ref={ref} className="bg-white shadow-lg max-w-4xl mx-auto p-8 font-sans">
      {/* Header */}
      <div className="border-b-2 border-gray-300 pb-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {data.personalInfo.firstName} {data.personalInfo.lastName}
        </h1>
        <div className="text-gray-600 space-y-1">
          {data.personalInfo.email && <p>{data.personalInfo.email}</p>}
          {data.personalInfo.phone && <p>{data.personalInfo.phone}</p>}
          {getFullAddress() && <p>{getFullAddress()}</p>}
          <div className="flex gap-4 mt-2">
            {data.personalInfo.linkedin && (
              <a href={data.personalInfo.linkedin} className="text-blue-600 hover:underline">
                LinkedIn
              </a>
            )}
            {data.personalInfo.website && (
              <a href={data.personalInfo.website} className="text-blue-600 hover:underline">
                Website
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Summary */}
      {data.personalInfo.summary && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Professional Summary</h2>
          <p className="text-gray-700 leading-relaxed">{data.personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Professional Experience</h2>
          <div className="space-y-4">
            {data.experience.map((exp) => (
              <div key={exp.id} className="border-l-4 border-gray-300 pl-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">{exp.position}</h3>
                  <span className="text-sm text-gray-600">
                    {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : 'Present'}
                  </span>
                </div>
                <p className="text-gray-600 font-medium mb-1">{exp.company}</p>
                {exp.location && <p className="text-sm text-gray-500 mb-2">{exp.location}</p>}
                {exp.description && (
                  <p className="text-gray-700 mb-2 leading-relaxed">{exp.description}</p>
                )}
                {exp.achievements.length > 0 && (
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {exp.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Education</h2>
          <div className="space-y-4">
            {data.education.map((edu) => (
              <div key={edu.id} className="border-l-4 border-gray-300 pl-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">{edu.degree}</h3>
                  <span className="text-sm text-gray-600">
                    {formatDate(edu.startDate)} - {edu.endDate ? formatDate(edu.endDate) : 'Present'}
                  </span>
                </div>
                <p className="text-gray-600 font-medium mb-1">{edu.school}</p>
                {edu.field && <p className="text-gray-600 mb-1">{edu.field}</p>}
                <div className="flex gap-4 text-sm text-gray-500">
                  {edu.location && <span>{edu.location}</span>}
                  {edu.gpa && <span>GPA: {edu.gpa}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {data.skills.map((skill) => (
              <div key={skill.id} className="flex justify-between items-center">
                <span className="text-gray-700">{skill.name}</span>
                <span className="text-sm text-gray-500 capitalize">({skill.level})</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {data.projects.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Projects</h2>
          <div className="space-y-4">
            {data.projects.map((project) => (
              <div key={project.id} className="border-l-4 border-gray-300 pl-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">{project.name}</h3>
                  <span className="text-sm text-gray-600">
                    {formatDate(project.startDate)} - {project.endDate ? formatDate(project.endDate) : 'Present'}
                  </span>
                </div>
                <p className="text-gray-700 mb-2 leading-relaxed">{project.description}</p>
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
      )}

      {/* Certifications */}
      {data.certifications.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Certifications</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {data.certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Languages */}
      {data.languages.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Languages</h2>
          <p className="text-gray-700">{data.languages.join(', ')}</p>
        </div>
      )}
    </div>
  );
});

ResumePreview.displayName = 'ResumePreview';

export default ResumePreview;
