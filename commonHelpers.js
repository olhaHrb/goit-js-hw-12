import{a as v,S as $,i as p}from"./assets/vendor-06b1bbdf.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const b="https://pixabay.com/api/",S="43873427-52524e51f424820d3ed845203",q=15;async function h(a,e){const r=`?key=${S}&image_type=photo&orientation=horizontal&safesearch=true&page=${e}&per_page=${q}`,{data:i}=await v.get(`${b}${r}&q=${a}`);return i}const w=new $(".gallery a",{captionsData:"alt",captionsDelay:250}),E=document.querySelector(".gallery");function m(a){const e=a.map(({webformatURL:r,largeImageURL:i,tags:t,likes:s,views:o,comments:g,downloads:L})=>`
        <li class="gallery-item">
            <a class="gallery-link" href=${i}>
                <img class="gallery-image" src=${r} alt=${t} />
            </a>
            <ul class="gallery-caption">
              <li class="caption-item">
                <h3 class="caption-title">Likes</h3>
                <p class="caption-value">${s}</p>
              </li>
              <li class="caption-item">
                <h3 class="caption-title">Views</h3>
                <p class="caption-value">${o}</p>
              </li>
              <li class="caption-item">
                <h3 class="caption-title">Comments</h3>
                <p class="caption-value">${g}</p>
              </li>
              <li class="caption-item">
                <h3 class="caption-title">Downloads</h3>
                <p class="caption-value">${L}</p>
              </li>
            </ul>
        </li>`).join("");E.insertAdjacentHTML("beforeend",e),w.refresh()}const n=document.querySelector(".loader"),f=document.querySelector(".form"),l=document.querySelector(".btn_load"),P=document.querySelector(".gallery");let c="",u=1,d=0;f.addEventListener("submit",O);l.addEventListener("click",_);async function O(a){if(a.preventDefault(),n.classList.remove("is-hidden"),P.innerHTML="",c=a.target.elements.searchInput.value.trim(),c===""){alert("Enter search query"),n.classList.add("is-hidden");return}try{const{hits:e,totalHits:r}=await h(c,u);if(d=e.length,e.length===0){p.error({message:"Sorry, there are no images matching your search query. Please try again!"}),l.classList.add("is-hidden");return}m(e),l.classList.remove("is-hidden"),d===r&&l.classList.add("is-hidden")}catch(e){y(e)}finally{f.reset(),n.classList.add("is-hidden")}}function y(a){alert(a)}async function _(a){n.classList.remove("is-hidden"),u+=1;try{const{hits:e,totalHits:r}=await h(c,u);d+=e.length,m(e),window.scrollBy({top:400}),d===r&&(l.classList.add("is-hidden"),p.info({message:"We're sorry, but you've reached the end of search results."}))}catch(e){y(e)}finally{}n.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
