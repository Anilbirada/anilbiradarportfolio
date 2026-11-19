import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');

console.log('--- Verifying AI Engineering Portfolio Assets & Integrity ---');

let errors = 0;

function assert(condition, message) {
  if (!condition) {
    console.error(`FAIL: ${message}`);
    errors++;
  } else {
    console.log(`PASS: ${message}`);
  }
}

// 1. Check entry files
assert(fs.existsSync(path.join(root, 'index.html')), 'index.html exists');
assert(fs.existsSync(path.join(root, 'src', 'App.tsx')), 'src/App.tsx exists');
assert(fs.existsSync(path.join(root, 'src', 'main.tsx')), 'src/main.tsx exists');

// 2. Check public assets
assert(fs.existsSync(path.join(root, 'public', 'resume.pdf')), 'public/resume.pdf exists and is accessible');
const resumeSize = fs.statSync(path.join(root, 'public', 'resume.pdf')).size;
assert(resumeSize > 10000, `resume.pdf is valid (${resumeSize} bytes)`);

assert(fs.existsSync(path.join(root, 'public', 'favicon.svg')), 'public/favicon.svg exists');
assert(fs.existsSync(path.join(root, 'public', 'robots.txt')), 'public/robots.txt exists');
assert(fs.existsSync(path.join(root, 'public', 'sitemap.xml')), 'public/sitemap.xml exists');

// 3. Check Headshot and Project Images
const requiredImages = [
  '00_Anil_Biradar_Profile_Headshot.jpg',
  '01_Build_IQ_Workflow_Automation.jpg',
  '02_Support_IQ_Customer_Support.jpg',
  '03_NEXGEN_Lead_Gen_Agents.jpg',
  '04_Enterprise_CLP_Loyalty_Platform.jpg',
  '05_RAG_Document_Assistant.jpg'
];

for (const img of requiredImages) {
  const p = path.join(root, 'public', 'images', img);
  assert(fs.existsSync(p), `Image asset exists: images/${img}`);
}

// 4. Verify Project Data
const projectsContent = fs.readFileSync(path.join(root, 'src', 'data', 'projectsData.ts'), 'utf-8');
assert(projectsContent.includes('errorsentinel-ai'), 'ErrorSentinel AI defined');
assert(projectsContent.includes('nexora-ai'), 'Nexora AI defined');
assert(projectsContent.includes('enterprise-rag-assistant'), 'Enterprise RAG Assistant defined');
assert(projectsContent.includes('customer-loyalty-program'), 'Customer Loyalty Platform defined');
assert(projectsContent.includes('routex-ai'), 'RouteX AI defined');
assert(projectsContent.includes('placement-analyser'), 'Smart Placement Readiness Analyser defined');
assert(projectsContent.includes('suspicious-url-detection'), 'Suspicious URL Detection defined');

// 5. Verify SEO Metadata
const indexHtml = fs.readFileSync(path.join(root, 'index.html'), 'utf-8');
assert(indexHtml.includes('Junior AI Engineer'), 'SEO Title contains Junior AI Engineer');
assert(indexHtml.includes('https://schema.org'), 'Schema.org JSON-LD structured data configured');
assert(indexHtml.includes('https://anilbiradar.netlify.app/'), 'Canonical URL configured');

if (errors > 0) {
  console.error(`\nCompleted with ${errors} error(s).`);
  process.exit(1);
} else {
  console.log('\nAll project integrity and asset verifications PASSED perfectly!');
}
