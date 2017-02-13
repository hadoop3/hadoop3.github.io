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
var blog_component_1 = require('./blog.component');
var blog_list_component_1 = require('./blog-list.component');
var blog_detail_component_1 = require('./blog-detail.component');
var blog_add_component_1 = require('./blog-add.component');
var blogRoutes = [
    {
        path: '',
        component: blog_component_1.BlogComponent,
        children: [
            { path: '',
                component: blog_list_component_1.BlogListComponent
            },
            { path: ':id',
                component: blog_detail_component_1.BlogDetailComponent
            },
            { path: 'add',
                component: blog_add_component_1.BlogAddComponent
            },
            { path: 'edit/:id',
                component: blog_add_component_1.BlogAddComponent
            }
        ]
    }
];
var BlogRoutingModule = (function () {
    function BlogRoutingModule() {
    }
    BlogRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(blogRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], BlogRoutingModule);
    return BlogRoutingModule;
}());
exports.BlogRoutingModule = BlogRoutingModule;
//# sourceMappingURL=blog-routing.module.js.map