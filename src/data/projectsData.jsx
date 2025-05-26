import deeptrace_logo_transaprent from "../assets/deeptrace_logo_transparent.png";
import qunataMindLogo from "../assets/quantaMindLogo.png";
import deeptrace from "../assets/deeptrace-dashboard.png";
import quantamind from "../assets/quantamind.png";
import deeptraceLanding from "../assets/deeptrace-landing.png";
import deeptracesignup from "../assets/deeptrace-signup.png";
import deeptraceUpload from "../assets/deeptrace-upload.png";
import deeptraceWorkflow from "../assets/workflow_diagram_New.png";
import quantaGames from "../assets/games dashboarddark.png";
import quantaMeditate from "../assets/meditation session.png";
import wordle from "../assets/wordle.png";
import questionnaire from "../assets/questionnaire.png";
import journal from "../assets/your journaldark.png";
import EdunateLogo from "../assets/Edunate.png";
import EdunateLanding from "../assets/Edunate-landing.png";
import edunate1 from "../assets/edunate-working1.png";
import edunate2 from "../assets/edunate-working2.png";
import edunate3 from "../assets/edunate-working3.png";
import edunate4 from "../assets/edunate-working4.png";
import edunate5 from "../assets/edunate-working5.png";
import edunate6 from "../assets/edunate-working6.png";
import decopy1 from "../assets/decopyfy1.png";
import code from "../assets/fallbackIcon.png";

const projectsData = [
  {
    ProjectId: 0,
    ProjectName: "DeepTrace",
    ProjectTagline:
      "Machine Learning and Blockchain based Deepfake Detection platform. ",
    // Deeptrace is a blockchain-based deepfake detection system aimed at identifying and mitigating manipulated content, reducing computation time by up to 99%. The core of the system is a novel ensemble learning architecture that combines Swin Transformer and EfficientNet-B0, achieving an accuracy of 98.32%. To ensure secure and scalable data handling, I integrated private blockchain infrastructure with federated learning. A research paper detailing the methodologies and results is currently under review with Springer.
    ProjectDescription:
      "<p><b>Deeptrace</b> is a blockchain-based deepfake detection platform that leverages advanced machine learning techniques to identify and mitigate manipulated content. The system significantly reduces computation time by up to 99% through a novel ensemble learning architecture that combines <b>Swin Transformer and EfficientNet-B0</b>, achieving an impressive accuracy of <b>98.32%</b>. To ensure secure and scalable data handling, Deeptrace integrates private blockchain infrastructure with federated learning, enhancing the reliability and efficiency of deepfake detection.</p>",
    ProjectTechUsed: [
      "JavaScript",
      "React",
      "Python",
      "Pytorch",
      "Flask",
      "Transformers",
      "TailwindCSS",
      "Node.js",
    ],
    ProjectLinks: ["https://www.github.com/HitG010/DeepTrace"],
    ProjectLogo: deeptrace_logo_transaprent,
    ProjectImages: [
      deeptrace,
      deeptraceLanding,
      deeptracesignup,
      deeptraceUpload,
      deeptraceWorkflow,
    ],
    ProjectVideo: ["https://www.youtube.com/embed/k2KG_4mlOEo"],
    thumbnailImg: deeptrace,
  },
  {
    ProjectId: 1,
    ProjectName: "QuantaMind",
    ProjectTagline: "A Self-Help Mental Health Companion.",
    ProjectDescription:
      "<p>QuantaMind is a user-centric, technology-driven solution to provide personalized, stigma-free, and sustainable <b>mental health support</b> to individuals facing stressors and challenges in their daily lives, especially those in remote areas or with limited resources. This makes the work of doctors and psychiatrists easier by <b>aiding in more accurate and quicker patient analysis</b>.</p>",
    ProjectTechUsed: [
      "HTML",
      "CSS",
      "JavaScript",
      "EJS",
      "Node.js",
      "Express",
      "Flask",
    ],
    ProjectLinks: [
      "https://www.github.com/kartikbindra/quantamind",
      "https://quantamind.dev",
    ],
    ProjectLogo: qunataMindLogo,
    ProjectImages: [
      quantamind,
      quantaMeditate,
      journal,
      questionnaire,
      wordle,
      quantaGames,
    ],
    ProjectVideo: ["https://www.youtube.com/embed/nC0nxS_cI1Q"],
    thumbnailImg: quantamind,
  },
  {
    ProjectId: 2,
    ProjectName: "Edunate",
    ProjectTagline: "An EduFI Alumni Donation Platform.",
    ProjectDescription:
      "<p>Edunate is an EduFI platform designed to streamline the donation process for educational institutions. By leveraging blockchain technology and robust AI/ML techniques, Edunate ensures <b>transparency, traceability, and accountability</b> for every donation made. The platform empowers alumni to contribute to educational institutions in a secure and efficient manner, while <b>ensuring that their donations are utilized effectively</b>. All three, <b>students, alumni, and institutions</b> can interact seamlessly on the platform, creating a collaborative ecosystem that drives positive change in the education sector.</p>",
    ProjectTechUsed: [
      "Python",
      "AutoEncoders",
      "JavaScript",
      "React",
      "TailwindCSS",
      "Node.js",
      "MongoDB",
      "Express",
      "Solidity",
      "Figma",
      "Langchain",
      "EDUChain Blockchain",
    ],
    ProjectLinks: ["https://www.github.com/HitG010/Edunate"],
    ProjectLogo: EdunateLogo,
    ProjectImages: [
      EdunateLanding,
      edunate1,
      edunate2,
      edunate3,
      edunate4,
      edunate5,
      edunate6,
    ],
    ProjectVideo: ["https://www.youtube.com/embed/iIP5pGSB1Cg"],
    thumbnailImg: EdunateLanding,
  },
  {
    ProjectId: 3,
    ProjectName: "DeCopyfy",
    ProjectTagline: "A copy move forgery detection system.",
    ProjectDescription:
      "The EfficientNet-based segmentation model performs binary image segmentation using a pre-trained EfficientNet-B0 encoder for efficient feature extraction. A CNN-based decoder upsamples these features via transposed convolutions to reconstruct a (1, 224, 224) binary mask from an input of size (3, 224, 224). The final sigmoid activation ensures pixel-wise classification, making the architecture well-suited for tasks requiring precise region or boundary identification.",
    ProjectTechUsed: [
      "Python",
      "Pytorch",
      "Flask",
      "EfficientNet",
      "FPN Decoder",
      "Streamlit",
    ],
    ProjectLinks: ["https://www.github.com/HitG010/Edunate"],
    ProjectLogo: code,
    ProjectImages: [decopy1],
    ProjectVideo: [],
    thumbnailImg: decopy1,
  },
];

export { projectsData };
