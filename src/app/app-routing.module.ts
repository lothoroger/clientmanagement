import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { ClientComponent } from './components/client/client.component'
import { ClientmeetingComponent } from './components/clientmeeting/clientmeeting.component'
import { NotfoundComponent } from './components/notfound/notfound.component'
const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'client', component: ClientComponent },
  { path: 'clientmeeting', component: ClientmeetingComponent },
  { path: '**', component: NotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
