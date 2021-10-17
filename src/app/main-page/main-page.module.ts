import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../shared/material.module';
// import { DriverComponent } from 'pages/driver/driver.component';
import { SearchPanelComponent } from '../controls/search-panel/search-panel.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainPageComponent,
    ToolbarComponent,
    NavbarComponent,
    // DriverComponent,
    // BrowserAnimationsModule,
    // NoopAnimationsModule,
    SearchPanelComponent,
  ],
  imports: [CommonModule, MainPageRoutingModule, MaterialModule, FormsModule],
})
export class MainPageModule {}
