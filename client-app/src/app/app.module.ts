import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { WidgetComponent } from './components/widget/widget.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { WidgetPageComponent } from './pages/widget-page/widget-page.component';
import { TrackPageComponent } from './pages/track-page/track-page.component';
import { NewWidgetPageComponent } from './pages/new-widget-page/new-widget-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    WidgetComponent,
    AuthPageComponent,
    WidgetPageComponent,
    TrackPageComponent,
    NewWidgetPageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
