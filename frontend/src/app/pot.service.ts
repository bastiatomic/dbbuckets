import { Injectable } from '@angular/core';

interface Pot {
  name: string,
  goalProgress: number,
  rules: string[],
  sharing: string | null,
}

@Injectable({
  providedIn: 'root'
})
export class PotService {

  constructor() { }

  pots: Pot[]  =[
    {
      name: "Rücklagen",
      goalProgress: 100,
      sharing: null,
      rules: [
        "🎯 Fortschritt: 1.000 / 1.000",
        "↗️ Monatlich 5% des Einkommens",
        "↗️ Überschuss geht an ROBIN-Account",
      ]
    },
    {
      name: "iPhone 15",
      goalProgress: 40,
      sharing: null,
      rules: [
        "🔓 Offen",
        "🎯 Ziel: 600 / 1.500",
        "↗️ Monatlicher Sparbetrag: 150€",
        "🕰️ 01.01.2025",
      ]
    },
    {
      name: "Urlaub auf Gran Canaria",
      goalProgress: 16,
      sharing: null,
      rules: [
        "🔒 Geschlossen",
        "🎯 Ziel: 500 / 3.000",
        "↗️ Monatlicher Sparbetrag: 250€",
        "🕰️ 01.01.2025",
      ]
    },
    
    
  ]
}
