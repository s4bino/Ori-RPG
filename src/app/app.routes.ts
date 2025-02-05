import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { SelecionarPersonagemComponent } from './pages/selecionar-personagem/selecionar-personagem.component';
import { RegrasComponent } from './pages/regras/regras.component';
import { HistoriasComponent } from './pages/historias/historias.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'selecionar-personagem', component: SelecionarPersonagemComponent },
    { path: 'regras', component: RegrasComponent },
    { path: 'historias', component: HistoriasComponent },
    { path: '**', redirectTo: '' }
];
