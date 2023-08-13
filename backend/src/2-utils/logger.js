// import fs from "fs";
// import path from "path";
// import { fileURLToPath } from 'url'; // Import fileURLToPath function

// const __filename = fileURLToPath(import.meta.url); // Get the filename
// const __dirname = path.dirname(__filename); // Get the directory name

// const errorsLogFile = path.resolve(__dirname, "../errors.log");
// const activitiesLogFile = path.resolve(__dirname, "../activities.log");

// function logError(message, err) {
//     const now = new Date();
//     let msgToLog = now.toUTCString() + "\n";
//     msgToLog += message + "\n";
    
//     if (typeof err === "string") {
//         msgToLog += err + "\n";
//     }
    
//     if (err?.stack) {
//         msgToLog += `Stack: ${err.stack}`;
//     }
    
//     msgToLog += "\n--------------------------------------------------------------------------------------------\n";
    
//     fs.appendFile(errorsLogFile, msgToLog, () => {});
// }

// function logActivity(message) {
//     const now = new Date();
//     let msgToLog = now.toUTCString() + "\n";
//     msgToLog += message + "\n";
//     msgToLog += "\n--------------------------------------------------------------------------------------------\n";
    
//     fs.appendFile(activitiesLogFile, msgToLog, () => {});
// }

// export default {
//     logError,
//     logActivity
// };
