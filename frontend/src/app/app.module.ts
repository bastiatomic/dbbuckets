import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AccountsOverviewComponent } from './components/accounts-overview/accounts-overview.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FundingpotComponent } from './components/fundingpot/fundingpot.component';
import { MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule} from '@angular/material/dialog';
import { DialogModalComponent } from './components/dialog-modal/dialog-modal.component';
import { MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule} from '@angular/material/card'
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar'
import {MatIconModule} from '@angular/material/icon';
import { OverviewComponent } from './components/overview/overview.component';
import { SliderComponent } from './components/slider/slider.component';
import {MatSliderModule} from '@angular/material/slider';

const routes: Routes = [
  
  { path: 'overview', component: OverviewComponent },
  { path: 'buckets', component: FundingpotComponent },
  { path: 'slider', component: SliderComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    AccountsOverviewComponent,
    AccountDetailsComponent,
    FundingpotComponent,
    DialogModalComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressBarModule,
    MatIconModule,
    MatSliderModule
  ],
  exports: [RouterModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
