import { Component, OnInit } from '@angular/core';
import { Voiture } from '../model/voiture.model';
import { VoitureService } from '../services/voiture.service';

@Component({
  selector: 'app-voiture',
  templateUrl: './voitures.component.html'
})
export class ProduitsComponent implements OnInit {
  produits: Voiture[];
  constructor(private voitureService: VoitureService) {
    this.voitures = voitureService.listeVoitures();
  }

  ngOnInit(): void {}
}

