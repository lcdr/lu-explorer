import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharsComponent } from './chars.component';

const charsRoutes: Routes = [
  { path: '', component: CharsComponent, data: { title: "Chars" } }
]

@NgModule({
  imports: [ RouterModule.forChild(charsRoutes) ],
  exports: [ RouterModule ]
})
export class CharsRoutingModule { }
