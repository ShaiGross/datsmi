import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'main', loadChildren: './components/tabs/tabs.module#TabsPageModule' },
    { path: '', loadChildren: './components/login/login.module#LoginPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
