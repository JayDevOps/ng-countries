import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryCode, CountryCodes } from './ng-countries.interface';
import { CountryCodeService } from './ng-countries.service';

export * from './ng-countries.interface';
export * from './ng-countries.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ ],
  exports: [ ]
})
export class CountryCodeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CountryCodeModule,
      providers: [
        CountryCodeService
      ]
    };
  }
}
