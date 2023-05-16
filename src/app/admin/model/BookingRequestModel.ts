export class BookingRequest {
    id : string = '';
    acommodationName: string = '';
    numberOfGuests: number = 0;
    startDate: string = '';
    finishDate: string = '';


    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.acommodationName = obj.acommodationName; 
            this.numberOfGuests = obj.numberOfGuests;
            this.startDate = obj.startDate;
            this.finishDate = obj.finishDate;      }
    }

}