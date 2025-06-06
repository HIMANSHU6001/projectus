"use client";
import React, {useState} from 'react';
import UserInfoForm from '../components/UserInfoForm';
import ProjectIdeasDisplay from '../components/ProjectIdeasDisplay';
import UserInterest from '../components/UserInterest';
import SubscriptionPage from '../components/SubscriptionPage';
import Navigation from '../components/Navigation';

interface FormData {
    professions: string[];
    selectedProjects: string[];
    noneSelected: boolean;
    interest: 'buyer' | 'tech-enthusiast' | '';
    name: string;
    email: string;
    whatsappIdeas: string;
    newsletterEmail: string;
    feedback: string;
}

const Index = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [formData, setFormData] = useState<FormData>({
        professions: [],
        selectedProjects: [],
        noneSelected: false,
        interest: '',
        name: '',
        email: '',
        whatsappIdeas: '',
        newsletterEmail: '',
        feedback: ''
    });

    const updateFormData = (data: Partial<FormData>) => {
        setFormData(prev => ({...prev, ...data}));
    };

    const nextPage = () => {
        if (currentPage < 4) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const renderCurrentPage = () => {
        switch (currentPage) {
            case 1:
                return (
                    <UserInfoForm
                        formData={formData}
                        updateFormData={updateFormData}
                        onNext={nextPage}
                    />
                );
            case 2:
                return (
                    <ProjectIdeasDisplay
                        formData={formData}
                        updateFormData={updateFormData}
                        onNext={nextPage}
                        onPrev={prevPage}
                    />
                );
            case 3:
                return (
                    <UserInterest
                        formData={formData}
                        updateFormData={updateFormData}
                        onNext={nextPage}
                        onPrev={prevPage}
                    />
                );
            case 4:
                return (
                    <SubscriptionPage
                        formData={formData}
                        updateFormData={updateFormData}
                        onPrev={prevPage}
                    />
                );
            default:
                return null;
        }
    };

    const steps = [
        'Profession Selection',
        'Project Ideas',
        'Interest & Community',
        'Contact & Subscription'
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-gray-800 mb-2">
                            Embedded Systems & IoT Project Hub
                        </h1>
                        <p className="text-lg text-gray-600">
                            Discover personalized project ideas for your profession
                        </p>
                    </div>

                    <Navigation currentPage={currentPage} totalPages={4} steps={steps}/>

                    <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                        {renderCurrentPage()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
