const XLSX = require('xlsx');
const parser = require('csv-parse/lib/sync');
const { readFileSync } = require('fs');
const { getFileContent } = require('./utils/fileResolver');

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
    const csv = XLSX.utils.sheet_to_csv(_worksheet, {
      ...options
    });
    
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
    const json = XLSX.utils.sheet_to_json(_worksheet, {
      defval: null,
      blankrows: false,
      raw: false,
      ...options
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
   * @param {*} file 
   * @param {*} options 
   * @returns 
   */
  csv_to_json(file, options) {
    if (!file) throw 'File is not defined!';

    let fileContent = getFileContent(file);

    if (!fileContent) return {
      ...this._defaultOutput,
      error: "Provide path to file or File object",
    }
    
    const records = parser(fileContent, {columns: true, ...options});

    if (!records) return {
      ...this._defaultOutput,
      error: "Failed to parse CSV",
    }

    return {
      result: records,
      error: null
    }
  }

  /**
   * 
   * @param {string} json 
   * @param {
   *  {
   *    sheetOptions: XLSX.JSON2SheetOpts, 
   *    csvOptions: XLSX.Sheet2CSVOpts
   *  }
   * } options 
   */
  json_to_csv(json, options) {
    const _worksheet = XLSX.utils.json_to_sheet(json, options);

    const csv = XLSX.utils.sheet_to_csv(_worksheet)
  }

  /**
   * 
   * @param {Blob | File | array | string} data 
   * @returns {import('xlsx').WorkSheet}
   */
  _load_xlsx(data) {
    if (!data) throw 'File is not defined!';
    const _xlsxFileInfo = XLSX.read(data);

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
