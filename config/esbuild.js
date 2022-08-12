
import 'dotenv/config';
import esbuild from 'esbuild';


const entryPoints = [
  'src/sw.js','src/scripts/scrapper.js'
];

// eslint-disable-next-line no-undef
const { DEPLOYMENT } = process.env;

esbuild.build({
  entryPoints,
  watch         : DEPLOYMENT==='DEV',
  bundle        : true,
  outdir        : 'dist',
  // target: 'chrome',
  minify        : !(DEPLOYMENT==='DEV'),
  allowOverwrite: true,
  logLevel      : DEPLOYMENT==='DEV'? 'debug' :'silent',
  // inject:['config/global.js']
})
  .then(response => console.log(JSON.stringify(response)))
  .catch(err => console.log(err));