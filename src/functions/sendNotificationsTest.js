import { execFile } from 'child_process';
import { executable } from './variables.js';

// Notifications test
/**
 * @function sendNotificationsTest
 * @description Sends a message to the notifications service
 * @param {string} service - the notification service. can be 'pushover' or 'telegram'
 * @param {string} appKey - application key
 * @param {string} chatKey - chat key (for telegram) or user key (for pushover)
 */

export default function sendNotificationsTest(service, appKey, chatKey) {
  const msg = '🎉 This is your test message from Nefertiti 🎉';
  if (service === 'pushover') {
    execFile(executable, [
      'notify',
      `--pushover-app-key=${appKey}`,
      `--pushover-user-key=${chatKey}`,
      `--msg=${msg}`,
    ]);
  }
  if (service === 'telegram') {
    execFile(executable, [
      'notify',
      '--pushover-app-key=none', // Shell will pause without this
      `--telegram-app-key=${appKey}`,
      `--telegram-chat-id=${chatKey}`,
      `--msg=${msg}`,
    ]);
  }
}
