import { Injectable } from '@angular/core';
import { Voiture } from '../model/voiture.model';

@Injectable({
  providedIn: 'root',
})
export class VoitureService {
  produits: Voiture[];
  constructor() {
    this.voitures = [
      {
        idVoiture: 1,
        nomVoiture: 'bmw',
        prixVoiture: 100.000,
        dateCreation: new Date('01/14/2011'),
      },
      {
        idVoiture: 1,
        nomVoiture: 'audi',
        prixVoiture: 300.000,
        dateCreation: new Date('01/14/2014'),
      },
      {
        idVoiture: 1,
        nomVoiture: 'mercedesbenz',
        prixVoiture: 500.000,
        dateCreation: new Date('01/04/2016'),
      },
    ];
  }

  listeVoitures(): Voiture[] {
    return this.voitures;
  }
  ajouterVoitures(prod: Voiture {
    this.voitures.push(prod);
  }
}
