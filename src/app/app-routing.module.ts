import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './ui/layout/main/welcome.component';
import { SignalLock } from './ui/layout/main/signallock.component';
import { DinosaurComponent } from './ui/layout/main/dinosaur.component';

const routes: Routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'welcome', component: WelcomeComponent },
    { path: 'signallock', component: SignalLock },
    { path: 'dinosaur', component: DinosaurComponent },

      
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}