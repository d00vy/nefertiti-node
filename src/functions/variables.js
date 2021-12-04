import { fileURLToPath } from 'url'; // in Browser, the URL in native accessible on window
import path from 'path';
import { getPlatform, getArch } from '../helpers/get-sysinfo.js';

// Get the current working directory - replaces __dirname
export const currentDirectory = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
// uses getPlatform and getArch to build the proper filename
export const executableName = `nefertiti_${getPlatform()}_${getArch()}`;
// executables are downloaded to [module_directory]/bin/
export const executablePath = path.join(currentDirectory, 'bin');

// If on Windows, add a '.exe' to the @executableName
function addExtentionForWindows() {
  if (process.platform === 'win32') {
    return `${executableName}.exe`;
  }
  return executableName;
}

// build the full executable path, adding a '.exe' if on Windows
export const executable = path.join(`${executablePath}`, addExtentionForWindows());

// export an object containing Nef's listen server properties
export const nefertitiURL = {
  hostname: 'http://127.0.0.1',
  port: 38700,
  ping: '/ping',
  post: '/post',
};
