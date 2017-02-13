// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = require("@angular/core");
var dnd_config_1 = require('./dnd.config');
var dnd_service_1 = require('./dnd.service');
var draggable_component_1 = require('./draggable.component');
var droppable_component_1 = require('./droppable.component');
var sortable_component_1 = require('./sortable.component');
__export(require('./abstract.component'));
__export(require('./dnd.config'));
__export(require('./dnd.service'));
__export(require('./draggable.component'));
__export(require('./droppable.component'));
__export(require('./sortable.component'));
exports.providers = [
    dnd_config_1.DragDropConfig,
    { provide: dnd_service_1.DragDropService, useFactory: dnd_service_1.dragDropServiceFactory },
    { provide: dnd_service_1.DragDropSortableService, useFactory: dnd_service_1.dragDropSortableServiceFactory, deps: [dnd_config_1.DragDropConfig] }
];
var DndModule = (function () {
    function DndModule() {
    }
    DndModule.forRoot = function () {
        return {
            ngModule: DndModule,
            providers: exports.providers
        };
    };
    DndModule = __decorate([
        core_1.NgModule({
            declarations: [draggable_component_1.DraggableComponent, droppable_component_1.DroppableComponent, sortable_component_1.SortableContainer, sortable_component_1.SortableComponent],
            exports: [draggable_component_1.DraggableComponent, droppable_component_1.DroppableComponent, sortable_component_1.SortableContainer, sortable_component_1.SortableComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], DndModule);
    return DndModule;
}());
exports.DndModule = DndModule;
//# sourceMappingURL=dnd.module.js.map