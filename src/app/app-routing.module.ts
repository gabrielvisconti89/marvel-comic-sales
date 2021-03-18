import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './routes/login/login.component';
import { RegisterComponent } from './routes/register/register.component';
import { MyComicsComponent } from './routes/my-comics/my-comics.component';
import { MyFavoritesComponent } from './routes/my-favorites/my-favorites.component';
import { MoreInfoComponent } from './routes/more-info/more-info.component';

const routes: Routes = [
	{ 
		path: 'home', 
		loadChildren: () => import('./routes/home/home.module').then(
		  module => module.HomeModule
		)
	},
	{ 
		path: 'login', 
		component: LoginComponent 
	},
	{ 
		path: 'register', 
		component: RegisterComponent 
	},
	{ 
		path: 'my-comics', 
		component: MyComicsComponent 
	},
	{ 
		path: 'my-favorites', 
		component: MyFavoritesComponent 
	},
	{ 
		path: 'more-info', 
		component: MoreInfoComponent 
	},
	{ 
		path: '**', 
		redirectTo: 'home' 
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
