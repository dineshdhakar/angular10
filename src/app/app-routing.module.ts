import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JavascriptComponent } from './javascript/javascript.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [

  { path:"javascript" , component:JavascriptComponent},
  { path:"contact" , component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [ JavascriptComponent,
                                  ContactComponent
                                ];

