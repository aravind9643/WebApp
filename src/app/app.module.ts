import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NamesService } from './names.service';
import { AboutComponent } from './about/about.component';
import { BaseConComponent } from './base-con/base-con.component';


const routeList: Routes = [
  {path: '', component: HomeComponent },
  {path: 'about', component: AboutComponent },
  {path: 'baseconverter', component: BaseConComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BaseConComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routeList),
    ReactiveFormsModule
  ],
  providers: [NamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
