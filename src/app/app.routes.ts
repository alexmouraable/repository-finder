import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { StartComponent } from './components/start/start.component';
import { SearchComponent } from './components/search/search.component';
import { RepositoriesPageResolver } from './guards/repositories-page.resolver';

const routes: Routes = [
    {
        path: "start",
        component: StartComponent
    },
    {
        path: "search",
        component: SearchComponent,
        runGuardsAndResolvers: "always",
        resolve: {
            repositoriesPage: RepositoriesPageResolver
        },
    }
];

const config: ExtraOptions = {
    onSameUrlNavigation: "reload",
    scrollPositionRestoration: "top"
}

@NgModule({
    imports: [
        RouterModule.forRoot(routes, config)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutes { }