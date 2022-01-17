// module.exports = function (source) {
//   const handleContent = source.replace('框架', 'Rea22233ct框架').replace('JS', 'JavaScript')
//   return handleContent
// }
module.exports = function (source) {
  const callback = this.async()

  // 由于有 3 秒延迟，所以打包时需要 3+ 秒的时间
  setTimeout(() => {
      callback(null, `${source.replace('框架', 'Rea122233ct框架').replace('JS', 'JavaScript')}`)
  }, 3000)
}
