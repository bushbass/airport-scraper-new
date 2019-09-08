import axios from 'axios';
import cheerio from 'cheerio';
import { convertTime12to24 } from './convertTime12to24';

async function getHTML(url) {
  const { data: html } = await axios.get(url);
  return html;
}

async function getArrivalTimes(html) {
  const rawFlightTimesList = [];

  const $ = cheerio.load(html);

  //push times to array
  const span = $('.c7').each((i, element) => {
    element.children[1]
      ? rawFlightTimesList.push(element.children[1].data)
      : null;
  });

  //remove duplicate times
  const singledFlightTimesList = [...new Set(rawFlightTimesList)];

  //convert 12 to 24 hour time
  // singledFlightTimesList.map(item =>
  //   item ? console.log(convertTime12to24(item)) : null
  // );
  
  
  // get just the hours
  const justHoursList =  singledFlightTimesList.map(item =>
    item ? item.slice(-8,-6) : null
  );
  console.log(justHoursList)
  const countObj = {};
    for (let i = 0; i < justHoursList.length; i++) {
      !countObj[justHoursList[i]]
        ? (countObj[justHoursList[i]] = 1)
        : countObj[justHoursList[i]]++;
    }
   console.log(countObj)

}
export { getHTML, getArrivalTimes };
