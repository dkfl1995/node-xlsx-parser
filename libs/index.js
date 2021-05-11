const xlsx = require('xlsx');
const fs = require('fs');

////////

module.exports = class XLSXParser {
  _config = {};
  _defaultOutput = {
    result: null,
    error: null
  }

  /**
   * @description Define basic config
   * for XLSXParser
   * 
   * @param {Object} config
   */
  constructor(config) {
    this._config = {
      ...this._config,
      ...config
    }
  }

  /**
   * 
   * @param {Blob | File | array | string} data 
   * @param {Object} options 
   * @returns {string}
   */
  xlsx_to_csv(data, options) {
    const _worksheet = this._load_xlsx(data);
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

  /**
   * 
   * @param {Blob | File | array | string} data 
   * @param {Object} options 
   * @returns {any[]}
   */
  xlsx_to_json(data, options) {
    const _worksheet = this._load_xlsx(data);
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

  /**
   * 
   * @param {Blob | File | array | string} data 
   * @returns {import('xlsx').WorkSheet}
   */
  _load_xlsx(data) {
    if (!data) throw 'File is not defined!';
    const _xlsxFileInfo = xlsx.read(data);

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
