import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AccordionPage } from '../pages/accordion/accordion';
import { CheckboxPage } from '../pages/checkbox/checkbox';
import { CollapsePage} from '../pages/collapse/collapse';
import { DatepickerPage} from '../pages/datepicker/datepicker'
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

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Accordion', component: AccordionPage },
      { title: 'Checkbox', component: CheckboxPage },
      { title: 'Collapse', component: CollapsePage },
      { title: 'DatePicker', component: DatepickerPage },
      { title: 'Dimmer', component: DimmerPage },
      { title: 'Dropdown', component: DropdownPage },
      { title: 'Modal', component: ModalPage },
      { title: 'Popup', component: PopupPage },
      { title: 'Progress', component: ProgressPage },
      { title: 'Rating', component: RatingPage },
      { title: 'Search', component: SearchPage },
      { title: 'Select', component: SelectPage },
      { title: 'Sidebar', component: SidebarPage },
      { title: 'Tabs', component: TabsPage },
      { title: 'Transition', component: TransitionPage }
    ];

  }

  initializeApp() { 
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
}
