import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { NZ_I18N, pt_BR } from 'ng-zorro-antd';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProdutosModule } from './produtos/produtos.module';


registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProdutosModule
  ],
  providers: [{
    provide: NZ_I18N, useValue: pt_BR
  }],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
