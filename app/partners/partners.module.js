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
var partners_component_1 = require('./partners.component');
var partners_routing_module_1 = require('./partners-routing.module');
var PartnersModule = (function () {
    function PartnersModule() {
    }
    PartnersModule = __decorate([
        core_1.NgModule({
            imports: [
                partners_routing_module_1.PartnersRoutingModule
            ],
            declarations: [
                partners_component_1.PartnersComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], PartnersModule);
    return PartnersModule;
}());
exports.PartnersModule = PartnersModule;
//# sourceMappingURL=partners.module.js.map