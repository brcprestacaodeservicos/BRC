
document.addEventListener('DOMContentLoaded',function(){
  // simple mobile nav toggle
  const nav = document.querySelector('nav')
  const btn = document.getElementById('menuBtn')
  if(btn){
    btn.addEventListener('click',()=>{ nav.style.display = nav.style.display==='block'?'none':'block' })
  }
})
