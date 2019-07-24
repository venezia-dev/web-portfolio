import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDividerModule,
    MatBadgeModule,
    MatListModule,
    MatIconModule,
    MatTooltipModule
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
        MatTooltipModule
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatChipsModule,
        MatDividerModule,
        MatBadgeModule,
        MatListModule,
        MatIconModule,
        MatTooltipModule
    ]

})
export class MaterialModule {}