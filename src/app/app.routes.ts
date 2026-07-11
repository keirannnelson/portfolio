import { Routes } from '@angular/router';
import { Home } from './modules/pages/home/home';
import { About } from './modules/pages/about/about';
import { NotFound } from './modules/pages/not-found/not-found';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: Home, pathMatch: 'full', title: 'Keiran Nelson' },
    { path: 'about', component: About, title: 'About - Keiran Nelson' },
    //{ path: 'posts', component: Posts, title: 'Posts - Keiran Nelson' },
    //{ path: 'posts/:filename', component: Post },
    { path: '**', component: NotFound, title: '404 Not Found - Keiran Nelson' } // Wildcard route for 404 pages
];
