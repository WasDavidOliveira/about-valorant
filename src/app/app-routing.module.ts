import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentesComponent } from './pages/agentes/agentes.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MapasComponent } from './pages/mapas/mapas.component';
import { WeaponsPageComponent } from './pages/weapons-page/weapons-page.component';
import { ElosPageComponent } from './pages/elos-page/elos-page.component';
import { TemporadasPageComponent } from './pages/temporadas-page/temporadas-page.component';
import { CardPlayersPageComponent } from './pages/card-players-page/card-players-page.component';

const routes: Routes = [
  { path: "agentes/:id", component: AgentesComponent },
  {path: "",  pathMatch: 'full', component: HomeComponent },
  {path: "mapas", component: MapasComponent},
  {path: "armas", component: WeaponsPageComponent},
  {path: "elos", component: ElosPageComponent},
  {path: "temporadas", component: TemporadasPageComponent},
  {path: "cards", component: CardPlayersPageComponent},

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
