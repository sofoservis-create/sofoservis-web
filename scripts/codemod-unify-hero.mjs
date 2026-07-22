// One-off codemod: merge the dual <LabHero>(desktop) + <Hero>(mobile) blocks
// into a single responsive <LabHero>. Run: node scripts/codemod-unify-hero.mjs
import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const files = execSync(
  `grep -rl "LabHero" src/app --include=page.tsx`,
  { encoding: "utf8" }
).trim().split("\n");

// Props that exist only on Hero and must be carried over to LabHero
const HERO_ONLY = new Set([
  "showMascot", "mobileMascotSrc", "mobileMascotOffsetY", "mobileMascotOffsetX",
  "mobileMascotScale", "mobileFormOffsetY", "pillsVariant", "phoneCTAText", "phoneNumber",
]);
// Props to drop entirely from Hero
const DROP = new Set(["hoursText"]);

// Parse props from a JSX props string into ordered [name, rawValue|null] pairs.
function parseProps(propsStr) {
  const props = [];
  const re = /(\w+)(?:=(\{(?:[^{}]|\{[^{}]*\})*\}|"[^"]*"))?/g;
  let m;
  while ((m = re.exec(propsStr)) !== null) {
    if (!m[1]) continue;
    props.push([m[1], m[2] ?? null]);
  }
  return props;
}

const pattern = /<div className="hidden lg:block">\s*\n([\s\S]*?)<LabHero([\s\S]*?)\/>\s*\n\s*<\/div>\s*\n\s*<div className="lg:hidden">\s*\n\s*<Hero([\s\S]*?)\/>\s*\n\s*<\/div>/;

let changed = 0, warned = 0;
for (const file of files) {
  let src = fs.readFileSync(file, "utf8");
  const m = src.match(pattern);
  if (!m) {
    console.log(`SKIP (no pattern): ${file}`);
    warned++;
    continue;
  }
  const labProps = parseProps(m[2]);
  const heroProps = parseProps(m[3]);
  const labNames = new Set(labProps.map(([n]) => n));

  const merged = [...labProps];
  const mismatches = [];
  for (const [name, val] of heroProps) {
    if (DROP.has(name)) continue;
    if (HERO_ONLY.has(name)) {
      if (!labNames.has(name)) merged.push([name, val]);
      continue;
    }
    // Shared prop: verify it matches LabHero's value (informational)
    const labVal = labProps.find(([n]) => n === name)?.[1];
    if (labVal === undefined) {
      // Hero has a shared prop LabHero lacks (e.g. badgeText) — carry it over
      merged.push([name, val]);
    } else if (labVal !== val && !["benefits", "ratingText", "mascotSrc"].includes(name)) {
      mismatches.push(`${name}: Lab=${labVal} Hero=${val}`);
    }
  }
  if (mismatches.length) {
    console.log(`MISMATCH ${file}\n  ${mismatches.join("\n  ")}`);
  }

  const indent = "      ";
  const propLines = merged
    .map(([n, v]) => (v === null ? `${indent}  ${n}` : `${indent}  ${n}=${v}`))
    .join("\n");
  const replacement = `<LabHero\n${propLines}\n${indent}/>`;

  src = src.replace(pattern, replacement);
  // Remove the now-unused Hero import
  src = src.replace(/^import Hero from "@\/components\/sections\/Hero";\r?\n/m, "");
  fs.writeFileSync(file, src);
  changed++;
}
console.log(`\nDone. Changed: ${changed}, skipped/warned: ${warned}, total: ${files.length}`);
