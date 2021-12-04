/* eslint-disable no-console */
import downloadRelease from 'download-github-release';
import { getPlatform, getArch } from './get-sysinfo.js';
import { executablePath as outputdir } from '../functions/variables.js';

const user = 'svanas';
const repo = 'nefertiti';
// const outputdir = executablePath;
const leaveZipped = false;

// Define a function to filter releases.
function filterRelease(release) {
  // Filter out prereleases.
  return release.prerelease === false;
}

// Define a function to filter assets.
function filterAsset(asset) {
  // using getPlatform() and getArch() from get-sysinfo.js
  const filterStr = `${getPlatform()}_${getArch()}`;
  // Select assets that contain the filterStr
  return asset.name.indexOf(filterStr) >= 0;
}

// TODO Need to setup notifications for this instead of using console.log

/**
 * @function downloadNefertiti
 * @description Downloads the latest release from GitHub for the client platform and architecture.
 */
export default function downloadNefertitiFromGithub() {
  console.log(
    `This module requires Nefertiti. Downloading nefertiti_${getPlatform()}_${getArch()} from GitHub...`,
  );
  // eslint-disable-next-line max-len
  downloadRelease(user, repo, outputdir, filterRelease, filterAsset, leaveZipped)
    .then(() => {
      console.log(
        `All done! nefertiti_${getPlatform()}_${getArch()} is available in ./${outputdir}`,
      );
    })
    .catch((err) => {
      throw new Error(err);
    });
}
