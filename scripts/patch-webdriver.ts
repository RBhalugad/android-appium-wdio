/**
 * patch-webdriver.ts
 *
 * Patches the `webdriver` package to remove "forbidden" HTTP headers
 * (`Content-Length` and `Connection`) that Node.js ≥ 26 rejects with
 * UND_ERR_INVALID_ARG when set via the Fetch API.
 *
 * Node's built-in Fetch automatically manages both headers, so removing
 * the manual assignments is safe and spec-correct.
 *
 * This script runs as a postinstall hook and is idempotent.
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname: string = fileURLToPath(new URL('.', import.meta.url));
const filesToPatch: string[] = [
    join(__dirname, '..', 'node_modules', 'webdriver', 'build', 'node.js'),
    join(__dirname, '..', 'node_modules', 'webdriver', 'build', 'index.js'),
];

let patchedCount: number = 0;

for (const filePath of filesToPatch) {
    let src: string;
    try {
        src = readFileSync(filePath, 'utf8');
    } catch {
        // File may not exist (e.g. index.js in some builds)
        continue;
    }

    let patched: string = src;

    // 1. Remove `"Connection": "keep-alive"` from DEFAULT_HEADERS
    patched = patched.replace(
        /^\s*"Connection":\s*"keep-alive",?\s*$/m,
        '  // "Connection": "keep-alive",  // Removed: forbidden header in Node >= 26',
    );

    // 2. Remove the manual Content-Length assignment
    patched = patched.replace(
        /^(\s*)requestHeaders\.set\("Content-Length",\s*[^)]+\);/m,
        '$1// requestHeaders.set("Content-Length", ...);  // Removed: forbidden header in Node >= 26',
    );

    if (patched !== src) {
        writeFileSync(filePath, patched, 'utf8');
        patchedCount++;
        console.log(`✔ Patched: ${filePath}`);
    } else {
        console.log(`⊘ Already patched or no match: ${filePath}`);
    }
}

if (patchedCount > 0) {
    console.log(`\nDone – patched ${patchedCount} file(s).`);
} else {
    console.log('\nNothing to patch.');
}
