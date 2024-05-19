import{a as d,S as m,i as f}from"./assets/vendor-f736e62a.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const h="https://pixabay.com/api/",g="43873427-52524e51f424820d3ed845203",y=`?key=${g}&image_type=photo&orientation=horizontal&safesearch=true`;function L(s){return d.get(`${h}${y}&q=${s}`).then(t=>t.data).catch(t=>{console.log(t)})}const $=new m(".gallery a",{captionsData:"alt",captionsDelay:250}),c=document.querySelector(".gallery");function v(s){const t=s.hits;if(t.length===0)c.innerHTML="",f.error({message:"Sorry, there are no images matching your search query. Please try again!"});else{const i=t.map(({webformatURL:a,largeImageURL:e,tags:r,likes:o,views:l,comments:u,downloads:p})=>`
        <li class="gallery-item">
            <a class="gallery-link" href=${e}>
                <img class="gallery-image" src=${a} alt=${r} />
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
        </li>`).join("");c.innerHTML=i,$.refresh()}}const n=document.querySelector(".loader"),S=document.querySelector(".form");S.addEventListener("submit",b);function b(s){s.preventDefault(),n.classList.remove("is-hidden");const t=s.currentTarget,i=t.elements.searchInput.value.trim();if(i===""){n.classList.add("is-hidden");return}L(i).then(a=>{v(a)}).catch(a=>{q(a)}).finally(()=>{t.reset(),n.classList.add("is-hidden")})}function q(s){alert(s)}
//# sourceMappingURL=commonHelpers.js.map
