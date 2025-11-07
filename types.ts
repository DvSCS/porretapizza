export interface Pizza {
  id?: number;
  name: string;
  ingredients: string;
  price: number;
  image: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
  rating: number;
}

export interface Message {
  id?: number;
  name: string;
  phone: string;
  message: string;
  timestamp: string;
}

// FIX: Added PizzaIdea interface for the Flavor Assistant feature.
export interface PizzaIdea {
  name: string;
  ingredients: string;
  description: string;
}
