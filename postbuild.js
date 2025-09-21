import fs from "fs";
import path from "path";

// Copy files from public to dist
const filesToCopy = ["_headers", "_redirects"];

filesToCopy.forEach(file => {
  const srcPath = path.join("public", file);
  const destPath = path.join("dist", file);
  
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${file} to dist/`);
  } else {
    console.warn(`File ${file} not found in public/`);
  }
});

console.log("Build post-processing complete!");

