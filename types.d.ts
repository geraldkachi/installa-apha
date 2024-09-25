interface Testimonial {
  _key: string;
  testimonial: string;
  name: string;
  role: string;
  activeImage: string;
  inactiveImage: string;
}

interface HeaderData {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

interface CTAData {
  ctaHeader: string;
  ctaAltText: string;
}

interface Homepage {
  testimonials: Testimonial[];
  // header: HeaderData;
  cta: CTAData[];
  // Add other fields you expect in the homepage data
}
