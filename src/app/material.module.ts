import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDividerModule,
    MatBadgeModule,
    MatListModule,
    MatIconModule,
    MatTooltipModule,
    MatRadioModule
} from '@angular/material';


@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatChipsModule,
        MatDividerModule,
        MatBadgeModule,
        MatListModule,
        MatIconModule,
        MatTooltipModule,
        MatRadioModule
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatChipsModule,
        MatDividerModule,
        MatBadgeModule,
        MatListModule,
        MatIconModule,
        MatTooltipModule,
        MatRadioModule
    ]

})
export class MaterialModule {}