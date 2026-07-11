import { Routes } from '@angular/router';
import { Home } from './modules/pages/home/home';
import { About } from './modules/pages/about/about';
import { NotFound } from './modules/pages/not-found/not-found';
import { Posts } from './modules/pages/posts/posts';
import { Test } from './modules/posts/test/test';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: Home, pathMatch: 'full', title: 'Keiran Nelson' },
    { path: 'about', component: About, title: 'About - Keiran Nelson' },
    { path: 'posts', component: Posts, title: 'Posts - Keiran Nelson' },
    { path: 'posts/test', component: Test },
    { path: '**', component: NotFound, title: '404 Not Found - Keiran Nelson' } // Wildcard route for 404 pages
];
