import React, {useState} from 'react';
import {ChevronLeft, ChevronRight, HelpCircle, Lightbulb, Mail, MessageCircle, User, Users} from 'lucide-react';

interface FormData {
    interest: 'buyer' | 'tech-enthusiast' | '';
    name: string;
    email: string;
    whatsappIdeas: string;
}

interface UserInterestProps {
    formData: FormData;
    updateFormData: (data: Partial<FormData>) => void;
    onNext: () => void;
    onPrev: () => void;
}

const UserInterest: React.FC<UserInterestProps> = ({
                                                       formData,
                                                       updateFormData,
                                                       onNext,
                                                       onPrev
                                                   }) => {
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleInterestChange = (interest: 'buyer' | 'tech-enthusiast') => {
        // When switching to tech-enthusiast, clear name and email fields
        if (interest === 'tech-enthusiast') {
            updateFormData({
                interest,
                name: '',
                email: ''
            });
        } else {
            updateFormData({interest});
        }
        setErrors({});
    };

    const validateAndNext = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.interest) {
            newErrors.interest = 'Please select your interest to continue';
        }

        if (formData.interest === 'buyer') {
            if (!formData.name.trim()) {
                newErrors.name = 'Name is required for buyers';
            } else if (formData.name.trim().length < 2) {
                newErrors.name = 'Name must be at least 2 characters long';
            }

            if (!formData.email.trim()) {
                newErrors.email = 'Email is required for buyers';
            } else if (!validateEmail(formData.email)) {
                newErrors.email = 'Please enter a valid email address';
            }
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            onNext();
        } else {
            // Scroll to the first error
            setTimeout(() => {
                const errorElement = document.querySelector('.text-red-500');
                if (errorElement) {
                    errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 100);
        }
    };

    const isValid = formData.interest !== '' &&
        (formData.interest === 'tech-enthusiast' ||
            (formData.interest === 'buyer' && formData.name.trim() && formData.email.trim() && validateEmail(formData.email)));

    return (
        <div className="space-y-8">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    Tell Us About Your Interest
                </h2>
                <p className="text-gray-600">
                    Help us understand how you&#39;d like to engage with our community
                </p>
            </div>

            {/* Interest Selection */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    What best describes your interest?
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div
                        className={`border-2 rounded-xl p-6 cursor-pointer transition-all duration-200 ${
                            formData.interest === 'buyer'
                                ? 'border-purple-500 bg-purple-50'
                                : 'border-gray-200 hover:border-purple-300'
                        }`}
                        onClick={() => handleInterestChange('buyer')}
                    >
                        <div className="flex items-center mb-3">
                            <input
                                type="radio"
                                name="interest"
                                value="buyer"
                                checked={formData.interest === 'buyer'}
                                onChange={() => {
                                }}
                                className="mr-3 text-purple-600 focus:ring-purple-500"
                            />
                            <Users className="w-6 h-6 text-purple-600 mr-2"/>
                            <h4 className="font-semibold text-gray-800">Buyer</h4>
                        </div>
                        <p className="text-gray-600 text-sm">
                            I&#39;m interested in purchasing or commissioning custom embedded systems and IoT solutions
                            for my business or projects.
                        </p>
                    </div>

                    <div
                        className={`border-2 rounded-xl p-6 cursor-pointer transition-all duration-200 ${
                            formData.interest === 'tech-enthusiast'
                                ? 'border-purple-500 bg-purple-50'
                                : 'border-gray-200 hover:border-purple-300'
                        }`}
                        onClick={() => handleInterestChange('tech-enthusiast')}
                    >
                        <div className="flex items-center mb-3">
                            <input
                                type="radio"
                                name="interest"
                                value="tech-enthusiast"
                                checked={formData.interest === 'tech-enthusiast'}
                                onChange={() => {
                                }}
                                className="mr-3 text-purple-600 focus:ring-purple-500"
                            />
                            <Lightbulb className="w-6 h-6 text-purple-600 mr-2"/>
                            <h4 className="font-semibold text-gray-800">Tech Enthusiast</h4>
                        </div>
                        <p className="text-gray-600 text-sm">
                            I&#39;m passionate about technology and want to learn, share knowledge, and collaborate on
                            embedded systems and IoT projects.
                        </p>
                    </div>
                </div>

                {errors.interest && (
                    <div className="text-red-500 text-sm text-center bg-red-50 p-3 rounded-lg">
                        {errors.interest}
                    </div>
                )}
            </div>

            {/* Buyer Contact Information */}
            {formData.interest === 'buyer' && (
                <div className="bg-blue-50 rounded-xl p-6 space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        Contact Information
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Name Field */}
                        <div className="space-y-2">
                            <label className="flex items-center text-sm font-medium text-gray-700">
                                <User className="w-4 h-4 mr-2"/>
                                Full Name
                            </label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => updateFormData({name: e.target.value})}
                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ${
                                    errors.name ? 'border-red-500' : 'border-gray-300'
                                }`}
                                placeholder="Enter your full name"
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm">{errors.name}</p>
                            )}
                        </div>

                        {/* Email Field */}
                        <div className="space-y-2">
                            <label className="flex items-center text-sm font-medium text-gray-700">
                                <Mail className="w-4 h-4 mr-2"/>
                                Email Address
                            </label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => updateFormData({email: e.target.value})}
                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ${
                                    errors.email ? 'border-red-500' : 'border-gray-300'
                                }`}
                                placeholder="Enter your email address"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm">{errors.email}</p>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* WhatsApp Community Benefits */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                    <MessageCircle className="w-6 h-6 text-green-600 mr-2"/>
                    <h3 className="text-xl font-semibold text-gray-800">
                        Join Our WhatsApp Community
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                        <div className="flex items-start">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                            <p className="text-gray-700">
                                <strong>Exclusive Updates:</strong> Get first access to the latest embedded systems and
                                IoT innovations, project showcases, and industry trends.
                            </p>
                        </div>

                        <div className="flex items-start">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                            <p className="text-gray-700">
                                <strong>Professional Networking:</strong> Connect with engineers, makers, researchers,
                                and industry professionals from diverse backgrounds.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-start">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                            <p className="text-gray-700">
                                <strong>Early Access:</strong> Be among the first to see new project ideas,
                                collaboration opportunities, and beta testing invitations.
                            </p>
                        </div>

                        <div className="flex items-start">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                            <p className="text-gray-700">
                                <strong>Expert Support:</strong> Get direct access to Q&A sessions with experts in
                                hardware design, software development, and system integration.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional Ideas */}
            <div className="space-y-4">
                <label className="flex items-center text-lg font-semibold text-gray-800">
                    <HelpCircle className="w-5 h-5 mr-2"/>
                    Any ideas or suggestions for our WhatsApp community?
                </label>
                <textarea
                    value={formData.whatsappIdeas}
                    onChange={(e) => updateFormData({whatsappIdeas: e.target.value})}
                    placeholder="Share your thoughts on what you'd like to see in our community - project collaborations, discussion topics, events, resources, etc. (Optional)"
                    className="text-gray-700 w-full h-24 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                />
                <p className="text-sm text-gray-500">
                    Your suggestions help us create a more valuable community experience for everyone.
                </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6">
                <button
                    onClick={onPrev}
                    className="flex items-center px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
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
                    Next: WhatsApp & Newsletter
                    <ChevronRight className="w-4 h-4 ml-2"/>
                </button>
            </div>
        </div>
    );
};

export default UserInterest;
