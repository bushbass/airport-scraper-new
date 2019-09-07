import { getHTML, getArrivalTimes } from './lib/scraper';

const url =
  'https://tracker.flightview.com/FVAccess3/tools/fids/fidsDefault.asp?ffState=2&accCustId=PANYNJ&fidsId=20001&ffId=fA&ffAcid=&ffAl=&ffSimplestatus=&ffDepap=&ffArrap=EWR&ffDepdate=&ffArrdate=NOW&ffDephr=&ffArrhr=NOW&ffSortColumn=ArrivalDateTimeUpdated&ffSortDirection=ascending&ffSortPrevColumn=ArrivalOriginalDateTimeScheduled&ffSortPrevDirection=ascending&ffFilterAl=&ffFilterDepap=&ffFilterArrap=';

async function go(url) {
  getArrivalTimes(await getHTML(url));
}

go(url);
