export interface TourPackage {
  id: string;
  title: string;
  duration: string;
  image: string;
  features: { name: string; description: string }[];
  priceLabel: string;
}

export type PageView = 'home' | 'packages' | 'contact' | 'about';

export interface FormData {
  preferredDate: string;
  tourType: string; // Dropdown
  guestCount: number;
  accommodation: 'AC' | 'Non-AC';
  name: string;
  email: string;
  phone: string;
}