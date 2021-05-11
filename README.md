# node-xlsx-parser

Converting xlsx file to json or csv files using nodejs. 

## Install

```
  npm install node-xlsx-parser
```

## Usage

```javascript
  XLSXParser = require("xlsx-to-json");

  const jsonResult = new XLSXParser({
    input: "sample.xlsx",
    sheet: "sheet1", // specify a target sheet
  })
  .xlsx_to_json();

  const csvResult = new XLSXParser({
    input: "sample.xlsx",
  })
  .xlsx_to_csv();

  const {
    result: string, // csv or json formatted string
    error: string, // reason of the failure
  } = jsonResult || csvResult;
```

In config object, you have to enter an input path. But If you don't want to output any file you can set to `null`.

## License

MIT [@chilijung](http://github.com/chilijung)


