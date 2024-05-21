import{a as L,S as $,i as v}from"./assets/vendor-f736e62a.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const E="https://pixabay.com/api/",S="43873427-52524e51f424820d3ed845203",b=15,P=`?key=${S}&image_type=photo&orientation=horizontal&safesearch=true&page=${_}&per_page=${b}`;async function u(a){return(await L.get(`${E}${P}&q=${a}`)).data}const q=new $(".gallery a",{captionsData:"alt",captionsDelay:250}),l=document.querySelector(".gallery");function p(a){const t=a.hits;if(t.length===0)l.innerHTML="",v.error({message:"Sorry, there are no images matching your search query. Please try again!"});else{const o=t.map(({webformatURL:r,largeImageURL:e,tags:s,likes:i,views:h,comments:y,downloads:g})=>`
        <li class="gallery-item">
            <a class="gallery-link" href=${e}>
                <img class="gallery-image" src=${r} alt=${s} />
            </a>
            <ul class="gallery-caption">
              <li class="caption-item">
                <h3 class="caption-title">Likes</h3>
                <p class="caption-value">${i}</p>
              </li>
              <li class="caption-item">
                <h3 class="caption-title">Views</h3>
                <p class="caption-value">${h}</p>
              </li>
              <li class="caption-item">
                <h3 class="caption-title">Comments</h3>
                <p class="caption-value">${y}</p>
              </li>
              <li class="caption-item">
                <h3 class="caption-title">Downloads</h3>
                <p class="caption-value">${g}</p>
              </li>
            </ul>
        </li>`).join("");l.innerHTML=o,q.refresh()}}const c=document.querySelector(".loader"),O=document.querySelector(".form"),d=document.querySelector(".btn_load");let m="",n;const _=n;O.addEventListener("submit",w);d.addEventListener("click",A);function w(a){a.preventDefault(),c.classList.remove("is-hidden"),n=1;const t=a.currentTarget,o=t.elements.searchInput.value.trim();if(o===""){c.classList.add("is-hidden");return}m=o,u(o).then(r=>{p(r)}).catch(r=>{f(r)}).finally(()=>{t.reset(),c.classList.add("is-hidden"),d.classList.remove("is-hidden")})}function f(a){alert(a)}function A(a){n=n+1,u(m).then(t=>{p(t)}).catch(t=>{f(t)}).finally(()=>{})}
//# sourceMappingURL=commonHelpers.js.map
