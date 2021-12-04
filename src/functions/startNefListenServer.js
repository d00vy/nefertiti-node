import { execFile } from 'child_process';
// import {spawn} from 'child_process';
import { executable } from './variables.js';

const executableArgs = ['listen', '--port=38700'];

export function startNefListenServer() {
  try {
    const { stdout, stderr } = execFile(executable, executableArgs);
    return stderr || stdout;
  } catch (err) {
    throw new Error(`Error: ${err}`);
  }
}

// Promise based execFile, but Nef listen server does not seem to respond with stdout
export async function startNefListenServerAsync() {
  try {
    const { stdout, stderr } = execFile(executable, executableArgs);
    return stderr || stdout;
  } catch (err) {
    throw new Error(`Error: ${err}`);
  }
}

// Start Nef in background process and allow streams from stdout and stderr
// const nefListenServer = spawn(executable, executableArgs);
// nefListenServer.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });
// nefListenServer.stderr.on('data', (data) => {
//   console.log(`stderr: ${data}`);
// });
// nefListenServer.on('error', (err) => {
//   console.error(`Failed to start Nefertiti Listen Server: ${err}`);
// });
