import { Component, OnInit } from '@angular/core';
import { Voiture } from '../model/voiture.model';
import { ProduitService } from '../services/voiture.service';

@Component({
  selector: 'app-add-voiture',
  templateUrl: './add-voiture.component.html',
  styleUrls: ['./add-voiture.component.css'],
})
export class AddVoitureComponent implements OnInit {
  newProduit = new Voiture();
  constructor(private voitureService: VoitureService) {}
  addVoiture() {
    this.voitureService.ajouterVoiture(this.newVoiture);
  }
  ngOnInit(): void {}
}