"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var compose_message_component_1 = require('./compose-message.component');
var not_found_component_1 = require('./not-found.component');
var can_deactivate_guard_service_1 = require('./can-deactivate-guard.service');
var auth_guard_service_1 = require('./auth-guard.service');
//import { SelectivePreloadingStrategy }   from './selective-preloading-strategy';
var appRoutes = [
    {
        path: 'compose',
        component: compose_message_component_1.ComposeMessageComponent,
        outlet: 'popup'
    },
    {
        path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule',
        canLoad: [auth_guard_service_1.AuthGuard]
    },
    {
        path: 'home',
        loadChildren: 'app/home/home.module#HomeModule' //,
    },
    {
        path: 'documentation',
        loadChildren: 'app/documentation/documentation.module#DocumentationModule' //,
    },
    {
        path: 'partners',
        loadChildren: 'app/partners/partners.module#PartnersModule' //,
    },
    {
        path: 'pricing',
        loadChildren: 'app/pricing/pricing.module#PricingModule' //,
    },
    {
        path: 'products',
        loadChildren: 'app/products/products.module#ProductsModule' //,
    },
    {
        path: 'solutions',
        loadChildren: 'app/solutions/solutions.module#SolutionsModule' //,
    },
    {
        path: 'resources',
        loadChildren: 'app/resources/resources.module#ResourcesModule' //,
    },
    {
        path: 'support',
        loadChildren: 'app/support/support.module#SupportModule' //,
    },
    {
        path: 'user',
        loadChildren: 'app/user/user.module#UserModule' //,
    },
    {
        path: 'blog',
        loadChildren: 'app/blog/blog.module#BlogModule' //,
    },
    { path: '', redirectTo: '/user', pathMatch: 'full' },
    { path: '**', component: not_found_component_1.PageNotFoundComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(appRoutes) //,
            ],
            exports: [
                router_1.RouterModule
            ],
            providers: [
                can_deactivate_guard_service_1.CanDeactivateGuard //,
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app.routing.module.js.map