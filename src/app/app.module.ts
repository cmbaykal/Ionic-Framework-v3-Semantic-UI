import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SuiModule } from 'ng2-semantic-ui';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AccordionPage } from '../pages/accordion/accordion';
import { CheckboxPage } from '../pages/checkbox/checkbox';
import { CollapsePage} from '../pages/collapse/collapse';
import { DatepickerPage} from '../pages/datepicker/datepicker';
import { DimmerPage } from '../pages/dimmer/dimmer';
import { DropdownPage } from '../pages/dropdown/dropdown';
import { ModalPage } from '../pages/modal/modal';
import { PopupPage } from '../pages/popup/popup';
import { ProgressPage } from '../pages/progress/progress';
import { RatingPage } from '../pages/rating/rating';
import { SearchPage } from '../pages/search/search';
import { SelectPage } from '../pages/select/select';
import { SidebarPage } from '../pages/sidebar/sidebar';
import { TabsPage } from '../pages/tabs/tabs';
import { TransitionPage } from '../pages/transition/transition';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AccordionPage,
    CheckboxPage,
    CollapsePage,
    DatepickerPage,
    DimmerPage,
    DropdownPage,
    ModalPage,
    PopupPage,
    ProgressPage,
    RatingPage,
    SearchPage,
    SelectPage,
    SidebarPage,
    TabsPage,
    TransitionPage
  ],
  imports: [
    BrowserModule,
    SuiModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AccordionPage,
    CheckboxPage,
    CollapsePage,
    DatepickerPage,
    DimmerPage,
    DropdownPage,
    ModalPage,
    PopupPage,
    ProgressPage,
    RatingPage,
    SearchPage,
    SelectPage,
    SidebarPage,
    TabsPage,
    TransitionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
