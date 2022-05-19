import { google } from 'googleapis'

global.ggAuth = global.ggAuth || new google.auth.GoogleAuth
global.ggAuth.jsonContent = JSON.parse(process.env.GOOGLE_CRED)
global.ggAuth.scopes = ['https://www.googleapis.com/auth/spreadsheets']

global.sheetInstance = global.sheetInstance || google.sheets({ version: "v4", auth: global.ggauth })

export let sheetInstance = global.sheetInstance
export let ggAuth = global.global.ggAuth

export async function appendToSheet(spreadsheetId,range,arrelem){
  try{
    const allelem = arrelem.flat()
    await sheetInstance.spreadsheets.values.append({
      auth: global.ggAuth,
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [allelem],
    },
    })
  }catch(e){
    console.error(e)
  }
}




