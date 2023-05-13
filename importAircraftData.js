const xlsx = require('xlsx');

const fetchAircraftData = (limit) => {

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
  
  return combinedKeysData.slice(0, limit);
}


module.exports = fetchAircraftData;
