"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = (function () {
    function Person(name, username, age) {
        if (age === void 0) { age = 22; }
        this.username = username;
        this.age = age;
        this.name = name;
    }
    Person.prototype.sayUserName = function () {
        console.log(this.username);
        console.log(typeof this.username);
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        if (this.type === void 0)
            return false;
        return true;
    };
    return Person;
}());
var David = (function (_super) {
    __extends(David, _super);
    function David(username) {
        return _super.call(this, 'David', username) || this;
    }
    return David;
}(Person));
var Plant = (function () {
    function Plant(species) {
        this._species = species;
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3)
                this._species = value;
            else
                this._species = 'Default';
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var Helpers = (function () {
    function Helpers() {
    }
    Helpers.claculateCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
var Project = (function () {
    function Project() {
        this.projectName = 'Default Project';
    }
    Project.prototype.calculateBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var Angular = (function (_super) {
    __extends(Angular, _super);
    function Angular(budget) {
        var _this = _super.call(this) || this;
        _this.projectName = 'New Angular Project';
        _this.budget = budget;
        return _this;
    }
    Angular.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return Angular;
}(Project));
var Singleton = (function () {
    function Singleton(name) {
        this.name = name;
    }
    Singleton.getInstance = function (name) {
        if (name === void 0) { name = 'The Singleton'; }
        if (!Singleton.instance)
            Singleton.instance = new Singleton(name);
        return Singleton.instance;
    };
    return Singleton;
}());
var Vue = Singleton.getInstance('vue app');
console.log(Vue.name);
console.log(Vue);
console.log(Singleton.getInstance());
var incharge = new Angular(105000);
incharge.changeName('InCharge App');
console.log(incharge.calculateBudget());
var me = new Person('David Saint', 'rich-saint', 23);
console.log(me);
