import mongoose from 'mongoose';

export interface SubscriptionDocument extends mongoose.Document {
  professions: string[];
  selectedProjects: string[];
  noneSelected: boolean;
  interest: 'buyer' | 'tech-enthusiast' | '';
  name: string;
  email: string;
  whatsappIdeas: string;
  newsletterEmail: string;
  feedback: string;
  createdAt: Date;
}

const SubscriptionSchema = new mongoose.Schema({
  professions: {
    type: [String],
    required: true,
  },
  selectedProjects: {
    type: [String],
    default: [],
  },
  noneSelected: {
    type: Boolean,
    default: false,
  },
  interest: {
    type: String,
    enum: ['buyer', 'tech-enthusiast', ''],
    default: '',
  },
  name: {
    type: String,
    trim: true,
    default: '',
    required: false,  // Explicitly set as not required
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    default: '',
    required: false,  // Explicitly set as not required
  },
  whatsappIdeas: {
    type: String,
    trim: true,
    default: '',
  },
  newsletterEmail: {
    type: String,
    trim: true,
    lowercase: true,
    default: '',
  },
  feedback: {
    type: String,
    trim: true,
    default: '',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, {
  collection: 'subscription',
  timestamps: true
});

export default mongoose.models.Subscription || mongoose.model<SubscriptionDocument>('Subscription', SubscriptionSchema);
