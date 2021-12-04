/* eslint-disable consistent-return */
/* eslint-disable default-case */
import { platform, arch } from 'os';

/*
  Returns the system platform/OS, corresponding to Nefertiti release assets naming structure.
  May not support all platforms
 */
export function getPlatform() {
  switch (platform()) {
    case 'aix':
    case 'freebsd':
    case 'linux':
    case 'openbsd':
      return 'linux';
    case 'darwin':
    case 'sunos':
      return 'darwin';
    case 'win32':
      return 'windows';
  }
}

/*
  Returns the system architecture, corresponding to the release assets naming structure.
  Cross-referenced between node.js docs and Nefertiti supported archs
 */
export function getArch() {
  switch (arch()) {
    case 'arm':
      return 'arm';
    case 'arm64':
      return 'arm64';
    case 'x32':
      return '386';
    case 'x64':
      return 'amd64';
    case 'mips':
      return 'mips';
    case 'mipsel':
      return 'mipsle';
    case 'ppc64':
      return 'ppc64';
    case 's390x':
      return 's390x';
  }
}
