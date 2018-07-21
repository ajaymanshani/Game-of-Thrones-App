import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

 
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { BookInfoComponent } from './book-info/book-info.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterInfoComponent } from './character-info/character-info.component';
import { HouseComponent } from './house/house.component';
import { HouseInfoComponent } from './house-info/house-info.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'book', component: BookComponent },
    { path: 'books/:currentBookId', component:BookInfoComponent},
    { path: 'character', component: CharactersComponent},
    { path: 'characters/:currentCharacterId', component: CharacterInfoComponent},
    { path: 'house', component: HouseComponent},
    { path: 'houses/:currentHouseId', component: HouseInfoComponent}
];
 
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
 
export class AppRoutingModule { }