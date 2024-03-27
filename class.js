"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var user = /** @class */ (function () {
    function user(email, name) {
        this.email;
        this.name;
    } // Assigning the constructor parameters to the class properties
    return user;
}());
var mahesh = new user("m@b", "mahesh"); // Creating a new instance of the 'user' class
var Takephoto = /** @class */ (function () {
    function Takephoto(cameramode, filter) {
        this.cameramode = cameramode;
        this.filter = filter;
    }
    return Takephoto;
}()); // Defining an abstract class 'Takephoto'
var Instagram = /** @class */ (function (_super) {
    __extends(Instagram, _super);
    function Instagram() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Instagram;
}(Takephoto)); // Extending the 'Takephoto' class with the 'Instagram' class
var mb = new Instagram('test', 'test'); // Creating a new instance of the 'Instagram' class
