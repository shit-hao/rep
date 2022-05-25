function k() {
  console.log('gfe', gfe)
  console.log('gfe' in window)
  if(!('gfe' in window)){
    var gfe = 1
  }
  console.log('gfe',gfe)
}
k()