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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MouseOverDirective = /** @class */ (function () {
    function MouseOverDirective(e) {
        this.e = e;
        this.mouseovercolor = 'red';
    }
    MouseOverDirective.prototype.ChangeColor = function () {
        this.e.nativeElement.style.background = this.mouseovercolor;
    };
    MouseOverDirective.prototype.ResetColor = function () {
        this.e.nativeElement.style.background = 'white';
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MouseOverDirective.prototype, "mouseovercolor", void 0);
    __decorate([
        core_1.HostListener('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MouseOverDirective.prototype, "ChangeColor", null);
    __decorate([
        core_1.HostListener('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MouseOverDirective.prototype, "ResetColor", null);
    MouseOverDirective = __decorate([
        core_1.Directive({
            selector: '[mouseovercolor]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], MouseOverDirective);
    return MouseOverDirective;
}());
exports.MouseOverDirective = MouseOverDirective;
//# sourceMappingURL=mouseover.directive.js.map