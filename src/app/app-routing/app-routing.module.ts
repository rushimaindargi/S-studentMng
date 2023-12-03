import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ShowallpostsComponent } from '../showallposts/showallposts.component';
import { CreatepostComponent } from '../createpost/createpost.component';
import { UpdatepostComponent } from '../updatepost/updatepost.component';

const routes: Route[] = [
  {path:'',redirectTo: 'posts', pathMatch:'full'},
  {path:'posts', component:ShowallpostsComponent},
  {path:'posts/create', component:CreatepostComponent},
  {path:'posts/update/:id',component:UpdatepostComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
