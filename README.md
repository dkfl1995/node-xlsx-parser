# node-xlsx-parser

Converting xlsx file to json or csv files using nodejs.
Long story short, our commercial project needed lightweight, 
pretty simple and up-to-date tool for converting btw XLSX/CSV/JSON.
So, came here to share it with you guys.

## Install
### NPM
```
  npm install node-xlsx-parser
```
### Yarn
```
  yarn add node-xlsx-parser
```


## Usage

```javascript
  XLSXParser = require("xlsx-to-json");

  const jsonFromXLSX = new XLSXParser()
  .xlsx_to_json(
    input, // file/blob/base64/string/array/buffer as xlsx to convert to json
    options // options from require('xlsx').xlsx_to_json()
  );

  const csvFromXLSX = new XLSXParser()
  .xlsx_to_csv(
    input, // file/blob/base64/string/array/buffer as xlsx to convert to json
    options // options from require('xlsx').xlsx_to_csv()
  );

  const jsonFromCSV = new XLSXParser()
  .csv_to_json(
    input, // file/blob/path as xlsx to convert to json
    options // options from require('xlsx').xlsx_to_csv()
  );

  const {
    result: string, // csv or json formatted string
    error: string, // reason of the failure
  } = jsonFromXLSX || csvFromXLSX || jsonFromCSV;
```

## Thoughts

Feel free guys, to share you PRs to `develop` branch with some proposals. I will greetely review all of them as soon as I can for sure)

## License

MIT [@dkfl1995](http://github.com/dkfl1995)


