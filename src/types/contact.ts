export interface ContactSection {
  sectionLabel: string;
  heading: string;
  description: string;
  phone: string;
  email: string;
  location: string;

  socialLinks: {
    instagram: string;
    linkedin: string;
    facebook: string;
  };

  form: {
    namePlaceholder: string;
    emailPlaceholder: string;
    companyPlaceholder: string;
    messagePlaceholder: string;
    submitButtonText: string;
  };
}

export interface ContactFormRequest {
  name: string;
  email: string;
  company?: string;
  message: string;
}