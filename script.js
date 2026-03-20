const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>nav.classList.toggle('s',scrollY>60),{passive:true});
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('in');}),{threshold:.1});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
const burger=document.getElementById('burger'),mob=document.getElementById('mob'),mobx=document.getElementById('mob-x');
burger.addEventListener('click',()=>mob.classList.add('open'));
mobx.addEventListener('click',cM);
function cM(){mob.classList.remove('open');}
