import { Schedule } from "../interface/schedule";
import { Team } from "../interface/team";

export const SEASON_SCHEDULE:Schedule[]=[
    {id:1,PlayingDate:new Date(2021,08,10),HomeTeam:'persib',
    AwayTeam:'persija',HomeScore:5,AwayScore:6,
    RefName:'udin',notes:'overtime'},
    {id:2,PlayingDate:new Date(2021,08,11),HomeTeam:'Tepos',
    AwayTeam:'BadutMPL',HomeScore:5,AwayScore:6,
    RefName:'KB',notes:'badut ngelawak'},
    {id:3,PlayingDate:new Date(2021,08,15),HomeTeam:'blackgay',
    AwayTeam:'onic',HomeScore:5,AwayScore:6,
    RefName:'rijen',notes:'apakah ohmyvenus wanita?'},
    {id:4,PlayingDate:new Date(2021,08,14),HomeTeam:'BTR',
    AwayTeam:'Luminairesibadut',HomeScore:5,AwayScore:6,
    RefName:'ericolim',notes:'mereka memanggilku pahlawan'},
    {id:5,PlayingDate:new Date(2021,08,18),HomeTeam:'setang',
    AwayTeam:'bagol',HomeScore:5,AwayScore:6,
    RefName:'marsha ozawa',notes:'apa itu setan'},
]
export const Teams:Team[]=[
    {id:1,name:'persija',type:'local'},
    {id:2,name:'persib',type:'local'},
    {id:3,name:'Tepos',type:'local'},
    {id:4,name:'BadutMPL',type:'local'},
    {id:4,name:'blackgay',type:'internasional'},
    {id:5,name:'onic',type:'local'},
    {id:6,name:'BTR',type:'local'},
    {id:7,name:'Luminairesibadut',type:'local'},
    {id:8,name:'setang',type:'local'},
    {id:9,name:'bagol',type:'local'},
]