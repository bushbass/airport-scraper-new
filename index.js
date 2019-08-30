import {getHTML, getArrivalTimes} from './lib/scraper'

async function go(){
    getArrivalTimes(await getHTML('https://tracker.flightview.com/FVAccess3/tools/fids/fidsDefault.asp?ffState=2&accCustId=PANYNJ&fidsId=20001&ffId=fA&ffAcid=&ffAl=&ffSimplestatus=&ffDepap=&ffArrap=EWR&ffDepdate=&ffArrdate=NOW&ffDephr=&ffArrhr=NOW&ffSortColumn=ArrivalDateTimeUpdated&ffSortDirection=ascending&ffSortPrevColumn=ArrivalOriginalDateTimeScheduled&ffSortPrevDirection=ascending&ffFilterAl=&ffFilterDepap=&ffFilterArrap='));
}
go()