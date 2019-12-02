import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { MessagesComponent } from './messages/messages.component';
import { PickNameComponent } from './pick-name/pick-name.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ChatService } from './services/chat.service';
import { MessagesService } from './services/messages.service';
import { PickNameService } from './services/pick-name.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        PickNameComponent,
        ChatComponent,
        MessagesComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', component: HomeComponent, pathMatch: 'full' }
        ]),

        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
