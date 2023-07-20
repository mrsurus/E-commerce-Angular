import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './MyComponents/header/header.component';
import { LeftIconeBarComponent } from './MyComponents/left-icone-bar/left-icone-bar.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { TopBarComponent } from './MyComponents/home/top-bar/top-bar.component';
import { HomeSidebarComponent } from './MyComponents/home/home-sidebar/home-sidebar.component';
import { MainHomeComponent } from './MyComponents/home/main-home/main-home.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzModalI18nInterface } from 'ng-zorro-antd/i18n';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import {NzDividerModule} from 'ng-zorro-antd/divider'
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzButtonModule} from 'ng-zorro-antd/button';
import { HomeTableComponent } from './MyComponents/home/main-home/home-table/home-table.component'
import { NzIconModule } from 'ng-zorro-antd/icon'

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftIconeBarComponent,
    HomeComponent,
    TopBarComponent,
    HomeSidebarComponent,
    MainHomeComponent,
    HomeTableComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzDividerModule,
    NzTableModule,
    NzButtonModule,
    NzIconModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
