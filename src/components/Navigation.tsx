
import React from 'react';

interface NavigationProps {
  currentPage: number;
  totalPages: number;
  steps?: string[];
}

const Navigation: React.FC<NavigationProps> = ({ 
  currentPage,
  steps = [
    'Step 1',
    'Step 2', 
    'Step 3',
    'Step 4'
  ]
}) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === currentPage;
          const isCompleted = stepNumber < currentPage;
          
          return (
            <div key={step} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-purple-600 text-white'
                      : isCompleted
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {isCompleted ? '✓' : stepNumber}
                </div>
                <span className="text-xs mt-2 text-gray-600 text-center hidden sm:block">
                  {step}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`h-1 w-12 sm:w-24 mx-2 transition-all duration-300 ${
                    isCompleted ? 'bg-green-500' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
