/**
 * Google Apps Script for storing form submissions in Google Sheets
 * 
 * Setup Instructions:
 * 1. Replace YOUR_SHEET_ID with your actual Google Sheet ID
 * 2. Make sure your sheet has these columns: Timestamp, Name, Email, Phone, Subject, Message
 * 3. Deploy as a web app and give "Anyone" access
 */

const SHEET_ID = "YOUR_SHEET_ID"; // Replace with your sheet ID (from the URL)
const SHEET_NAME = "Sheet1"; // Change if your sheet has a different name

/**
 * Main function to handle POST requests from the contact form
 */
function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Get the spreadsheet and sheet
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    const sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    // Create a new row with the form data
    const timestamp = new Date();
    const newRow = [
      timestamp,                    // Column A: Timestamp
      data.name,                    // Column B: Name
      data.email,                   // Column C: Email
      data.phone,                   // Column D: Phone
      data.subject,                 // Column E: Subject
      data.massage                  // Column F: Message (note: typo in form "massage" instead of "message")
    ];
    
    // Add the row to the sheet
    sheet.appendRow(newRow);
    
    // Log the submission (visible in Apps Script logs)
    console.log("Form submitted by:", data.name, "at", timestamp);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({ 
      success: true,
      message: "Data saved successfully"
    }))
    .setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Log the error
    console.error("Error in doPost:", error);
    
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({ 
      success: false, 
      error: error.message 
    }))
    .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Test function (optional)
 * Run this in the Apps Script editor to test the setup
 */
function testSubmission() {
  // Create test data
  const testData = {
    name: "Test User",
    email: "test@example.com",
    phone: "1234567890",
    subject: "Test Subject",
    massage: "This is a test message"
  };
  
  // Simulate the POST request
  const payload = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  // Call doPost
  const response = doPost(payload);
  console.log(response);
}
