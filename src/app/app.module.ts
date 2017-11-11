import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { boardReducer } from './providers/board/board.reducer';
import { BoardEffects } from './providers/board/board.effects';
import { BoardService } from './providers/board/board.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      board : boardReducer
    }),
    EffectsModule.forRoot([BoardEffects]),
  ],
  providers: [BoardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
