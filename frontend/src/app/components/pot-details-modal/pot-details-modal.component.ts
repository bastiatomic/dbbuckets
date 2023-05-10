import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pot-details-modal',
  templateUrl: './pot-details-modal.component.html',
  styleUrls: ['./pot-details-modal.component.css']
})
export class PotDetailsModalComponent {

  constructor(
    public dialogRef: MatDialogRef<PotDetailsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  content = this.data.potData;
  ngOnInit(){
    console.log(this.content)
    console.log(this.content.name)
  }
  close(){
    this.dialogRef.close();
  }

}
