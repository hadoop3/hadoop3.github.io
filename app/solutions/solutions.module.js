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
var solutions_component_1 = require('./solutions.component');
var solutions_routing_module_1 = require('./solutions-routing.module');
var SolutionsModule = (function () {
    function SolutionsModule() {
    }
    SolutionsModule = __decorate([
        core_1.NgModule({
            imports: [
                solutions_routing_module_1.SolutionsRoutingModule
            ],
            declarations: [
                solutions_component_1.SolutionsComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SolutionsModule);
    return SolutionsModule;
}());
exports.SolutionsModule = SolutionsModule;
//# sourceMappingURL=solutions.module.js.map