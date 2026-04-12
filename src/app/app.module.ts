import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ScrollRevealDirective } from './directives/scroll-reveal.directive';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AsideComponent } from './components/aside/aside.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { AgentesComponent } from './pages/agentes/agentes.component';
import { HomeComponent } from './pages/home/home.component';
import { AgenteSpecificComponent } from './components/agente-specific/agente-specific.component';
import { MapasComponent } from './pages/mapas/mapas.component';
import { MapsComponent } from './components/maps/maps.component';
import { WeaponsPageComponent } from './pages/weapons-page/weapons-page.component';
import { WeaponComponentComponent } from './components/weapon-component/weapon-component.component';
import { ElosPageComponent } from './pages/elos-page/elos-page.component';
import { ElosComponentComponent } from './components/elos-component/elos-component.component';
import { TemporadasPageComponent } from './pages/temporadas-page/temporadas-page.component';
import { TemporadasComponentComponent } from './components/temporadas-component/temporadas-component.component';
import { CardsPlayersServiceComponent } from './components/cards-players-service/cards-players-service.component';
import { CardPlayersPageComponent } from './pages/card-players-page/card-players-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AsideComponent,
    FooterComponent,
    MainComponent,
    AgentesComponent,
    HomeComponent,
    AgenteSpecificComponent,
    MapasComponent,
    MapsComponent,
    WeaponsPageComponent,
    WeaponComponentComponent,
    ElosPageComponent,
    ElosComponentComponent,
    TemporadasPageComponent,
    TemporadasComponentComponent,
    CardsPlayersServiceComponent,
    CardPlayersPageComponent,
    ScrollRevealDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
