import { Component, OnInit } from '@angular/core';
import { Voiture } from '../model/Voiture.model';
import { ProduitService } from '../services/voiture.service';

@Component({
  selector: 'app-add-voiture',
  templateUrl: './add-voiture.component.html'
})
export class AddVoitureComponent implements OnInit {
  newProduit = new Voiture();
  constructor(private voitureService: VoitureService) {}
  addProduit() {
    console.log("xx")
    this.voitureService.ajouterProduits(this.newVoiture);
  }
  ngOnInit(): void {}
} 