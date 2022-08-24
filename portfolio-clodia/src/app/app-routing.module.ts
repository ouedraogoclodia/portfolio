import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { IndexComponent } from './index/index.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'index', component: IndexComponent},
  { path: 'skills', component: SkillsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
