(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();document.querySelector("#app").innerHTML=`
<div class="c_url">
  <form class="c_url__form" id="url-concat">
    <fieldset class="c_url__group">
      <label class="c_url__label" for="localhost">localhost name</label>
      <input class="c_url__input" type="text" id="localhost" name="localhost" value="localhost" required />
    </fieldset>

    <fieldset class="c_url__group">
      <label class="c_url__label" for="port">port</label>
      <input class="c_url__input" type="text" id="port" name="port" value="4200" required />
    </fieldset>

    <fieldset class="c_url__group">
      <label class="c_url__label" for="providerId">providerId</label>
      <input class="c_url__input" type="text" id="providerId" name="providerId" required />
    </fieldset>

    <fieldset class="c_url__group">
      <label class="c_url__label" for="token">auth-token</label>
      <input class="c_url__input" type="text" id="token" name="token" required />
    </fieldset>

    <fieldset class="c_url__group c_url__group--submit">
      <button class="c_url__btn c_url__btn--submit" aria-label="submit" type="submit">Concat</button>
    </fieldset>

    <fieldset class="c_url__group">
      <label class="c_url__label" for="result">result</label>
      <input class="c_url__input" type="text" id="result" name="result" />
    </fieldset>

    <fieldset class="c_url__group c_url__group--actions">
      <button class="c_url__btn c_url__btn--action" aria-label="copy-to-clipboard" type="button" id="copy">
        Copy to clipboard
      </button>
      <button class="c_url__btn c_url__btn--action" aria-label="open" type="button" id="open">Open in new tab</button>
    </fieldset>
  </form>
</div>
`;const u=document.querySelector("#result"),a=document.querySelector("#url-concat"),n=document.querySelector("#copy"),d=document.querySelector("#open");let r;const _=o=>{o.preventDefault();const c=new FormData(o.target),l=Object.fromEntries(c.entries());r=`http://${l.localhost}:${l.port}/?providerId=${l.providerId}&token=${l.token}`,u.value=r},p=async()=>{if(r)try{await navigator.clipboard.writeText(r),console.log("Content copied to clipboard"),console.info(`🌻 ${r}`),n.innerText="Done"}catch(o){console.error("Failed to copy: ",o),n.innerText="Some error"}finally{setTimeout(()=>{n.innerText="Copy to clipboard"},1e3)}},f=()=>{r&&window.open(r,"_blank")};a.addEventListener("submit",_);n.addEventListener("click",p);d.addEventListener("click",f);
