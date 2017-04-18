import GoogleSheetConnector from "google-sheet-connector";

var CLIENT_ID = "yourClientId";
var API_KEY = "yourApiKey";
var SPREADSHEET_ID = "yourSpreadsheetId";

new GoogleSheetConnector({
    clientId: CLIENT_ID,
    apiKey: API_KEY,
    spreadsheetId: SPREADSHEET_ID
}, function() {
    this.getSheet("Sheet 1")
        .map(row => console.log(row));
});