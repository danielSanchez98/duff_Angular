import {Routes, RouterModule } from '@angular/router';
import {NgModule} from '@angular/core';


import {HomeContentComponent} from './components/home-content/home-content.component';
import {NosotrosContentComponent} from './components/nosotros-content/nosotros-content.component';
import {CervezasContentComponent} from './components/cervezas-content/cervezas-content.component';
import {TourContentComponent} from './components/tour-content/tour-content.component';


const routes: Routes = [
    {path: '', component: HomeContentComponent},
    {path: 'nosotros', component: NosotrosContentComponent},
    {path: 'cervezas', component: CervezasContentComponent},
    {path: 'tour', component: TourContentComponent},
];



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})

export class AppRoutingModule {};