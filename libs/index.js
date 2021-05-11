const xlsx = require('xlsx');

////////

module.exports = class XLSXParser {
  _config = {};
  _defaultOutput = {
    result: null,
    error: null
  }

  constructor(config) {
    this._config = {
      ...this._config,
      ...config
    }
  }

  xlsx_to_csv(file, options) {
    const _worksheet = this._load_xlsx(file);
    const csv = xlsx.utils.sheet_to_csv(_worksheet);
    
    if (!csv) {
      return {
        ...this._defaultOutput,
        error: "failed to parse xlsx as csv",
      }
    }

    return {
      ...this._defaultOutput,
      result: csv
    }
  }

  xlsx_to_json(file, options) {
    const _worksheet = this._load_xlsx(file);
    const json = xlsx.utils.sheet_to_json(_worksheet, {
      defval: null,
      blankrows: false,
      raw: false
    });
    
    if (!json) {
      return {
        ...this._defaultOutput,
        error: "failed to parse xlsx as json",
      }
    }

    return {
      ...this._defaultOutput,
      result: json
    };
  }

  _load_xlsx(input) {
    if (!input) throw 'Input file is not defined!';

    const _xlsxFileInfo = xlsx.readFile(input);

    const _pickedWorksheet = this._pickXLSXSheet(_xlsxFileInfo);
    return _pickedWorksheet;
  }

  _pickXLSXSheet(xlsxFileInfo) {
    const { targetSheet } = this._config;
    let _targetSheet = targetSheet;

    if (!_targetSheet) _targetSheet = xlsxFileInfo.SheetNames[0]
    
    return xlsxFileInfo.Sheets[_targetSheet];
  }
}

///////
