import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PotService } from 'src/app/pot.service';

interface Rule{
  id: number,
  name: string
}

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.css']
})
export class DialogModalComponent {

  constructor(public dialog: MatDialog, public potService: PotService) {}

  mock_name: string = '';

  rules: Rule[] = [
    {id: 0, name: "Limit"},
    {id: 1, name: "Enddatum"},
    {id: 2, name: "AutoTransfer"},
    {id: 3, name: "Locked?"},
  ];

  close(){
    this.dialog.closeAll();
  }

  savePot(){
    console.log(this.mock_name)
    this.potService.pots.push({"name": this.mock_name, "goalProgress": 0,
    "rules":[
      "🔓 Open",
      "🎯 Goal: 0 / 500",
      "↗️ AutoTransfer: 2% of Income",
      "🕰️ 01.02.2025",
    ]})

  }

}
