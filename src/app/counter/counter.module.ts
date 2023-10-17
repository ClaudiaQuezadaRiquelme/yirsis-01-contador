import { NgModule } from '@angular/core';
import { CounterComponent } from './counter.component';
import { ButtonAddComponent } from './button-add/button-add.component';
import { ButtonSubComponent } from './button-sub/button-sub.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        CounterComponent,
        ButtonAddComponent,
        ButtonSubComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        CounterComponent,
    ]
})
export class CounterModule {}