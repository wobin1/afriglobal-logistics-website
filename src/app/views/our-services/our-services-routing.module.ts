import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { ServicesComponent } from './services/services.component';
import { WarehousingAndDistributionComponent } from './warehousing-and-distribution/warehousing-and-distribution.component';

const routes: Routes = [
  {path: "services", component: ServicesComponent, children: [
    {path:"integrated-logistics-solution", component: IntegratedLogisticsSolutionComponent},
    {path: "door-to-door", component: DoorToDoorComponent},
    {path: "air-fright", component: AirFreightComponent},
    {path: "sea-fright", component: SeaFreightComponent},
    {path: "chartering-service", component: CharteringServicesComponent},
    {path: "custom-clearance", component: CustomClearanceComponent},
    {path: "road-transport", component: RoadTransportComponent},
    {path: "water-transport", component: WaterTransportBargingComponent},
    {path: "heavy-lift", component: HeavyLiftOversizeCargoComponent},
    {path: "logistics-for-comodities", component: LogisticsForCommoditiesTradingComponent},
    {path: "project-handling", component: ProjectHandlingComponent},
    {path: "warehousing-and-distribution", component: WarehousingAndDistributionComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurServicesRoutingModule { }
