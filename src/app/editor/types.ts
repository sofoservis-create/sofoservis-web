// Define the structure of our page content
export interface PageContent {
  hero: {
    title: string;
    description: string;
    backgroundImage: string;
    formTitle: string;
    formSubtitle: string;
  };
  features: {
    title: string;
    description: string;
    items?: Array<{
      image: string;
      title: string;
      description: string;
      link: string;
    }>;
  };
  faq: {
    title: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  clients: {
    title?: string;
    logos: Array<{
      src: string;
      alt: string;
      height: number;
    }>;
  };
  reviews: {
    title: string;
    videoReviews: Array<{
      id: string;
      thumbnail: string;
      videoUrl: string;
    }>;
  };
  reviewsShowcase: {
    title: string;
    variant: 'default' | 'full';
  };
  googleReviews: {
    title: string;
  };
  instagramFeed: {
    title: string;
    username: string;
    link: string;
    images: Array<{
      url: string;
      alt: string;
      link?: string;
    }>;
  };
  cta: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    image: string;
  };
  lastUpdated?: string; // ISO string for the last update date
}

// Field editor props
export interface TextFieldEditorProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  multiline?: boolean;
  rows?: number;
}

export interface ImageFieldEditorProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  previewWidth?: number;
  previewHeight?: number;
}

// Section editor props
export interface SectionEditorProps {
  title: string;
  isOpen?: boolean;
  children: React.ReactNode;
}

// Edit panel props
export interface EditPanelProps {
  content: PageContent;
  onChange: (content: PageContent) => void;
}

// Page preview props
export interface PagePreviewProps {
  content: PageContent;
  onEditSection: (section: string) => void;
}