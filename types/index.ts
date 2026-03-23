export type ElementType = 'heading' | 'paragraph' | 'button' | 'image' | 'section' | 'hero' | 'contact-form' | 'features' | 'testimonials';

export interface PageElement {
  id: string;
  type: ElementType;
  content: string;
  styles: {
    backgroundColor?: string;
    textColor?: string;
    fontSize?: string;
    padding?: string;
    margin?: string;
    borderRadius?: string;
    textAlign?: 'left' | 'center' | 'right';
  };
  children?: PageElement[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  elements: PageElement[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Template {
  id: string;
  name: string;
  description: string;
  thumbnail?: string;
  elements: PageElement[];
  category: 'ecommerce' | 'saas' | 'portfolio' | 'agency' | 'landing';
}
