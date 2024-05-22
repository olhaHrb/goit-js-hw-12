import{a as v,S as $,i as m}from"./assets/vendor-06b1bbdf.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const b="https://pixabay.com/api/",S="43873427-52524e51f424820d3ed845203",q=15;async function p(r,t){const a=`?key=${S}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=${q}`,{data:i}=await v.get(`${b}${a}&q=${r}`);return i}const w=new $(".gallery a",{captionsData:"alt",captionsDelay:250}),E=document.querySelector(".gallery");function h(r){const t=r.map(({webformatURL:a,largeImageURL:i,tags:e,likes:s,views:o,comments:g,downloads:L})=>`
        <li class="gallery-item">
            <a class="gallery-link" href=${i}>
                <img class="gallery-image" src=${a} alt=${e} />
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
        </li>`).join("");E.insertAdjacentHTML("beforeend",t),w.refresh()}const n=document.querySelector(".loader"),y=document.querySelector(".form"),l=document.querySelector(".btn_load"),P=document.querySelector(".gallery");let c="",u=1,d=0;y.addEventListener("submit",I);l.addEventListener("click",O);async function I(r){if(r.preventDefault(),n.classList.remove("is-hidden"),P.innerHTML="",c=r.target.elements.searchInput.value.trim(),c===""){alert("Enter search query"),n.classList.add("is-hidden");return}try{const{hits:t,totalHits:a}=await p(c,u);if(d=t.length,t.length===0){m.error({message:"Sorry, there are no images matching your search query. Please try again!"}),l.classList.add("is-hidden");return}h(t),l.classList.remove("is-hidden"),d===a&&l.classList.add("is-hidden")}catch(t){f(t)}finally{y.reset(),n.classList.add("is-hidden")}}function f(r){alert(r)}async function O(r){n.classList.remove("is-hidden"),u+=1;try{const{hits:t,totalHits:a}=await p(c,u);d+=t.length,h(t);const e=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:e.height*2,behavior:"smooth"}),d===a&&(l.classList.add("is-hidden"),m.info({message:"We're sorry, but you've reached the end of search results."}))}catch(t){f(t)}n.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
