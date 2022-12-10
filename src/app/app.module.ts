import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule,Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoinsMarketComponent } from './coins-market/coins-market.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Route[] = [
	{path: '', component:HomeComponent },
	{path: 'coins', component: CoinsMarketComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoinsMarketComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
		HttpClientModule,
		FormsModule,
		RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

