import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { RoomsComponent } from './rooms/rooms.component';
import { BillingComponent } from './billing/billing.component';
import { DesignComponent } from './design/design.component';
import { PackageComponent } from './package/package.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'package', component: PackageComponent },
  { path: 'design', component: DesignComponent },
  { path: 'billing', component: BillingComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];