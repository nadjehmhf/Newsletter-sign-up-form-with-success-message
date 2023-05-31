const boxel =document.getElementById('box')
const ael=document.getElementById('a')
const bel=document.getElementById('b')

const userel=document.getElementById('user-email')
const invalidel=document.getElementById('invalid-email')
const inputemailel=document.getElementById('email')
const submitel=document.getElementById('submit')

const confirmel=document.getElementById('confirm')
const dismisel=document.getElementById('dismis')

function fsuccess()
{
  confirmel.classList.add('active')
  boxel.classList.add('seccess')
  ael.style.dislay='none'
  bel.style.display='none'
}
function validemail(email){
  const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}
submitel.addEventListener('click',(e)=>{
  e.preventdefault()
  const email=inputemailel.value.trim()
  if(validemail(email)){
    fsuccess()
    userel.innerText=email
    inputemailel.value=''
    invalidel.classList.remove('active')
    inputemailel.classList.remove('active')
  }
  else{
    invalidel.classList.add('active')
    inputemailel.classList.add('active')
    }

})
dismisel.addEventListener('click',() => {
  ael.style.display='block'
  bel.style.display='block'
  boxel.classList.remove('seccess')
  confirmel.classList.remove('active')

})