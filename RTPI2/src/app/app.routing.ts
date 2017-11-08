import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SearchBarComponent } from './search/search-bar.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
	imports: [
				RouterModule.forRoot([
						{	path: 'search',	component: SearchBarComponent	},
						{	path: 'auth',	component: AuthComponent		},
						{	path: '',		redirectTo: 'search',	pathMatch: 'full'	}
					])
			],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}