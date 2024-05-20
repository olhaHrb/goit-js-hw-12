import{a as d,S as m,i as f}from"./assets/vendor-f736e62a.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const h="https://pixabay.com/api/",y="43873427-52524e51f424820d3ed845203",g=`?key=${y}&image_type=photo&orientation=horizontal&safesearch=true`;async function L(r){return(await d.get(`${h}${g}&q=${r}`)).data}const $=new m(".gallery a",{captionsData:"alt",captionsDelay:250}),c=document.querySelector(".gallery");function v(r){const s=r.hits;if(s.length===0)c.innerHTML="",f.error({message:"Sorry, there are no images matching your search query. Please try again!"});else{const i=s.map(({webformatURL:a,largeImageURL:e,tags:t,likes:o,views:l,comments:u,downloads:p})=>`
        <li class="gallery-item">
            <a class="gallery-link" href=${e}>
                <img class="gallery-image" src=${a} alt=${t} />
            </a>
            <ul class="gallery-caption">
              <li class="caption-item">
                <h3 class="caption-title">Likes</h3>
                <p class="caption-value">${o}</p>
              </li>
              <li class="caption-item">
                <h3 class="caption-title">Views</h3>
                <p class="caption-value">${l}</p>
              </li>
              <li class="caption-item">
                <h3 class="caption-title">Comments</h3>
                <p class="caption-value">${u}</p>
              </li>
              <li class="caption-item">
                <h3 class="caption-title">Downloads</h3>
                <p class="caption-value">${p}</p>
              </li>
            </ul>
        </li>`).join("");c.innerHTML=i,$.refresh()}}const n=document.querySelector(".loader"),S=document.querySelector(".form");S.addEventListener("submit",b);function b(r){r.preventDefault(),n.classList.remove("is-hidden");const s=r.currentTarget,i=s.elements.searchInput.value.trim();if(i===""){n.classList.add("is-hidden");return}L(i).then(a=>{v(a)}).catch(a=>{q(a)}).finally(()=>{s.reset(),n.classList.add("is-hidden")})}function q(r){alert(r)}
//# sourceMappingURL=commonHelpers.js.map
