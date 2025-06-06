import React, {useEffect, useState} from 'react';
import {CheckCircle, ChevronLeft, ExternalLink, Mail, MessageCircle} from 'lucide-react';
import Image from "next/image";


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

interface SubscriptionPageProps {
    formData: FormData;
    updateFormData: (data: Partial<FormData>) => void;
    onPrev: () => void;
}

const SubscriptionPage: React.FC<SubscriptionPageProps> = ({
                                                               formData,
                                                               updateFormData,
                                                               onPrev
                                                           }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionError, setSubmissionError] = useState('');

    useEffect(() => {
        // Pre-fill newsletter email with the user's email if they're a buyer
        if (formData.interest === 'buyer' && formData.email && !formData.newsletterEmail) {
            updateFormData({newsletterEmail: formData.email});
        }
    }, [formData.email, formData.interest, formData.newsletterEmail, updateFormData]);

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (formData.newsletterEmail) {
            if (!validateEmail(formData.newsletterEmail)) {
                newErrors.newsletterEmail = 'Please enter a valid email address';
            } else if (formData.newsletterEmail.length > 100) {
                newErrors.newsletterEmail = 'Email address cannot exceed 100 characters';
            }
        }

        if (formData.feedback && formData.feedback.length > 500) {
            newErrors.feedback = 'Feedback cannot exceed 500 characters';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            // Scroll to the first error message
            setTimeout(() => {
                const errorElement = document.querySelector('.text-red-500');
                if (errorElement) {
                    errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 100);
        }

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (validateForm()) {
            setIsSubmitting(true);
            setSubmissionError('');

            try {
                await submitForm();
            } catch (error) {
                console.error('Form submission error:', error);
                setSubmissionError('There was a problem submitting your form. Please try again.');
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    const submitForm = async () => {
        try {
            // Send the form data to your API endpoint that will connect to MongoDB
            const response = await fetch('/api/subscriptions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Failed to submit form:', errorData);
                console.error(errorData.error || 'Failed to submit form');
            }

            // Only set isSubmitted to true if the submission was successful
            setIsSubmitted(true);
        } catch (error) {
            console.error('Error submitting form:', error);
            throw error;
        }
    };

    // Check if the form is valid for submission
    const isFormValid = () => {
        // If newsletter email is provided, it must be valid
        if (formData.newsletterEmail && !validateEmail(formData.newsletterEmail)) {
            return false;
        }

        // Check feedback length
        if (formData.feedback && formData.feedback.length > 500) {
            return false;
        }

        return true;
    };

    // Use the validation function for the submit button
    const canSubmit = isFormValid() && !isSubmitting;

    if (isSubmitted) {
        return (
            <div className="text-center space-y-6 py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8 text-green-600"/>
                </div>
                <h2 className="text-3xl font-bold text-gray-800">
                    Thank You for Your Submission!
                </h2>
                <p className="text-lg text-gray-600 max-w-md mx-auto">
                    We&#39;ve received your information and will be in touch soon. Don&#39;t forget to join our WhatsApp
                    community for exclusive updates!
                </p>

            </div>
        );
    }

    return (
        <div className="space-y-8">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    Join Our Community
                </h2>
                <p className="text-gray-600">
                    Connect with us and stay updated on the latest developments
                </p>
            </div>

            {/* WhatsApp Community Section */}
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6">
                <div className="text-center">
                    <div className="flex items-center justify-center mb-4">
                        <MessageCircle className="w-8 h-8 text-green-600 mr-2"/>
                        <h3 className="text-2xl font-semibold text-gray-800">
                            Join Our WhatsApp Community
                        </h3>
                    </div>

                    <div className="bg-white rounded-lg p-6 mb-6 inline-block">
                        <Image
                            src="https://images.unsplash.com/photo-1611694789866-cf24b91c6b43?w=200&h=200&fit=crop"
                            alt="QR code for WhatsApp community"
                            className="w-48 h-48 mx-auto rounded-lg border-2 border-gray-200"
                            width={200}
                            height={200}
                        />
                        <p className="text-sm text-gray-600 mt-2">
                            Scan to join our WhatsApp community
                        </p>
                    </div>

                    <a
                        href="https://chat.whatsapp.com/example"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
                    >
                        <MessageCircle className="w-5 h-5 mr-2"/>
                        Join WhatsApp Community
                        <ExternalLink className="w-4 h-4 ml-2"/>
                    </a>
                </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                    <Mail className="w-6 h-6 text-purple-600 mr-2"/>
                    <h3 className="text-xl font-semibold text-gray-800">
                        Newsletter Subscription
                    </h3>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            value={formData.newsletterEmail}
                            onChange={(e) => updateFormData({newsletterEmail: e.target.value})}
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-800 ${
                                errors.newsletterEmail ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="Enter your email for newsletter updates"
                        />
                        {errors.newsletterEmail && (
                            <p className="text-red-500 text-sm mt-1">{errors.newsletterEmail}</p>
                        )}
                    </div>

                    <p className="text-sm text-gray-600">
                        Get updates on new project ideas, community events, and exclusive content delivered to your
                        inbox.
                    </p>
                </div>
            </div>

            {/* Feedback Section */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">
                    Additional Feedback (Optional)
                </h3>
                <textarea
                    value={formData.feedback}
                    onChange={(e) => updateFormData({feedback: e.target.value})}
                    placeholder="Share any additional thoughts, suggestions, or feedback about your experience with this form or what you'd like to see from our community..."
                    className="w-full h-24 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none text-gray-800"
                />
            </div>

            {/* Summary Section */}
            <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Submission Summary
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                        <span className="font-medium text-gray-700">Professions:</span>
                        <span className="ml-2 text-gray-600">{formData.professions.length} selected</span>
                    </div>
                    <div>
                        <span className="font-medium text-gray-700">Interest:</span>
                        <span className="ml-2 text-gray-600 capitalize">{formData.interest.replace('-', ' ')}</span>
                    </div>
                    {formData.interest === 'buyer' && (
                        <>
                            <div>
                                <span className="font-medium text-gray-700">Name:</span>
                                <span className="ml-2 text-gray-600">{formData.name}</span>
                            </div>
                            <div>
                                <span className="font-medium text-gray-700">Email:</span>
                                <span className="ml-2 text-gray-600">{formData.email}</span>
                            </div>
                        </>
                    )}
                    <div className="md:col-span-2">
                        <span className="font-medium text-gray-700">Projects:</span>
                        <span className="ml-2 text-gray-600">
              {formData.noneSelected ? 'None selected' : `${formData.selectedProjects.length} selected`}
            </span>
                    </div>
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6">
                <button
                    onClick={onPrev}
                    className="flex items-center px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-700"
                    disabled={isSubmitting}
                >
                    <ChevronLeft className="w-4 h-4 mr-2"/>
                    Back
                </button>

                <button
                    onClick={handleSubmit}
                    disabled={!canSubmit}
                    className={`flex items-center px-8 py-3 rounded-lg font-medium transition-colors ${
                        canSubmit
                            ? 'bg-purple-600 hover:bg-purple-700 text-white'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                >
                    {isSubmitting ? 'Submitting...' : 'Submit Form'}
                    {!isSubmitting && <CheckCircle className="w-4 h-4 ml-2"/>}
                </button>
            </div>

            {submissionError && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                    {submissionError}
                </div>
            )}
        </div>
    );
};

export default SubscriptionPage;
