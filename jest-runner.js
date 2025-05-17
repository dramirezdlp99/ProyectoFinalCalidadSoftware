// jest-runner.js
const { exec } = require('child_process');

exec('jest', { env: { ...process.env, NODE_OPTIONS: '--experimental-vm-modules' } }, (err, stdout, stderr) => {
  if (stdout) process.stdout.write(stdout);
  if (stderr) process.stderr.write(stderr);
  if (err) process.exit(err.code);
});
