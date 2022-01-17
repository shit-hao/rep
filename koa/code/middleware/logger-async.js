function log( ctx ) {
  console.log('123', ctx.method, ctx.header.host + ctx.url )
}

module.exports = function () {
return async function ( ctx, next ) {
  log(ctx);
  await next()
  console.log('3')
}
}