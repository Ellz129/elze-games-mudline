pc.script.createLoadingScreen((app) => {
    const started = performance.now();
    const style = document.createElement('style');
    style.textContent = `html,body{background:#000}#elze-intro{position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;background:#000;color:#fff;transition:opacity .75s ease;cursor:default}#elze-wordmark{font-family:Arial,Helvetica,sans-serif;font-size:clamp(28px,5vw,62px);font-weight:400;letter-spacing:.08em;opacity:0;animation:elze-reveal 1.6s ease .15s forwards}#elze-loading{position:absolute;bottom:11%;left:50%;transform:translateX(-50%);font:11px Arial,sans-serif;letter-spacing:.16em;color:#aaa}#elze-progress{position:absolute;bottom:8%;left:calc(50% - 70px);width:140px;height:1px;background:#222}#elze-progress span{display:block;height:100%;width:0;background:#fff;transition:width .2s}@keyframes elze-reveal{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}@media(prefers-reduced-motion:reduce){#elze-wordmark{animation-duration:.01s;transform:none}#elze-intro{transition:none}}`;
    document.head.appendChild(style);
    const intro=document.createElement('div');intro.id='elze-intro';intro.setAttribute('role','status');intro.setAttribute('aria-label','ELZE games. Loading MUDLINE.');
    const wordmark=document.createElement('div');wordmark.id='elze-wordmark';wordmark.textContent='ELZE games';intro.appendChild(wordmark);
    const loading=document.createElement('div');loading.id='elze-loading';loading.textContent='LOADING MUDLINE';intro.appendChild(loading);
    const track=document.createElement('div');track.id='elze-progress';const progress=document.createElement('span');track.appendChild(progress);intro.appendChild(track);document.body.appendChild(intro);
    app.on('preload:progress',value=>{progress.style.width=Math.round(Math.min(1,Math.max(0,value))*100)+'%';});
    app.once('start',()=>{progress.style.width='100%';loading.textContent='';setTimeout(()=>{intro.style.opacity='0';intro.setAttribute('aria-hidden','true');setTimeout(()=>intro.remove(),800);},Math.max(0,3300-(performance.now()-started)));});
});
