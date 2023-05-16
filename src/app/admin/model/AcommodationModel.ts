export class Acommodation {
    id : string = '';
    name: string = '';
    location: string = '';
    photos: string = '';
    minNumGuest: number = 0;
    maxNumGuest: number = 0;
    features: string = ''; 

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.name = obj.name; 
            this.location = obj.location;
            this.photos = obj.photos;
            this.minNumGuest = obj.minNumGuest;
            this.maxNumGuest = obj.maxNumGuest;
            this.features = obj.features;        }
    }

}