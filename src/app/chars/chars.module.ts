import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuiModule } from '../gui/gui.module';
import { UtilModule } from '../util/util.module';

import { CharsComponent } from './chars.component';
import { XmlElemComponent } from './xml-elem/xml-elem.component';
import { CharsRoutingModule } from './chars-routing.module';

@NgModule({
  declarations: [
    CharsComponent,
    XmlElemComponent,
  ],
  imports: [
    CommonModule,
    GuiModule,
    UtilModule,
    CharsRoutingModule
  ]
})
export class CharsModule { }
