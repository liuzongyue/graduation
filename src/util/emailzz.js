const emailzz = function(email){
  const qqemail = "[\\w&&^[0-9]]{6,}"
  let regex = email.matches(qqemail)
  return regex
}
export default emailzz