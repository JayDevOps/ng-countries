import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
        { type: Injectable },
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [],
                    exports: []
                },] },
    ];
    /** @nocollapse */
    CountryCodeModule.ctorParameters = function () { return []; };
    return CountryCodeModule;
}());

export { CountryCodeModule, CountryCodeService };
