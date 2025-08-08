import React, { useState } from 'react';
import { Skill } from '../types';
import { Plus, Trash2 } from 'lucide-react';

interface SkillsFormProps {
  skills: Skill[];
  onUpdate: (data: Skill[]) => void;
}

const SkillsForm: React.FC<SkillsFormProps> = ({ skills, onUpdate }) => {
  const [newSkill, setNewSkill] = useState({ name: '', level: 'intermediate' as const });

  const handleAdd = () => {
    if (newSkill.name.trim()) {
      const skillToAdd: Skill = {
        id: Date.now().toString(),
        name: newSkill.name.trim(),
        level: newSkill.level,
      };
      onUpdate([...skills, skillToAdd]);
      setNewSkill({ name: '', level: 'intermediate' });
    }
  };

  const handleDelete = (id: string) => {
    onUpdate(skills.filter(skill => skill.id !== id));
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'skill-badge beginner';
      case 'intermediate': return 'skill-badge intermediate';
      case 'advanced': return 'skill-badge advanced';
      case 'expert': return 'skill-badge expert';
      default: return 'skill-badge intermediate';
    }
  };

  return (
    <div className="floating-card">
      <div className="flex items-center gap-3 mb-8">
        <span className="text-3xl">⚡</span>
        <h2 className="section-header">Skills</h2>
      </div>
      
      {/* Add New Skill Form */}
      <div className="glass-card mb-8">
        <h3 className="text-xl font-semibold mb-6 text-gray-700 flex items-center gap-2">
          <span className="text-2xl">➕</span>
          Add New Skill
        </h3>
        <div className="flex gap-4 items-end">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Skill Name *
            </label>
            <input
              type="text"
              value={newSkill.name}
              onChange={(e) => setNewSkill(prev => ({ ...prev, name: e.target.value }))}
              className="input-field"
              placeholder="e.g., JavaScript, Project Management"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Proficiency Level
            </label>
            <select
              value={newSkill.level}
              onChange={(e) => setNewSkill(prev => ({ ...prev, level: e.target.value as any }))}
              className="input-field"
              title="Select proficiency level"
              aria-label="Select proficiency level"
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
              <option value="expert">Expert</option>
            </select>
          </div>
          <button
            onClick={handleAdd}
            className="btn-primary flex items-center gap-2"
          >
            <Plus size={16} />
            Add Skill
          </button>
        </div>
      </div>

      {/* Skills List */}
      <div className="space-y-4">
        {skills.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No skills added yet. Add your first skill above!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div key={skill.id} className="experience-card flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg mb-2">{skill.name}</h4>
                  <span className={`${getLevelColor(skill.level)}`}>
                    {skill.level.charAt(0).toUpperCase() + skill.level.slice(1)}
                  </span>
                </div>
                <button
                  onClick={() => handleDelete(skill.id)}
                  className="remove-button"
                  title="Delete skill"
                  aria-label="Delete skill"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillsForm;
