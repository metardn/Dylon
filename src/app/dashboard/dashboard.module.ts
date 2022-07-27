import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { CanvasComponent } from './canvas/canvas.component';
import { IconDashboardComponent } from '../icons/icon-dashboard.component';
import { IconCalendarComponent } from '../icons/icon-calendar.component';
import { IconOverviewComponent } from '../icons/icon-overview.component';
import { IconResultComponent } from '../icons/icon-result.component';
import { IconPitchsComponent } from '../icons/icon-pitchs.component';
import { IconLogoComponent } from '../icons/icon-logo.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    CanvasComponent,
    IconDashboardComponent,
    IconCalendarComponent,
    IconOverviewComponent,
    IconResultComponent,
    IconPitchsComponent,
    IconLogoComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ]
})
export class DashboardModule { }
