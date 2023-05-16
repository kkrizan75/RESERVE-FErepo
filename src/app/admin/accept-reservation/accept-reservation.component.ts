import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/service/user.service';
import { AdminService } from '../service/admin.service';
import { AllReservationInfo } from '../model/AllReservationInfo';


interface Reservation {
  allAcco: {
    id: string;
    fromDate: string;
    toDate: string;
    guestNumber: number;
    accommodation: string;
  }[];
}

@Component({
  selector: 'app-accept-reservation',
  templateUrl: './accept-reservation.component.html',
  styleUrls: ['./accept-reservation.component.css']
})
export class AcceptReservationComponent {

  constructor(private router: Router,private adminService: AdminService) {}
  public reservationList: AllReservationInfo[] = [];
  public reservationListTwo: AllReservationInfo[] = [];
  
  public ngOnInit() {
    this.reservationListFunction();
  }

  public reservationListFunction(){
    this.adminService.reservationListFunction().subscribe((result) => {
      console.log(result)
      result.forEach(element=>{
        this.reservationList.push(element)
      })
      this.reservationList.forEach(element=>{
        if(element.allAcco[0] != undefined && element.allAcco[0].accepted === "0")
        this.reservationListTwo.push(element)
      })
      console.log(this.reservationList)
    });
  }
  public acceptRes(id : string){
    console.log("usao")
    this.adminService.acceptReservation(id)
    window.location.reload()
  }

}
