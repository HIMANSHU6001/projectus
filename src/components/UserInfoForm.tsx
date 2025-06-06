import React, { useState } from 'react';
import { ChevronDown, Briefcase } from 'lucide-react';

interface FormData {
  professions: string[];
}

interface UserInfoFormProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
}

const professionOptions = [
  'Laboratory Diagnostics Technician',
  'Toy & Game Designer',
  'Art Installation Artist',
  'Prop Maker',
  'Educational Robotics Trainer',
  'Student Engineering Project Advisor',
  'Correctional Facility Security Manager',
  'Gym Equipment Designer',
  'Outdoor Adventure Gear Innovator',
  'Biomedical Robotics Engineer',
  'Urban Air Quality Monitoring Specialist',
  'Security Companies',
  'Event Managers',
  'Smart City Planners',
  'School Administrators',
  'Teachers/Professors',
  'Research Labs',
  'Farmers',
  'Agritech Startups',
  'Product Designers',
  'Manufacturing Units',
  'Medical Device Makers'
];

const UserInfoForm: React.FC<UserInfoFormProps> = ({
  formData,
  updateFormData,
  onNext
}) => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (formData.professions.length === 0) {
      newErrors.professions = 'At least one profession must be selected to continue';
    } else if (formData.professions.length > 5) {
      newErrors.professions = 'Please select no more than 5 professions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onNext();
    } else {
      // Scroll to the error message
      const errorElement = document.querySelector('.text-red-500');
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  const filteredProfessions = professionOptions.filter(profession =>
    profession.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleProfessionToggle = (profession: string) => {
    const newProfessions = formData.professions.includes(profession)
      ? formData.professions.filter(p => p !== profession)
      : [...formData.professions, profession];
    
    updateFormData({ professions: newProfessions });
  };

  const isFormValid = formData.professions.length > 0;

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Select Your Profession
        </h2>
        <p className="text-gray-600">
          Choose your profession(s) to get personalized project recommendations
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Profession Field */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <Briefcase className="w-4 h-4 mr-2" />
            Profession(s)
          </label>
          <div className="relative">
            <div
              className={`w-full px-4 py-3 border rounded-lg cursor-pointer transition-all duration-200 ${
                errors.professions ? 'border-red-500' : 'border-gray-300'
              }`}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <div className="flex items-center justify-between">
                <span className={formData.professions.length > 0 ? 'text-gray-900' : 'text-gray-700'}>
                  {formData.professions.length > 0
                    ? `${formData.professions.length} profession(s) selected`
                    : 'Select your profession(s)'}
                </span>
                <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </div>
            </div>

            {isDropdownOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-64 overflow-hidden">
                <div className="p-3 border-b">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search professions..."
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div className="max-h-48 overflow-y-auto">
                  {filteredProfessions.map((profession) => (
                    <div
                      key={profession}
                      className="flex items-center px-3 py-2 hover:bg-gray-50 cursor-pointer"
                      onClick={() => handleProfessionToggle(profession)}
                    >
                      <input
                        type="checkbox"
                        checked={formData.professions.includes(profession)}
                        onChange={() => {}}
                        className="mr-3 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="text-sm text-gray-700">{profession}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {formData.professions.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {formData.professions.map((profession) => (
                <span
                  key={profession}
                  className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full"
                >
                  {profession}
                  <button
                    type="button"
                    onClick={() => handleProfessionToggle(profession)}
                    className="ml-2 text-purple-600 hover:text-purple-800"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}

          {errors.professions && (
            <p className="text-red-500 text-sm">{errors.professions}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-6">
          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
              isFormValid
                ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Next: View Project Ideas
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserInfoForm;
