import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { StoreListComponent } from "./components/store-list/store-list.component";

const routes: Routes = [
      { path: '', component: HomeComponent },
      { path: 'store', component: StoreListComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
