export class Acommodation {
    availableFrom: string = '';
    availableTo: string = '';
    benefits: string = '';
    id: string = '';
    isPricePerGuest: boolean = false;
    location: string = '';
    minGuests: number = 0;
    maxGuests: number = 0;
    name: string = '';
    photos: string[] = [];
    price: number = 0;

    public constructor(obj?: any) {
      if (obj) {
        this.availableFrom = obj.availableFrom;
        this.availableTo = obj.availableTo;
        this.benefits = obj.benefits;
        this.id = obj.id;
        this.isPricePerGuest = obj.isPricePerGuest;
        this.location = obj.location;
        this.minGuests = obj.minGuests;
        this.maxGuests = obj.maxGuests;
        this.name = obj.name; 
        this.photos = obj.photos;  
        this.price = obj.price;
      }
  }
}
  