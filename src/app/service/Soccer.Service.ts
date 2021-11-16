import { Injectable } from "@angular/core";
import { SEASON_SCHEDULE, Teams } from "./scheduleData";

@Injectable({
    providedIn:'root',
})

export class SoccerService{
    getScheduleAsync(){
        return Promise.resolve(SEASON_SCHEDULE);
    }
    getSchedule(){
        return SEASON_SCHEDULE;
    }
    getTeamAsync(){
        return Promise.resolve(Teams);
    }
    getTeam(){
        return Teams;
    }

    private computerRangking(){
        
    }
}