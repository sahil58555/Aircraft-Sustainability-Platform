const axios = require('axios');
const xlsx = require('xlsx');

const fetchAircraftData = async (limit) => {
  const fileUrl = 'https://docs.google.com/spreadsheets/d/1ANhv8wQzGBhu6mANUmmhaLCFQsEktc1M/export?format=xlsx';

  const response = await axios.get(fileUrl, { responseType: 'arraybuffer' });

  const workbook = xlsx.read(response.data, { type: 'buffer' });
  const sheetName = workbook.SheetNames[0]; 
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
};

module.exports = fetchAircraftData;
