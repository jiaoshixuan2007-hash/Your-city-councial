import {readFile, mkdir, writeFile} from 'node:fs/promises';
const assets={};
for (const [name,type] of [['index.html','text/html; charset=utf-8'],['app.js','text/javascript; charset=utf-8'],['style.css','text/css; charset=utf-8']]) assets['/'+name]={body:await readFile('worker/'+name,'utf8'),type};
const server=await readFile('worker/server.js','utf8');
await mkdir('dist/server',{recursive:true});
await writeFile('dist/server/index.js',`const ASSETS = ${JSON.stringify(assets)};\n${server}`);
