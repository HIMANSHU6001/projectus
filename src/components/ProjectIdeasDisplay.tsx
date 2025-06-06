import React, {useState} from 'react';
import {ChevronLeft, ChevronRight, Minus, Plus} from 'lucide-react';
import {getProjectIdeasForProfessions} from '@/data/projectIdeas';
import Image from "next/image";

interface FormData {
    professions: string[];
    selectedProjects: string[];
    noneSelected: boolean;
}

interface ProjectIdeasDisplayProps {
    formData: FormData;
    updateFormData: (data: Partial<FormData>) => void;
    onNext: () => void;
    onPrev: () => void;
}

const ProjectIdeasDisplay: React.FC<ProjectIdeasDisplayProps> = ({
                                                                     formData,
                                                                     updateFormData,
                                                                     onNext,
                                                                     onPrev
                                                                 }) => {
    const [expandedProjects, setExpandedProjects] = useState<Set<string>>(new Set());
    const [errors, setErrors] = useState<string>('');

    const projectIdeas = getProjectIdeasForProfessions(formData.professions);

    const toggleExpanded = (projectId: string) => {
        const newExpanded = new Set(expandedProjects);
        if (newExpanded.has(projectId)) {
            newExpanded.delete(projectId);
        } else {
            newExpanded.add(projectId);
        }
        setExpandedProjects(newExpanded);
    };

    const toggleProjectSelection = (projectId: string) => {
        const newSelected = formData.selectedProjects.includes(projectId)
            ? formData.selectedProjects.filter(id => id !== projectId)
            : [...formData.selectedProjects, projectId];

        updateFormData({
            selectedProjects: newSelected,
            noneSelected: false
        });
        setErrors('');
    };

    const handleNoneSelected = (checked: boolean) => {
        updateFormData({
            noneSelected: checked,
            selectedProjects: checked ? [] : formData.selectedProjects
        });
        setErrors('');
    };

    const validateAndNext = () => {
        if (formData.selectedProjects.length === 0 && !formData.noneSelected) {
            setErrors('Please select at least one project idea or check "None of these"');

            // Scroll to the error message
            setTimeout(() => {
                const errorElement = document.querySelector('.text-red-500');
                if (errorElement) {
                    errorElement.scrollIntoView({behavior: 'smooth', block: 'center'});
                }
            }, 100);

            return;
        }

        // If we have too many projects selected, show warning
        if (formData.selectedProjects.length > 10) {
            setErrors('Please select no more than 10 project ideas');
            return;
        }

        onNext();
    };

    const isValid = formData.selectedProjects.length > 0 || formData.noneSelected;

    return (
        <div className="space-y-6">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    Project Ideas for You
                </h2>
                <p className="text-gray-600">
                    Based on your profession(s), here are some project ideas that might interest you
                </p>
            </div>

            {projectIdeas.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">
                        No specific project ideas found for your selected professions.
                    </p>
                    <p className="text-gray-400 mt-2">
                        Please check &#34;None of these&#34; below to continue.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projectIdeas.map((project) => (
                        <div
                            key={project.id}
                            className={`border-2 rounded-xl p-6 transition-all duration-200 cursor-pointer ${
                                formData.selectedProjects.includes(project.id)
                                    ? 'border-purple-500 bg-purple-50'
                                    : 'border-gray-200 bg-white hover:border-purple-300'
                            }`}
                            onClick={() => toggleProjectSelection(project.id)}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex-1">
                                    <div className="flex items-center mb-2">
                                        <input
                                            type="checkbox"
                                            checked={formData.selectedProjects.includes(project.id)}
                                            onChange={() => {
                                            }}
                                            className="mr-3 text-purple-600 focus:ring-purple-500"
                                        />
                                        <span className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                                    </div>
                                    <Image
                                        src={`https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=200&fit=crop`}
                                        alt={project.imageAlt}
                                        className="w-full h-32 object-cover rounded-lg mb-4"
                                        width={400}
                                        height={200}
                                    />
                                    <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-3">
                                        {project.description}
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    toggleExpanded(project.id);
                                }}
                                className="flex items-center text-purple-600 hover:text-purple-700 text-sm font-medium"
                            >
                                {expandedProjects.has(project.id) ? (
                                    <>
                                        <Minus className="w-4 h-4 mr-1"/>
                                        Show Less
                                    </>
                                ) : (
                                    <>
                                        <Plus className="w-4 h-4 mr-1"/>
                                        Read More
                                    </>
                                )}
                            </button>

                            {expandedProjects.has(project.id) && (
                                <div className="mt-4 pt-4 border-t border-gray-200">
                                    <p className="text-gray-700 text-sm">
                                        {project.details}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}

            <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">
                <label className="flex items-center justify-center cursor-pointer">
                    <input
                        type="checkbox"
                        checked={formData.noneSelected}
                        onChange={(e) => handleNoneSelected(e.target.checked)}
                        className="mr-3 text-purple-600 focus:ring-purple-500"
                    />
                    <span className="text-gray-700 font-medium">
            None of these projects interest me
          </span>
                </label>
            </div>

            {errors && (
                <div className="text-red-500 text-sm text-center bg-red-50 p-3 rounded-lg">
                    {errors}
                </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6">
                <button
                    onClick={onPrev}
                    className="flex items-center px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-700"
                >
                    <ChevronLeft className="w-4 h-4 mr-2"/>
                    Back
                </button>

                <button
                    onClick={validateAndNext}
                    disabled={!isValid}
                    className={`flex items-center px-6 py-3 rounded-lg transition-colors ${
                        isValid
                            ? 'bg-purple-600 hover:bg-purple-700 text-white'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                >
                    Next: Interest & Community
                    <ChevronRight className="w-4 h-4 ml-2"/>
                </button>
            </div>
        </div>
    );
};

export default ProjectIdeasDisplay;
