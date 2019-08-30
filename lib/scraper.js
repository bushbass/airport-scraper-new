import axios from 'axios'
import cheerio from 'cheerio'

async function getHTML(url) {
    const {data: html}=await axios.get(url)
  return html
    
   
}

async function getArrivalTimes(html){
    const rawFlightTimesList = []
    const $ = cheerio.load(html)
    const span = $('.c7').each((i,element)=>{

  (element.children[1]) ? rawFlightTimesList.push(element.children[1].data):null;
  
   }   )
   const singledFlightTimesList = [ ... new Set(rawFlightTimesList)]
   
    console.log(singledFlightTimesList);
    
}
export {getHTML, getArrivalTimes}
