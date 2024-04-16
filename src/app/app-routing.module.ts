import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiEmpComponent } from './Component/api-emp/api-emp.component';
import { PageErrorComponent } from './Component/page-error/page-error.component';

const routes: Routes = [
  {path:'apiEmp', component:ApiEmpComponent },
  {path:'error', component:PageErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
