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
        "🔓 Offen",
        "🎯 Ziel: 300 / 500",
        "↗️ Transfer: 5% des Einkommens",
        "🕰️ 01.01.2025",
      ]
    },
    {
      name: "Urlaub auf Grand Canaria",
      goalProgress: 25,
      rules: [
        "🔒 Geschlossen",
        "🎯 Ziel: 5.000 / 20.000",
        "↗️ Transfer: 10% des Einkommens",
        "🕰️ 01.01.2025",
      ]
    },
    {
      name: "Test Bucket",
      goalProgress: 80,
      rules: [
        "Regel 1",
        "Regel 2",
        "Regel 3",
        "🕰️ 01.01.2025",
      ]
    },
    {
      name: "Lebensmittel | 100€ von 200€ übrig",
      goalProgress: 50,
      rules: [
        "Regel 1",
        "Regel 2",
        "Regel 3",
      ]
    }
  ]
}
