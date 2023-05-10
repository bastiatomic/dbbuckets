import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PotService } from 'src/app/pot.service';

interface Rule{
  id: number,
  name: string,
  type: string
}

interface setRules{
  name: string;
  value: string;
}

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.css']
})
export class DialogModalComponent {

  constructor(public dialog: MatDialog, public potService: PotService) {}

  mock_name: string = 'Bucket-Name #1';

  rules: Rule[] = [
    {id: 0, name: "Limit", type: "number"},
    {id: 1, name: "Enddatum", type: "date"},
    {id: 2, name: "AutoTransfer",  type: "text"},
    {id: 3, name: "Gesperrt?", type: "text"},
  ];

  newrules: setRules[] = [
    {name: "", value: ""}
  ]

  close(){
    this.dialog.closeAll();
  }

  addNewRule(){
    this.newrules.push({name: "null", value: ""})
  }

  savePot(){
    this.potService.pots.push({"name": this.mock_name, "goalProgress": 0,"sharing": null,
    "rules":[
      "🔓 Open",
      "🎯 Goal: 0 / 1000",
      "↗️ AutoTransfer: Keiner",
      "🕰️ 10.05.2025",
    ]})

  }

}
