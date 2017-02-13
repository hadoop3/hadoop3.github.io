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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var alert_closeable_1 = require('./alert-closeable');
var dnd_module_1 = require('./draganddrop/dnd.module');
var app_routing_module_1 = require('./app.routing.module');
var app_component_1 = require('./app.component');
var compose_message_component_1 = require('./compose-message.component');
var login_routing_module_1 = require('./login-routing.module');
var login_component_1 = require('./login.component');
var not_found_component_1 = require('./not-found.component');
var dialog_service_1 = require('./dialog.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                forms_1.ReactiveFormsModule,
                http_2.JsonpModule,
                ng_bootstrap_1.NgbModule.forRoot(),
                dnd_module_1.DndModule.forRoot(),
                login_routing_module_1.LoginRoutingModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                compose_message_component_1.ComposeMessageComponent,
                login_component_1.LoginComponent,
                not_found_component_1.PageNotFoundComponent,
                alert_closeable_1.NgbdAlertCloseable,
            ],
            providers: [
                dialog_service_1.DialogService
            ],
            exports: [platform_browser_1.BrowserModule, dnd_module_1.DndModule],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map