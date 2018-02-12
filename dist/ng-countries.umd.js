(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global['ng-countries'] = {}),global.core,global.common));
}(this, (function (exports,core,common) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CountryCodeService = (function () {
    function CountryCodeService() {
    }
    /**
     * @return {?}
     */
    CountryCodeService.prototype.getCountries = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ countries;
        var /** @type {?} */ countryUSA = {
            ccTLD: ".us",
            alpha2Code: "US",
            countryName: "United States Of America",
            countryFlagImageUrl: new URL("https://www.usa.gov/sites/all/themes/usa/images/favicon-57.png"),
            yearOfAssignment: 1974
        };
        countries["ISO_3166-2:US"] = countryUSA;
        return countries;
    };
    CountryCodeService.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    CountryCodeService.ctorParameters = function () { return []; };
    return CountryCodeService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CountryCodeModule = (function () {
    function CountryCodeModule() {
    }
    /**
     * @return {?}
     */
    CountryCodeModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: CountryCodeModule,
            providers: [
                CountryCodeService
            ]
        };
    };
    CountryCodeModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule
                    ],
                    declarations: [],
                    exports: []
                },] },
    ];
    /** @nocollapse */
    CountryCodeModule.ctorParameters = function () { return []; };
    return CountryCodeModule;
}());

exports.CountryCodeModule = CountryCodeModule;
exports.CountryCodeService = CountryCodeService;

Object.defineProperty(exports, '__esModule', { value: true });

})));
