import { Injectable } from '@angular/core';

/**
 * Transforms any input value
// The following is a complete list of the 249 current officially assigned ISO 3166-1 alpha-2 codes, with the following columns:
// Code — ISO 3166-1 alpha-2 code
// Country name — English short country name officially used by the ISO 3166 Maintenance Agency (ISO 3166/MA)[15]
// Year — Year when alpha-2 code was first officially assigned (1974, first edition of ISO 3166)
// ccTLD — Corresponding country code top-level domain (note that some are inactive); exceptions where another ccTLD is assigned for the country are shown in parentheseISO 3166-2 — Corresponding ISO 3166-2 codes
// Notes — Any unofficial notes
 */
export interface CountryCode {
    ccTLD: string;
    alpha2Code: string;
    countryName: string;
    countryFlagImageUrl: URL;
    yearOfAssignment: number;
    notes?: string;
}

export type CountryCodes = [string, CountryCode];