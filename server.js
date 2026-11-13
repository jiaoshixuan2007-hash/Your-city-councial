const origin = 'https://ckan0.cf.opendata.inter.prod-toronto.ca/api/3/action/';
const queries = {transportation:'transit transportation',housing:'housing development',taxes:'budget',news:'city council',infrastructure:'infrastructure',votes:'members of toronto city council voting record'};
async function getData(action, params) {
  const url = new URL(action, origin);
  for (const [key, value] of Object.entries(params)) url.searchParams.set(key, String(value));
  const response = await fetch(url, {headers:{accept:'application/json'}, signal:AbortSignal.timeout(12000)});
  if (!response.ok) throw new Error(`Toronto Open Data returned ${response.status}`);
  const body = await response.json();
  if (!body.success || !body.result) throw new Error('Toronto Open Data returned an invalid result');
  return body.result;
}
export default {async fetch(request) {
  const url = new URL(request.url);
  if (url.pathname === '/api/datasets') {
    if (!Object.hasOwn(queries,url.searchParams.get('category'))) return Response.json({error:'Unknown category'},{status:400});
    try {const result = await getData('package_search',{q:queries[url.searchParams.get('category')],rows:8});return Response.json({success:true,result},{headers:{'cache-control':'public, max-age=300'}});}
    catch {return Response.json({error:'Toronto Open Data unavailable'},{status:502});}
  }
  if (url.pathname === '/api/votes') {
    try {
      const dataset = await getData('package_show',{id:'members-of-toronto-city-council-voting-record'});
      const candidates = (dataset.resources||[]).filter(resource=>resource.datastore_active && /vot/i.test(resource.name||''));
      candidates.sort((a,b)=>(b.name||'').localeCompare(a.name||'',undefined,{numeric:true}));
      if (!candidates.length) throw new Error('No datastore resource');
      const resource = candidates[0];
      const data = await getData('datastore_search',{resource_id:resource.id,limit:25,sort:'_id desc'});
      return Response.json({records:data.records,resource:resource.name,retrieved:new Date().toISOString()},{headers:{'cache-control':'public, max-age=300'}});
    } catch {return Response.json({error:'Toronto voting records unavailable'},{status:502});}
  }
  const asset = ASSETS[url.pathname === '/' ? '/index.html' : url.pathname];
  if (!asset) return new Response('Not found',{status:404});
  return new Response(asset.body,{headers:{'content-type':asset.type,'x-content-type-options':'nosniff'}});
}};
