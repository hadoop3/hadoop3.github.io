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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var blog_component_1 = require('./blog.component');
var blog_list_component_1 = require('./blog-list.component');
var blog_detail_component_1 = require('./blog-detail.component');
var blog_add_component_1 = require('./blog-add.component');
var blog_service_1 = require('./blog.service');
var blog_routing_module_1 = require('./blog-routing.module');
var dnd_module_1 = require('../draganddrop/dnd.module');
var BlogModule = (function () {
    function BlogModule() {
    }
    BlogModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                blog_routing_module_1.BlogRoutingModule,
                dnd_module_1.DndModule
            ],
            declarations: [
                blog_component_1.BlogComponent,
                blog_list_component_1.BlogListComponent,
                blog_detail_component_1.BlogDetailComponent,
                blog_add_component_1.BlogAddComponent
            ],
            providers: [
                blog_service_1.BlogService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], BlogModule);
    return BlogModule;
}());
exports.BlogModule = BlogModule;
//# sourceMappingURL=blog.module.js.map