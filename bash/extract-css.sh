#!/bin/bash

INPUT_FILE="circle.js"
OUTPUT_PREFIX="circle"

node - <<'EOF'
const fs = require('fs');
const vm = require('vm');

const filePath = "circle.js";
let content = fs.readFileSync(filePath, "utf-8");

// Remove the ES module `export` so we can evaluate as CommonJS
content = content.replace(/export\s+const\s+CIRCLE/, 'const CIRCLE');

const sandbox = {};
try {
  // Evaluate the JS code in a safe, isolated context
  vm.runInNewContext(content, sandbox);

  if (!Array.isArray(sandbox.CIRCLE)) {
    console.error("❌ CIRCLE is not defined as an array.");
    console.log("🔍 Sandbox keys:", Object.keys(sandbox));
    process.exit(1);
  }

  sandbox.CIRCLE.forEach((item, index) => {
    const css = item.css?.trim();
    if (!css) return;
    const nameNumber = index + 1 > 9 ? index + 1 : `0${index + 1}`;
    const fileName = `bubble${nameNumber}.module.css`;
    fs.writeFileSync(fileName, css + "\n");
    console.log(`✅ Generated: ${fileName}`);
  });
} catch (err) {
  console.error("❌ JS Evaluation Error:", err.message);
  process.exit(1);
}
EOF
