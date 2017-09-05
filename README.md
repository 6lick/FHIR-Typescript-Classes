# FHIR-Typescript-Classes

Known Issues:
* Works for 2nd stable release of FHIR structure definitions, having problems with newest release.

Download/Clone from GitHub:
```bash
git clone https://github.com/Decker-Russell/FHIR-Typescript-Classes.git
```

Usage:
```bash
npm install
node bundleReader.js dataelements.json > lib.ts
```
Note: If you receive the error 'stdout is not a tty' on Git Bash for Windows, try the above again with PowerShell. 