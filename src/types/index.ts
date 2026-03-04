export interface Category {
  id: string;
  name: string;
  image: string;
  count: number;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  primaryImage: string;
  secondaryImage: string;
  colors: string[];
  tag?: 'new' | 'sale';
}

export interface Testimonial {
  id: string;
  text: string;
  author: {
    name: string;
    title: string;
    image: string;
  };
}

export interface InstagramPost {
  id: string;
  image: string;
  url?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}
