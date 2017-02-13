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
require('rxjs/add/operator/switchMap');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var blog_service_1 = require('./blog.service');
var BlogAddComponent = (function () {
    function BlogAddComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    BlogAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.service.getBlog(+params['id']); })
            .subscribe(function (blog) { return _this.blog = blog; });
    };
    BlogAddComponent.prototype.gotoBlogs = function () {
        var blogId = this.blog ? this.blog.id : null;
        // Pass along the blog id if available
        // so that the BlogList component can select that blog.
        // Include a junk 'foo' property for fun.
        this.router.navigate(['/blog', { id: blogId, foo: 'foo' }]);
    };
    BlogAddComponent = __decorate([
        core_1.Component({
            styleUrls: ['app/blog/blog-add.component.css'],
            //  templateUrl: 'app/blog/blog-add.component.html'
            template: "\n  <h2>blogs</h2>\n  <div *ngIf=\"blog\">\n    <h3>\"{{ blog.body }}\"</h3>\n    <div>\n      <label>Id: </label>{{ blog.id }}</div>\n    <div>\n      <label>Body: </label>\n      <input [(ngModel)]=\"blog.body\" placeholder=\"blog\">\n    </div>\n    <p>\n      <button (click)=\"gotoBlogs()\">Back</button>\n    </p>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, blog_service_1.BlogService])
    ], BlogAddComponent);
    return BlogAddComponent;
}());
exports.BlogAddComponent = BlogAddComponent;
//# sourceMappingURL=blog-add.component.js.map