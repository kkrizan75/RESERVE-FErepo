export class CreateDTO {
    id : string = '';
    name: string = '';
    location: string = '';
    photos: string = '';
    minGuests: number = 0;
    maxGuests: number = 0;
    benefits: string = ''; 
    acception: boolean = false;

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.name = obj.name; 
            this.location = obj.location;
            this.photos = obj.photos;
            this.minGuests = obj.minGuests;
            this.maxGuests = obj.maxGuests;
            this.benefits = obj.benefits;    
            this.acception = obj.acception;    
        }
    }

}