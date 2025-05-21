import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AgGridListComponent } from './Components/ag-grid-list/ag-grid-list.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'grid-list',
        component:AgGridListComponent
    },
    {
        path:'',
        redirectTo:'/home',
        pathMatch:'full'
    },
    {
        path:'**',
        component:PageNotFoundComponent
    }
];
