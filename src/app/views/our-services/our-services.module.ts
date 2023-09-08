import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurServicesRoutingModule } from './our-services-routing.module';
import { IntegratedLogisticsSolutionComponent } from './integrated-logistics-solution/integrated-logistics-solution.component';
import { DoorToDoorComponent } from './door-to-door/door-to-door.component';
import { AirFreightComponent } from './air-freight/air-freight.component';
import { SeaFreightComponent } from './sea-freight/sea-freight.component';
import { CharteringServicesComponent } from './chartering-services/chartering-services.component';
import { CustomClearanceComponent } from './custom-clearance/custom-clearance.component';
import { RoadTransportComponent } from './road-transport/road-transport.component';
import { WaterTransportBargingComponent } from './water-transport-barging/water-transport-barging.component';
import { HeavyLiftOversizeCargoComponent } from './heavy-lift-oversize-cargo/heavy-lift-oversize-cargo.component';
import { LogisticsForCommoditiesTradingComponent } from './logistics-for-commodities-trading/logistics-for-commodities-trading.component';
import { ProjectHandlingComponent } from './project-handling/project-handling.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ServicesComponent } from './services/services.component';
import { WarehousingAndDistributionComponent } from './warehousing-and-distribution/warehousing-and-distribution.component';


@NgModule({
  declarations: [
    IntegratedLogisticsSolutionComponent,
    DoorToDoorComponent,
    AirFreightComponent,
    SeaFreightComponent,
    CharteringServicesComponent,
    CustomClearanceComponent,
    RoadTransportComponent,
    WaterTransportBargingComponent,
    HeavyLiftOversizeCargoComponent,
    LogisticsForCommoditiesTradingComponent,
    ProjectHandlingComponent,
    ServicesComponent,
    WarehousingAndDistributionComponent
  ],
  imports: [
    CommonModule,
    OurServicesRoutingModule,
    SharedModule
  ]
})
export class OurServicesModule { }
