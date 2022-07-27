import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconDashboardComponent } from './icon-dashboard.component';
import { IconCalendarComponent } from './icon-calendar.component';
import { IconOverviewComponent } from './icon-overview.component';
import { IconResultComponent } from './icon-result.component';
import { IconPitchsComponent } from './icon-pitchs.component';
import { IconLogoComponent } from './icon-logo.component';


@NgModule({
  declarations: [
    IconDashboardComponent,
    IconCalendarComponent,
    IconOverviewComponent,
    IconResultComponent,
    IconPitchsComponent,
    IconLogoComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class IconModule { }
