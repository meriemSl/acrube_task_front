import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchComponentComponent } from './launch-component/launch-component.component';


const routes: Routes = [ {
  path: '',
  component: LaunchComponentComponent
}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
