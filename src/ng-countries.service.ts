import { Injectable } from '@angular/core';
import { CountryCode, CountryCodes } from './ng-countries.interface';

/*
* https://en.wikipedia.org/wiki/ISO_3166-2:US
* https://en.wikipedia.org/wiki/ISO_3166-2
*/
@Injectable()
export class CountryCodeService {

  constructor() {

  }

  getCountries() : CountryCodes {
    let countries: CountryCodes;
    let countryUSA: CountryCode = { 
      ccTLD: ".us",
      alpha2Code: "US",
      countryName: "United States Of America",
      countryFlagImageUrl: new URL("https://www.usa.gov/sites/all/themes/usa/images/favicon-57.png"),
      yearOfAssignment: 1974
     }
    countries["ISO_3166-2:US"] = countryUSA;
    return countries;
  }
}
