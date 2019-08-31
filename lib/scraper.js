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
  singledFlightTimesList.map(item =>
    item ? console.log(convertTime12to24(item)) : null
  );
}
export { getHTML, getArrivalTimes };
