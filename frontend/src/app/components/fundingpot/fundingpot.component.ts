import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogModalComponent } from '../dialog-modal/dialog-modal.component';
import { PotService } from 'src/app/pot.service';
import { PotDetailsModalComponent } from '../pot-details-modal/pot-details-modal.component';

interface Pot {
  name: string,
  goalProgress: number,
  rules: string[],
}

@Component({
  selector: 'app-fundingpot',
  templateUrl: './fundingpot.component.html',
  styleUrls: ['./fundingpot.component.css']
})


export class FundingpotComponent {

  constructor(public dialog: MatDialog, public potService: PotService) {}

  name = "Null";
  animal = "tiger"

  progressValue = 60

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
  openModal(s: Pot){
    console.log(s)
    this.dialog.open(PotDetailsModalComponent,{
      width: '1080px',
      height: '720px',
      data: {
        potData: s
      }
    });

  }

}
