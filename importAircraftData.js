const xlsx = require('xlsx');
const workbook = xlsx.readFile('aircraft_parts_data.xlsx');
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const jsonData = xlsx.utils.sheet_to_json(sheet, { range: 'A1:J10' });
console.log(jsonData);
