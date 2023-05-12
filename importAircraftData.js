const xlsx = require('xlsx');
const {importData} = require("./Controllers/aircraftController")

const workbook = xlsx.readFile('aircraft_parts_data.xlsx');
const sheetName = workbook.SheetNames[0]; // assuming the data is in the first sheet
const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

const combinedKeysData = sheetData.map((row) => {
    const newRow = {};
    for (const key in row) {
      if (Object.hasOwnProperty.call(row, key)) {
        const newKey = key.charAt(0).toLowerCase() + key.slice(1);
        newRow[newKey.replace(/\s/g, '')] = row[key];
      }
    }
    return newRow;
  });

const limitedData = combinedKeysData.slice(0, 1);

for(const key in limitedData) {
  console.log(limitedData[key]);
  //importData(limitedData[key])
}
