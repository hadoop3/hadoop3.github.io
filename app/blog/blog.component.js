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
function triggerEvent(elem, eventName, eventType) {
    var event = document.createEvent(eventType);
    event.initEvent(eventName, true, true);
    elem.dispatchEvent(event);
}
exports.triggerEvent = triggerEvent;
var BlogComponent = (function () {
    function BlogComponent() {
        this.dragOne = new core_1.EventEmitter();
        this.dragTwo = new core_1.EventEmitter();
        this.dragOneTwo = new core_1.EventEmitter();
        this.dropOne = new core_1.EventEmitter();
        this.dropTwo = new core_1.EventEmitter();
        this.dropOneTwo = new core_1.EventEmitter();
    }
    // tslint:disable-next-line
    BlogComponent.prototype.dragOneSuccessCallback = function ($event) {
        console.log('dragOneSuccessCallback');
        this.dragOne.emit($event);
    };
    // tslint:disable-next-line
    BlogComponent.prototype.dragTwoSuccessCallback = function ($event) {
        console.log('dragTwoSuccessCallback');
        this.dragOne.emit($event);
    };
    // tslint:disable-next-line
    BlogComponent.prototype.dragOneTwoSuccessCallback = function ($event) {
        console.log('dragOneTwoSuccessCallback');
        this.dragOneTwo.emit($event);
    };
    // tslint:disable-next-line
    BlogComponent.prototype.dropOneSuccessCallback = function ($event) {
        console.log('dropOneSuccessCallback');
        this.dropOne.emit($event);
    };
    // tslint:disable-next-line
    BlogComponent.prototype.dropTwoSuccessCallback = function ($event) {
        console.log('dropTwoSuccessCallback');
        this.dropTwo.emit($event);
    };
    // tslint:disable-next-line
    BlogComponent.prototype.dropOneTwoSuccessCallback = function ($event) {
        console.log('dropOneTwoSuccessCallback');
        this.dropOneTwo.emit($event);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], BlogComponent.prototype, "dragOne", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], BlogComponent.prototype, "dragTwo", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], BlogComponent.prototype, "dragOneTwo", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], BlogComponent.prototype, "dropOne", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], BlogComponent.prototype, "dropTwo", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], BlogComponent.prototype, "dropOneTwo", void 0);
    BlogComponent = __decorate([
        core_1.Component({
            // selector: 'container',
            templateUrl: 'app/blog/blog-component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], BlogComponent);
    return BlogComponent;
}());
exports.BlogComponent = BlogComponent;
//# sourceMappingURL=blog.component.js.map