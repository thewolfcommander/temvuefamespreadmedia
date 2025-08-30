import { ref } from 'vue'

export function useGoogleSheets() {
  const isLoading = ref(false)
  const error = ref(null)

  /**
   * Save form data to Google Sheets
   * Note: You'll need to set up a Google Apps Script Web App to handle the form submission
   * 
   * Steps to set up:
   * 1. Go to Google Sheets and create a new spreadsheet
   * 2. Go to Extensions > Apps Script
   * 3. Replace the code with the doPost function below
   * 4. Deploy as Web App and get the URL
   * 5. Replace GOOGLE_APPS_SCRIPT_URL with your deployed URL
   */
  
  // Replace with your Google Apps Script Web App URL
  const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyVmgXVJ5M-Ml03GmLA4Hfry_6fTGDYcL_9PICDU2B0MCVMXnbLXZl1QOATvCf5xL7aAQ/exec'

  const saveToGoogleSheets = async (formData) => {
    isLoading.value = true
    error.value = null

    try {
      // Prepare data for Google Sheets
      const dataToSend = { ...formData }

      // If Google Apps Script URL is not configured, just log the data
      if (GOOGLE_APPS_SCRIPT_URL === 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
        console.log('Form data to be sent to Google Sheets:', dataToSend)
        console.warn('Please configure your Google Apps Script URL in useGoogleSheets.js')
        
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // For demo purposes, return success
        return {
          success: true,
          message: 'Form data logged (Google Sheets not configured)'
        }
      }

      // Send data to Google Apps Script
      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Google Apps Script doesn't support CORS
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend)
      })

      // Since no-cors mode is used, we can't read the response
      // Assume success if no error is thrown
      return {
        success: true,
        message: 'Form submitted successfully'
      }

    } catch (err) {
      error.value = err.message
      throw err
    } finally {
      isLoading.value = false
    }
  }

  return {
    saveToGoogleSheets,
    isLoading,
    error
  }
}

/**
 * Google Apps Script Code (paste this in your Google Apps Script):
 * 
 * function doPost(e) {
 *   try {
 *     const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 *     const data = JSON.parse(e.postData.contents);
 *     
 *     // If this is the first entry, add headers
 *     if (sheet.getLastRow() === 0) {
 *       const headers = Object.keys(data);
 *       sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
 *     }
 *     
 *     // Add the data
 *     const values = Object.values(data);
 *     sheet.appendRow(values);
 *     
 *     return ContentService
 *       .createTextOutput(JSON.stringify({ success: true }))
 *       .setMimeType(ContentService.MimeType.JSON);
 *   } catch (error) {
 *     return ContentService
 *       .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
 *       .setMimeType(ContentService.MimeType.JSON);
 *   }
 * }
 * 
 * function doGet(e) {
 *   return ContentService
 *     .createTextOutput(JSON.stringify({ message: "This endpoint only accepts POST requests" }))
 *     .setMimeType(ContentService.MimeType.JSON);
 * }
 */