import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Acommodation } from '../../model/AcommodationModel';

@Component({
  selector: 'app-create-acommodation',
  templateUrl: './create-acommodation.component.html',
  styleUrls: ['./create-acommodation.component.css']
})
export class CreateAcommodationComponent {

  public acommodation: Acommodation = new Acommodation;

  features = new FormControl('');
  featureList: string[] = ['Klima', 'Parking', 'Wi-fi', 'Sef', 'Terasa', 'Pet-friendly', 'Zurke', 'Podno grejanje', 'Kada', 'Dozvoljeno pusenje'];

  public createNewAcommodation(){
    console.log("Test1");
  }

}


