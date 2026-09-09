export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  deliverables: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  priceEstimate?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  heroImage: string;
  thumbnail: string;
  summary: string;
  challenge: string;
  strategy: string;
  results: {
    metric: string;
    label: string;
    benchmark: string;
  }[];
  tags: string[];
  duration: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  highlight: string;
  rating: number;
}

export interface BookingFormData {
  name: string;
  email: string;
  company: string;
  website: string;
  serviceType: string;
  monthlyBudget: string;
  timeSlot: string;
  notes: string;
  selectedServices: string[];
}
