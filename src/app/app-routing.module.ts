import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgmToolsComponent } from './agm-tools/agm-tools.component';

const routes: Routes = [
 {path:'' , component: AgmToolsComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
