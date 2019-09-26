import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InputComponent } from './components/input/input.component';
import { RendererComponent } from './components/renderer/renderer.component';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { number1Reducer } from './reducers/number1.reducer';
import { number2Reducer } from './reducers/number2.reducer';
import { EffectsModule } from '@ngrx/effects';
import { NumbersEffects } from './effects/numbers.effects';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    RendererComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    SharedModule,
    StoreModule.forRoot({
      number1: number1Reducer,
      number2: number2Reducer
    }),
    EffectsModule.forRoot([NumbersEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
