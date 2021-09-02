import { CheckpointPricePipe } from './checkpoint-price.pipe';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatPricePipe } from './format-price.pipe';

@NgModule({
    declarations: [CheckpointPricePipe, FormatPricePipe],
    imports: [
        CommonModule,
    ],
    exports: [CheckpointPricePipe, FormatPricePipe],
    providers: [CheckpointPricePipe]
})
export class PipeModule { }
