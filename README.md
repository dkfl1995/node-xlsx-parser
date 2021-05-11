# node-xlsx-parser

Converting xlsx file to json or csv files using nodejs. 

## Install

```
  npm install node-xlsx-parser
```

## Usage

```javascript
  XLSXParser = require("xlsx-to-json");

  const jsonResult = new XLSXParser()
  .xlsx_to_json(
    input, // file/blob/base64/string/array/buffer as xlsx to convert to json
    options // optional things to do (nothing for now)
  );

  const csvResult = new XLSXParser()
  .xlsx_to_csv(
    input, // file/blob/base64/string/array/buffer as xlsx to convert to json
    options // optional things to do (nothing for now)
  );

  const {
    result: string, // csv or json formatted string
    error: string, // reason of the failure
  } = jsonResult || csvResult;
```

## License

MIT [@chilijung](http://github.com/chilijung)


