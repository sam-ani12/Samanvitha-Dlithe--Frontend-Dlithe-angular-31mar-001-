import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PastrylistComponent } from './pastrylist/pastrylist.component';
import { PastrylistDetailsComponent } from './pastrylist-details/pastrylist-details.component';


const routes: Routes = [
  { path: 'pastrylist', component: PastrylistComponent },
  { path: 'pastrylist-details',component: PastrylistDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
