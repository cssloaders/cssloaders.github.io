#!/bin/bash



node - <<'EOF'


const fs = require('fs');
const vm = require('vm');

const OUTPUT_PREFIX="rect"
const filePath = "rect.js";


let content = fs.readFileSync(filePath, "utf-8");

// Remove the ES module `export` so we can evaluate as CommonJS
content = content.replace(/export\s+const\s+RECT/, 'const RECT');

const sandbox = {};
try {
  // Evaluate the JS code in a safe, isolated context
  vm.runInNewContext(content, sandbox);

  if (!Array.isArray(sandbox.RECT)) {
    console.error("❌ RECT is not defined as an array.");
    console.log("🔍 Sandbox keys:", Object.keys(sandbox));
    process.exit(1);
  }

  sandbox.RECT.forEach((item, index) => {
    const css = item.css?.trim();
    if (!css) return;
    const nameNumber = index + 1 > 9 ? index + 1 : `0${index + 1}`;
    const fileName = `${OUTPUT_PREFIX}${nameNumber}.module.css`;
    fs.writeFileSync(fileName, css + "\n");
    console.log(`✅ Generated: ${fileName}`);
  });
} catch (err) {
  console.error("❌ JS Evaluation Error:", err.message);
  process.exit(1);
}
EOF
