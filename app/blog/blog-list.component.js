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
// TODO SOMEDAY: Feature Componetized like CrisisCenter
require('rxjs/add/operator/switchMap');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var blog_service_1 = require('./blog.service');
var BlogListComponent = (function () {
    function BlogListComponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
    }
    BlogListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.blogs = this.route.params
            .switchMap(function (params) {
            _this.selectedId = +params['id'];
            return _this.service.getBlogs();
        });
    };
    BlogListComponent.prototype.isSelected = function (blog) { return blog.id === this.selectedId; };
    BlogListComponent.prototype.onSelect = function (blog) {
        this.router.navigate(['/blog', blog.id]);
    };
    BlogListComponent = __decorate([
        core_1.Component({
            template: "\n    <div class=\"col-sm-4\" *ngFor=\"let blog of blogs | async\"\n        [class.selected]=\"isSelected(blog)\"\n        (click)=\"onSelect(blog)\">\n      <div class=\"card\">\n        <div class=\"card-block\">\n          <h3 class=\"card-title\">{{ blog.title }}</h3>\n          <p class=\"card-text\">{{ blog.excerpt }}</p>\n          <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n        </div>\n      </div>\n    </div>\n\n    <ul class=\"items\">\n      <li *ngFor=\"let blog of blogs | async\"\n        [class.selected]=\"isSelected(blog)\"\n        (click)=\"onSelect(blog)\">\n        <span class=\"badge\">{{ blog.title }}</span> {{ blog.excerpt }}\n        <ul *ngIf=\"blog.comments\">\n          <li *ngFor=\"let comment of blog.comments\">\n            {{comment.id}} {{comment.author}} {{comment.excerpt}}\n        </li>\n    </ul>\n      </li>\n    </ul>\n\n    <button routerLink=\"/sidekicks\">Go to sidekicks</button>\n  "
        }), 
        __metadata('design:paramtypes', [blog_service_1.BlogService, router_1.ActivatedRoute, router_1.Router])
    ], BlogListComponent);
    return BlogListComponent;
}());
exports.BlogListComponent = BlogListComponent;
//# sourceMappingURL=blog-list.component.js.map