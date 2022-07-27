import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconDashboardComponent } from 'src/app/icons/icon-dashboard.component';
import { IconCalendarComponent } from 'src/app/icons/icon-calendar.component';
import { IconOverviewComponent } from 'src/app/icons/icon-overview.component';
import { IconResultComponent } from 'src/app/icons/icon-result.component';
import { IconPitchsComponent } from 'src/app/icons/icon-pitchs.component';
import { IconLogoComponent } from 'src/app/icons/icon-logo.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IconDashboardComponent,
    IconCalendarComponent,
    IconOverviewComponent,
    IconResultComponent,
    IconPitchsComponent,
    IconLogoComponent
  ]
})
export class SidebarModule { }
