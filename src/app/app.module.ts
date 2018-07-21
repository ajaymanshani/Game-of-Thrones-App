import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { BookComponent } from './book/book.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { BookInfoComponent } from './book-info/book-info.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterInfoComponent } from './character-info/character-info.component';
import { HouseComponent } from './house/house.component';
import { HouseInfoComponent } from './house-info/house-info.component';
import { FilterAliasesPipe } from './filter-aliases.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookComponent,
    FilterPipe,
    BookInfoComponent,
    CharactersComponent,
    CharacterInfoComponent,
    HouseComponent,
    HouseInfoComponent,
    FilterAliasesPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
