export const projectsQuery = `
  *[_type == "project"] | order(_createdAt desc){
    _id,
    title,
    category,
    description,
    coverImage
  }
`

export const testimonialsQuery = `
  *[_type == "testimonial"]{
    _id,
    name,
    company,
    message,
    image
  }
`

export const heroSectionQuery = `
*[_type == "hero"][0]{
  _id,
  title,
  headline,
  subheadline,
  heroImage
}
`


export const ABOUT_QUERY = `
*[_type == "aboutSection"][0]{
  sectionLabel,
  heading,
  descriptionOne,
  highlightText,
  descriptionTwo,

  stats[]{
    number,
    label,
    icon
  },

  "imageOne": imageOne.asset->url,
  "imageTwo": imageTwo.asset->url
}
`;


export const servicesSectionQuery = `
*[_type == "servicesSection"][0]{
  sectionLabel,
  heading,
  services[]{
    title,
    description,
    icon
  }
}
`;


export const whySectionQuery = `
*[_type == "whySection"][0]{
  sectionLabel,
  heading,
  description,
  points[]{
    text
  }
}
`;

export const testimonialSectionQuery = `
*[_type == "testimonialSection"][0]{
  sectionLabel,
  heading,

  testimonials[]{
    name,
    role,
    quote
  }
}
`;

export const contactSectionQuery = `*[_type == "contactSection"][0]{
  sectionLabel,
  heading,
  description,
  phone,
  email,
  location,

  socialLinks{
    instagram,
    linkedin,
    facebook
  },

  form{
    namePlaceholder,
    emailPlaceholder,
    companyPlaceholder,
    messagePlaceholder,
    submitButtonText
  }
}`

export const CONTACT_QUERY = `
*[_type == "contactSection"][0]{
  sectionLabel,
  heading,
  description,
  phone,
  email,
  location,
  socialLinks,
  form
}
`;