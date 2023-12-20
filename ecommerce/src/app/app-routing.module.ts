import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'product/:id', component: DetailsComponent},
  {path: 'categories/:category', component:CategoriesComponent},
  {path: 'cart', component: CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
