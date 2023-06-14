import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //ruta el modulo auth para cuando no esta logueado

  {path: 'auth',loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)
  },
// ruta del modulo pages para cuando SI esta logueado

  {path: 'pages',loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule)
  },

//redireccion por defecto cuando no se indica una ruta
  {path: '',
  redirectTo: 'auth',
  pathMatch: 'full',
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
