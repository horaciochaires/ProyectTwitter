import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
// Components
import { AppComponent } from './app.component';
import { InicioComponent } from './page/inicio/inicio.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TimeLineComponent } from './components/time-line/time-line.component';
import { ToolsComponent } from './components/tools/tools.component';
// others
import { FilterPipeModule } from 'ngx-filter-pipe';
// service
import { TimeLineService } from './service/timeLine/time-line.service';
import { OthersService } from './service/others/others.service';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavBarComponent,
    ProfileComponent,
    TimeLineComponent,
    ToolsComponent,

  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,NgbModule.forRoot()  ],
  providers: [TimeLineService,OthersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
