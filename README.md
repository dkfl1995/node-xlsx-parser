# node-xlsx-parser

Converting xlsx file to json or csv files using nodejs. 

## Install

```
  npm install node-xlsx-parser
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

## License

MIT [@chilijung](http://github.com/chilijung)


