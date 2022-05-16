function get(n){
  if(n <= 1){
    return 1
  }
  return get(n-1) + get(n-2)
}
