import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DirectivesModule } from '../directives/directives.module'
import { PopupContentService, PopupContent } from '../providers-v2/popup-content/popup-content'
import { ClickPopupComponent } from '../components-v2/click-popup/click-popup'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PopupContent,
    ClickPopupComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    DirectivesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PopupContent,
    ClickPopupComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PopupContentService
  ]
})
export class AppModule {}
