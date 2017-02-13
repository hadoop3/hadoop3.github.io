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
var shared_1 = require('../shared/shared');
var blogUrl = shared_1.CONFIG.baseUrls.blog;
var Comment = (function () {
    function Comment(id, author, excerpt) {
        this.id = id;
        this.author = author;
        this.excerpt = excerpt;
    }
    return Comment;
}());
exports.Comment = Comment;
var COMMENT = [
    new Comment(11, 'User 11', 'comment 11'),
    new Comment(12, 'User 12', 'comment 12'),
    new Comment(13, 'User 13', 'comment 13'),
    new Comment(14, 'User 14', 'comment 14'),
    new Comment(15, 'User 15', 'comment 15'),
    new Comment(16, 'User 16', 'comment 16')
];
var Blog = (function () {
    function Blog(id, title, excerpt, comments) {
        if (comments === void 0) { comments = []; }
        this.id = id;
        this.title = title;
        this.excerpt = excerpt;
        this.comments = comments;
    }
    return Blog;
}());
exports.Blog = Blog;
var BLOGS = [
    new Blog(11, 'Mr. Nice', 'excerpt of Blog 11', COMMENT),
    new Blog(12, 'Narco', '<h1>excerpt of Blog 12</h1>', COMMENT),
    new Blog(13, 'Bombasto', 'excerpt of Blog 13', COMMENT),
    new Blog(14, 'Celeritas', 'excerpt of Blog 14', COMMENT),
    new Blog(15, 'Magneta', 'excerpt of Blog 15', COMMENT),
    new Blog(16, 'RubberMan', 'excerpt of Blog 16', COMMENT)
];
var blogsPromise = Promise.resolve(BLOGS);
var BlogService = (function () {
    function BlogService() {
    }
    BlogService.prototype.getBlogs = function () { return blogsPromise; };
    BlogService.prototype.getBlog = function (id) {
        return blogsPromise
            .then(function (blogs) { return blogs.find(function (blog) { return blog.id === +id; }); });
    };
    BlogService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], BlogService);
    return BlogService;
}());
exports.BlogService = BlogService;
//# sourceMappingURL=blog.service.js.map