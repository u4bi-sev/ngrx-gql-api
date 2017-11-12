import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

/* GraphQL */
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
/* ---------- */

import { boardReducer } from './providers/board/board.reducer';
import { BoardEffects } from './providers/board/board.effects';
import { BoardService } from './providers/board/board.service';
import { BoardRESTfulService } from './providers/board/model/board-restful.service';
import { BoardGraphQLService } from './providers/board/model/board-graphql.service';

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
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    /* GraphQL */
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
    /* ---------- */
  ],
  providers: [
    BoardService,
    BoardRESTfulService,
    BoardGraphQLService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

    /* GraphQL */
    constructor( apollo: Apollo, httpLink: HttpLink ){

        apollo.create({
            link: httpLink.create({ uri: 'http://localhost:7778/graphql' }),
            cache: new InMemoryCache({
                addTypename: false
            }
          )         
        });

    }
    /* ---------- */
}
