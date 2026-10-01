const installButton=document.getElementById('install-app');let pendingInstall;
window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();pendingInstall=event;installButton.textContent='Instalar app';});
installButton.addEventListener('click',async()=>{if(pendingInstall){await pendingInstall.prompt();await pendingInstall.userChoice;pendingInstall=null;}else{document.getElementById('install-help').hidden=false;}});
window.addEventListener('appinstalled',()=>{installButton.hidden=true;document.getElementById('install-help').hidden=true;});
if(window.matchMedia('(display-mode: standalone)').matches||navigator.standalone)installButton.hidden=true;
if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
