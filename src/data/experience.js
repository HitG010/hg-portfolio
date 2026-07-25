// Moved out of the component and restructured: descriptions used to be raw
// HTML strings injected with dangerouslySetInnerHTML, and they carried
// `className` attributes, which is not a thing in HTML — so that styling was
// silently dropped on every entry. Bullets are plain strings now.
//
// The 2024 entries keep their original wording; their single paragraphs were
// split at sentence boundaries so they sit consistently beside the newer
// bulleted roles.
//
// `logo` is optional. Drop an SVG or PNG into src/assets/logos/, import it
// here, and it replaces the monogram fallback automatically.
export const experiences = [
  {
    title: "Software Engineering Intern",
    company: "Microsoft",
    location: "Noida, India",
    duration: "May 2026 – July 2026",
    website: "https://www.microsoft.com",
    logo: null, // TODO: add src/assets/logos/microsoft.svg
    bullets: [
      "Developed an AI-powered automated test generation framework using HAR analysis that authored 36 test cases, improved test coverage, and identified a production bug in Microsoft’s cloud security proxy.",
      "Innovated validation pipelines and automated verification workflows to ensure deterministic test execution, enabling reliable integration of AI-generated tests into the CI/CD pipeline and strengthening PR quality gates.",
    ],
  },
  {
    title: "Machine Learning Engineer Intern",
    company: "VVDN Technologies",
    location: "Bangalore, India",
    duration: "June 2025 – July 2025",
    website: "https://www.vvdntech.com",
    logo: null, // TODO: add src/assets/logos/vvdn.svg
    bullets: [
      "Implemented and tuned a real-time network intrusion detection system (NIDS) using Random Forest, achieving 99%+ accuracy and reducing false positives by 40% versus traditional rule-based firewalls.",
      "Deployed the trained model on AMD’s VEK280 platform using Vitis AI and AIE acceleration, achieving a 3× speedup over CPU-based inference and validating performance for low-latency, edge-based DDoS detection.",
    ],
  },
  {
    title: "ML Research Intern",
    company: "Delhi Technological University",
    location: "Under Prof. Rahul Thakur",
    duration: "Aug 2024 – Dec 2024",
    website: "https://scholar.google.com/citations?user=e51fOvMAAAAJ&hl=en&oi=ao",
    logo: null,
    bullets: [
      "Developed a hybrid deep learning model combining Swin Transformer and EfficientNet-B0, achieving 98.32% accuracy on a dataset of 800+ videos and improving deepfake detection performance by 9.2%.",
      "Engineered a Swin Transformer + FPN-based segmentation pipeline for image forgery detection, reducing false positives by 15% and significantly enhancing feature extraction capabilities.",
      "Optimized training strategies through advanced data augmentation and fine-tuning, achieving a 12% increase in model generalization on real vs. deepfake datasets.",
    ],
  },
  {
    title: "Web Development & AI/ML Intern",
    company: "Racloop Technologies",
    location: "Gurgaon, India",
    duration: "May 2024 – July 2024",
    website: "https://whilter.ai/",
    logo: null,
    bullets: [
      "Designed and built custom chatbots from scratch using transformer-based architectures with up to 124 million parameters, tailored to specific company use cases.",
      "Contributed to multiple web development projects using Next.js, delivering over 4 responsive and high-performance web applications as part of a collaborative 5-member team.",
      "Performed in-depth data analysis on more than 50,000 data points, generating actionable insights that led to a 15% improvement in workflow optimization.",
    ],
  },
  {
    title: "Web Development & AI/ML Intern",
    company: "Delhi Police",
    location: "Delhi, India",
    duration: "Mar 2024 – May 2024",
    website: "https://www.delhicop.in",
    logo: null,
    bullets: [
      "Created a mobile application, DelhiCOP, to streamline crime tracking and daily reporting, significantly enhancing operational efficiency.",
      "Built a crime detection model leveraging advanced computer vision techniques such as LRCN, Conv-LSTM, and Vision Transformer, achieving 92% accuracy.",
      "Conducted an in-depth analysis of over 10,000 crime records, uncovering patterns that led to a 20% improvement in resource allocation.",
      "Collaborated with a 15-member team, contributing to UI/UX design and implementing four intuitive front-end interfaces.",
    ],
  },
];
