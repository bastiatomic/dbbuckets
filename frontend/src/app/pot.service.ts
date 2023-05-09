import { Injectable } from '@angular/core';

interface Pot {
  name: string,
  goalProgress: number,
  rules: string[],
}

@Injectable({
  providedIn: 'root'
})
export class PotService {

  constructor() { }

  pots: Pot[]  =[
    {
      name: "PlayStation 5",
      goalProgress: 60,
      
      rules: [
        "🔓 Open",
        "🎯 Goal: 300 / 500",
        "↗️ AutoTransfer: 5% of Income",
        "🕰️ 01.01.2025",
      ]
    },
    {
      name: "Urlaub auf Grand Canaria",
      goalProgress: 25,
      rules: [
        "🔒 Locked",
        "🎯 Goal: 5.000 / 20.000",
        "↗️ AutoTransfer: 10% of Income",
        "🕰️ 01.01.2025",
      ]
    },
    {
      name: "Mock Pot",
      goalProgress: 80,
      rules: [
        "Rule 1",
        "Rule 2",
        "Rule 3",
        "🕰️ 01.01.2025",
      ]
    },
    {
      name: "Lebensmittel | 100 left of 200€",
      goalProgress: 50,
      rules: [
        "Rule 1",
        "Rule 2",
        "Rule 3",
      ]
    }
  ]
}
