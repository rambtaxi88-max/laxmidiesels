import { Routes } from '@angular/router';
import { Header } from './header/header';
import { Home } from './home/home';
import { About } from './about/about';
import { Product } from './product/product';
import { ServiceParts } from './service-parts/service-parts';
import { Contact } from './contact/contact';

export const routes: Routes = [
{    path:'header',component:Header},
    { path:'',component:Home
},
{path:'about',component:About},
{path:'product',component:Product},
{path:'ServiceParts',component:ServiceParts},
{path:'contact',component:Contact}
]

