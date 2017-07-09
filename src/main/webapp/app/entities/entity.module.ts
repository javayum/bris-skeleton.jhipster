import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SkeletonParameterModule } from './parameter/parameter.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        SkeletonParameterModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SkeletonEntityModule {}
