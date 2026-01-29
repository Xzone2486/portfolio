import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ReactNode } from "react";
import {
  SiChakraui,
  SiJavascript,
  SiNumpy,
  SiPandas,
  SiPython,
  SiScikitlearn,
  SiStreamlit,
  SiTailwindcss,
  SiTensorflow,
} from "react-icons/si";

const BASE_PATH = "/assets/projects-screenshots";

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const PROJECT_SKILLS = {
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />, 
  },
  numpy: {
    title: "NumPy",
    bg: "black",
    fg: "white",
    icon: <SiNumpy />,
  },
  pandas: {
    title: "Pandas",
    bg: "black",
    fg: "white",
    icon: <SiPandas />,
  },
  sklearn: {
    title: "Scikit-learn",
    bg: "black",
    fg: "white",
    icon: <SiScikitlearn />,
  },
  tensorflow: {
    title: "TensorFlow",
    bg: "black",
    fg: "white",
    icon: <SiTensorflow />,
  },
  streamlit: {
    title: "Streamlit",
    bg: "black",
    fg: "white",
    icon: <SiStreamlit />,
  },
  xgboost: {
    title: "XGBoost",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  smote: {
    title: "SMOTE",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
};

const projects: Project[] = [
  {
    id: "Plant Disease Detector",
    category: "Machine Learning Model",
    title: "Plant Disease Detector",
    src: "/assets/projects-screenshots/plant.jpeg",
    screenshots: ["plant.jpeg"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.chakra,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.numpy,
        PROJECT_SKILLS.pandas,
        PROJECT_SKILLS.sklearn,
        PROJECT_SKILLS.tensorflow,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            AI-Powered Plant Disease Detection
          </TypographyP>
          <TypographyP className="font-mono ">
            Leveraging the power of Deep Learning to save crops. This project uses a Convolutional Neural Network (CNN)
            built with TensorFlow to classify plant diseases from leaf images with high accuracy.
            It provides farmers with instant diagnosis and treatment recommendations.
          </TypographyP>
          <TypographyH3 className="my-4 mt-8">Model Architecture</TypographyH3>
          <p className="font-mono mb-2">
            The core is a custom CNN trained on thousands of labeled images.
            Data preprocessing and augmentation were handled using Pandas and NumPy to ensure robustness.
          </p>
          <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
          <p className="font-mono mb-2">
            Built with a Python backend for inference and a modern React frontend for a seamless user experience.
          </p>
        </div>
      );
    },
  },
  {
    id: "Churn",
    category: "Churn Prediction",
    title: "Churn Prediction",
    src: "/assets/projects-screenshots/churnPredection.jpeg",
    screenshots: ["churnPredection.jpeg"],
    skills: {
      frontend: [
        PROJECT_SKILLS.streamlit,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.xgboost,
        PROJECT_SKILLS.sklearn,
        PROJECT_SKILLS.smote,
        PROJECT_SKILLS.pandas,
        PROJECT_SKILLS.numpy,
      ],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Customer Churn Prediction & Retention Analysis System
          </TypographyP>
          <TypographyP className="font-mono text-center mb-6 text-sm text-neutral-400">
            ML Analytics + Business Strategy | Streamlit + XGBoost
          </TypographyP>
          <TypographyP className="font-mono mb-6">
            Built a machine learning system to predict telecom customer churn, enabling proactive retention and revenue protection.
            Deployed as an interactive Streamlit web app for real-time risk prediction.
          </TypographyP>

          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>
              <strong>Champion Model:</strong> Trained and compared Logistic Regression, Random Forest, and XGBoost.
              Achieved ~0.85 Recall and ~0.85 ROC-AUC with <strong>XGBoost</strong>.
            </li>
            <li>
              <strong>Churn Drivers:</strong> Identified key factors using feature importance and SHAP analysis:
              Contract Type, Tenure, Monthly Charges, and Service Add-ons.
            </li>
            <li>
              <strong>Retention Strategy:</strong> Designed data-driven strategies including contract incentives,
              onboarding programs, and value-add bundling based on model insights.
            </li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
          <p className="font-mono mb-2">
            <strong>Frontend:</strong> Streamlit (UI Design for ML Apps, Data Visualization)
          </p>
          <p className="font-mono mb-2">
            <strong>Backend / ML:</strong> Python, XGBoost, Scikit-learn, SHAP, Pandas, NumPy, Feature Engineering
          </p>
        </div>
      );
    },
  },
  {
    id: "Credit Risk Prediction System",
    category: "Loan Default Risk Modeling",
    title: "Credit Risk Prediction System",
    src: "/assets/projects-screenshots/creditSystem.jpeg",
    screenshots: ["creditSystem.jpeg"],
    skills: {
      frontend: [
        PROJECT_SKILLS.streamlit,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.xgboost,
        PROJECT_SKILLS.sklearn,
        PROJECT_SKILLS.smote,
        PROJECT_SKILLS.pandas,
        PROJECT_SKILLS.numpy,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Credit Risk Prediction System
          </TypographyP>
          <TypographyP className="font-mono text-center mb-6 text-sm text-neutral-400">
            Loan Default Risk Modeling | XGBoost + Streamlit
          </TypographyP>
          <TypographyP className="font-mono mb-6">
            A machine learning system built on the Home Credit dataset to predict loan default risks,
            supporting data-driven lending decisions.
          </TypographyP>

          <TypographyH3 className="my-4 mt-8">Key Achievements</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>
              <strong>Imbalance Handling:</strong> Utilized SMOTE to handle severe class imbalance, significantly
              improving the detection of high-risk applicants in the minority default class.
            </li>
            <li>
              <strong>Model Performance:</strong> Trained and optimized an XGBoost classifier, achieving ~0.75 ROC-AUC.
              Implemented threshold tuning to prioritize recall in risk-sensitive scenarios.
            </li>
            <li>
              <strong>Risk Drivers:</strong> Engineered features and performed EDA to identify key determinants of default,
              such as credit scores, debt ratios, and external risk indicators.
            </li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
          <p className="font-mono mb-2">
            <strong>Frontend:</strong> Streamlit (Dashboard Design, Data Visualization)
          </p>
          <p className="font-mono mb-2">
            <strong>Backend / ML:</strong> Python, XGBoost, Scikit-learn, SMOTE (Imbalanced-Learn), Pandas, NumPy, Feature Engineering
          </p>
        </div>
      );
    },
  },
];
export default projects;
