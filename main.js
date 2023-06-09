window.onload = function(){
  setTimeout(() => {
    let p = document.querySelector('p');
    p.classList.toggle('animate__fadeIn');
    p.innerHTML = "Redirecting you to my secondary portfolio...";
    setTimeout(()=>{
      window.location.replace("https://msn-05.github.io/portfolio");
    },1000);
  },1000)
};