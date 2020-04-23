import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './pages/input/admin/admin.component';
import { DetalleAlumnoComponent } from './pages/input/detalle-alumno/detalle-alumno.component';
import { FormAlumnoComponent } from './pages/input/form-alumno/form-alumno.component';
import { TablaAlumnoComponent } from './pages/input/tabla-alumno/tabla-alumno.component';
import { ListadoAlumnoComponent } from './pages/input/alumno/listado-alumno/listado-alumno.component';
 
@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    LoginComponent,
    ErrorComponent,
    HomeComponent,
    AdminComponent,
    DetalleAlumnoComponent,
    FormAlumnoComponent,
    TablaAlumnoComponent,
    ListadoAlumnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }