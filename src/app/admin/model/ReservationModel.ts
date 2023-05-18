export class Reservation {
    id: string = '';
    fromDate: string = '';
    toDate: string = '';
    guestNumber: number = 0;
    accommodation: string = '';
    accepted: string = '';
    acception: string = '';
    guestUsername: string = '';

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.fromDate = obj.fromDate; 
            this.toDate = obj.toDate;
            this.guestNumber = obj.guestNumber;
            this.accommodation = obj.accommodation;
            this.accepted = obj.accepted;
            this.acception = obj.acception;
            this.guestUsername = obj.guestUsername;
        }
    }
}