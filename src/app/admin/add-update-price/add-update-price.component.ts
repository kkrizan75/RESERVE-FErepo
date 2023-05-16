import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { Acommodation } from '../../shared/model/Acommodation';
import { AcommodationService } from '../service/acommodation.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-update-price',
  templateUrl: './add-update-price.component.html',
  styleUrls: ['./add-update-price.component.css']
})
export class AddUpdatePriceComponent {

  //@Input() acommodation: Acommodation;
  @Output() acommodationOutput = new Acommodation();

  constructor(private acommodationService: AcommodationService, @Inject(MAT_DIALOG_DATA) public acommodation: Acommodation) {

  }

  
  public addUpdatePrice(): void {
    this.acommodationService.editAccommodation(this.acommodationOutput.id, this.acommodationOutput.availableFrom, this.acommodationOutput.availableTo, this.acommodationOutput.price, this.acommodationOutput.isPricePerGuest).subscribe(res => {
      console.log(this.acommodationOutput);
      alert(`Acommodation with name ${this.acommodationOutput.name} has sucesfully been updated!`);
    })
  }
}
