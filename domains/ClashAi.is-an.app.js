// for more details watch the file `./domains.d.ts`

addSubDomain({
  description: 'ClashAi Is A Service api for ai', // describe your project in this field
  domain: 'is-an.app', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: 'ClashAi', // desired subdomain name
  owner: {
    repo: 'Nope, Private',
    email: 'bluedragon1287@gmail.com',
  },
  record: {
 
    A: '82.165.0.49:25621',
  },
proxy: false,
})
