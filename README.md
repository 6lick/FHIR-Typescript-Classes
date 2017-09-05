# FHIR-Typescript-Classes

## Status:
* Works for 2nd stable release of FHIR structure definitions, having problems with newest release.

## Installation and Usage

### Preqrequisites

Requires Node. Tested with Node v6.11.2.

### Download/Clone from GitHub:
```bash
git clone https://github.com/Decker-Russell/FHIR-Typescript-Classes.git
```

### Installation:
```bash
npm install
```

### Build TypeScript Library:
```bash
node bundleReader.js dataelements.json > lib.ts
```
Note: If you receive the error 'stdout is not a tty' on Git Bash for Windows, try the above again with PowerShell. 