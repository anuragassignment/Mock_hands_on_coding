import { DataService } from './services/data.service';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DataComponent } from './sidebar/data/data.component';
import { AboutComponent } from './sidebar/about/about.component';
import { ContactComponent } from './sidebar/contact/contact.component';
import { ClientsComponent } from './sidebar/clients/clients.component';
import { ServicesComponent } from './sidebar/services/services.component';
import { HttpModule } from '@angular/http';

const appRoutes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: 'about', component: AboutComponent },
      { path: 'clients', component: ClientsComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'datatable', component: DataComponent }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DataComponent,
    AboutComponent,
    ContactComponent,
    ClientsComponent,
    ServicesComponent,
    HomeComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
