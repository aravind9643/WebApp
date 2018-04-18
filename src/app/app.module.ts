import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NamesService } from './names.service';
import { AboutComponent } from './about/about.component';
import { BaseConComponent } from './base-con/base-con.component';
import { WeatherComponent } from './weather/weather.component';


const routeList: Routes = [
  {path: '', component: HomeComponent },
  {path: 'about', component: AboutComponent },
  {path: 'baseconverter', component: BaseConComponent},
  {path: 'weather', component: WeatherComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BaseConComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routeList),
    HttpModule
  ],
  providers: [NamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
