import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VoituresComponent} from './voitures/voitures.component';
import { AddVoitureComponent } from './add-Voiture/add-Voiture.component';

const routes: Routes = [
  {path : "Voitures" , component : VoituresComponent},
  {path : "add-Voitures" , component : AddVoitureComponent},
  {path: "", redirectTo: "Voitures", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
