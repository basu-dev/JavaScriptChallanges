module.exprts=regex
function regex(){
    let reg=/acb/g
    let string='bas acb man cat acb'
   let result= reg.exec(string)
console.log(result)
}
regex();