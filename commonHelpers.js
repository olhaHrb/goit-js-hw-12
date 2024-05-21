import{a as g,S as L,i as $}from"./assets/vendor-06b1bbdf.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const v="https://pixabay.com/api/",b="43873427-52524e51f424820d3ed845203",S=15;async function d(s,t){const a=`?key=${b}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=${S}`,{data:i}=await g.get(`${v}${a}&q=${s}`);return i}const q=new L(".gallery a",{captionsData:"alt",captionsDelay:250}),E=document.querySelector(".gallery");function p(s){const t=s.map(({webformatURL:a,largeImageURL:i,tags:e,likes:r,views:o,comments:h,downloads:y})=>`
        <li class="gallery-item">
            <a class="gallery-link" href=${i}>
                <img class="gallery-image" src=${a} alt=${e} />
            </a>
            <ul class="gallery-caption">
              <li class="caption-item">
                <h3 class="caption-title">Likes</h3>
                <p class="caption-value">${r}</p>
              </li>
              <li class="caption-item">
                <h3 class="caption-title">Views</h3>
                <p class="caption-value">${o}</p>
              </li>
              <li class="caption-item">
                <h3 class="caption-title">Comments</h3>
                <p class="caption-value">${h}</p>
              </li>
              <li class="caption-item">
                <h3 class="caption-title">Downloads</h3>
                <p class="caption-value">${y}</p>
              </li>
            </ul>
        </li>`).join("");E.insertAdjacentHTML("beforeend",t),q.refresh()}const c=document.querySelector(".loader"),m=document.querySelector(".form"),l=document.querySelector(".btn_load"),P=document.querySelector(".gallery");let n="",u=1;m.addEventListener("submit",w);l.addEventListener("click",O);async function w(s){if(s.preventDefault(),c.classList.remove("is-hidden"),P.innerHTML="",n=s.target.elements.searchInput.value.trim(),n===""){alert("Enter search query");return}try{const{hits:t,totalHits:a}=await d(n,u);if(t.length===0){$.error({message:"Sorry, there are no images matching your search query. Please try again!"}),l.classList.add("is-hidden");return}p(t),l.classList.remove("is-hidden")}catch(t){f(t)}finally{m.reset(),c.classList.add("is-hidden")}}function f(s){alert(s)}async function O(s){c.classList.remove("is-hidden"),u+=1;try{const{hits:t,totalHits:a}=await d(n,u);p(t)}catch(t){f(t)}finally{c.classList.add("is-hidden")}}
//# sourceMappingURL=commonHelpers.js.map
