import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogModalComponent } from '../dialog-modal/dialog-modal.component';
import { PotService } from 'src/app/pot.service';


@Component({
  selector: 'app-fundingpot',
  templateUrl: './fundingpot.component.html',
  styleUrls: ['./fundingpot.component.css']
})


export class FundingpotComponent {

  constructor(public dialog: MatDialog, public potService: PotService) {}

  name = "Null";
  animal = "tiger"

  pots = this.potService.pots;

  deleteMe(s: string){
    console.log(s)
    const index = this.pots.findIndex(obj => obj.name === s);

    if (index !== -1) {
      this.pots.splice(index, 1);
    }
  }
  openDialog(){
    this.dialog.open(DialogModalComponent,{
      width: '1080px',
      height: '720px',
    });
  }

}
