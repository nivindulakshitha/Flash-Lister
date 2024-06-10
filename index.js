const { exec } = require('child_process');

const command = `powershell -Command "Get-WmiObject Win32_DiskDrive | Where-Object { $_.InterfaceType -eq 'USB' } | Select-Object DeviceID, Model, Size"`;

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing command: ${command}\n${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`Connected USB flash drives with logical drive names:\n${stdout}`);
});
