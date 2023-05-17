import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
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

  constructor(private acommodationService: AcommodationService, @Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<AddUpdatePriceComponent>) {
    this.data.availableFrom = new Date(this.data.availableFrom);
    this.data.availableTo = new Date(this.data.availableTo);

    const blankDate = new Date("0001-01-01 00:00:00 +0000 UTC");

    if (this.data.availableFrom.toISOString() === blankDate.toISOString() && this.data.availableTo.toISOString() === blankDate.toISOString()) {
      this.data.availableFrom = null;
      this.data.availableTo = null;

   }
  }
  

  public addUpdatePrice(): void {
    this.acommodationService.editAccommodation(this.data.id, this.data.availableFrom, this.data.availableTo, this.data.price, this.data.isPricePerGuest).subscribe(res => {

      console.log(res);
      alert(`Acommodation with name  has sucesfully been updated!`);
      this.dialogRef.close();
    })
  }
}
