export interface AllAccoInfo {
    id: string;
    name: string;
    location: string;
    benefits: string;
    photos: string[];
    minGuests: number;
    maxGuests: number;
    availableFrom: string;
    availableTo: string;
    price: number;
    isPricePerGuest: boolean;
  }