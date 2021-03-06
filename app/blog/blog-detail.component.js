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
var BlogDetailComponent = (function () {
    function BlogDetailComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    BlogDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.service.getBlog(+params['id']); })
            .subscribe(function (blog) { return _this.blog = blog; });
    };
    BlogDetailComponent.prototype.gotoBlogs = function () {
        var blogId = this.blog ? this.blog.id : null;
        // Pass along the blog id if available
        // so that the BlogList component can select that blog.
        // Include a junk 'foo' property for fun.
        this.router.navigate(['/blog', { id: blogId, foo: 'foo' }]);
    };
    BlogDetailComponent = __decorate([
        core_1.Component({
            styleUrls: ['app/blog/blog-detail.component.css'],
            templateUrl: 'app/blog/blog-detail.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, blog_service_1.BlogService])
    ], BlogDetailComponent);
    return BlogDetailComponent;
}());
exports.BlogDetailComponent = BlogDetailComponent;
//# sourceMappingURL=blog-detail.component.js.map