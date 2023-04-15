import readXmlFile from './readXmlFile.js.js';
import xmlToJson from './xmlToJson.js.js';

(async () => {
  try {
    const response = await fetch('example2.xml');
    const xmlString = await response.text();
    const json = xmlToJson(xmlString);
    console.log(json);
  } catch (error) {
    console.error(error);
  }
})();
