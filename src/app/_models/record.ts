import { DecimalPipe } from "@angular/common";

export interface Record {
    id : number;
    session_identification : string;
    vehicle_identification : string;
    start_time : Date;
    end_time : Date;
    total_cost : number;
}
