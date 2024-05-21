import{a as v,S as $,i as p}from"./assets/vendor-06b1bbdf.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();const b="https://pixabay.com/api/",S="43873427-52524e51f424820d3ed845203",q=4;async function m(r,e){const a=`?key=${S}&image_type=photo&orientation=horizontal&safesearch=true&page=${e}&per_page=${q}`,{data:i}=await v.get(`${b}${a}&q=${r}`);return i}const E=new $(".gallery a",{captionsData:"alt",captionsDelay:250}),P=document.querySelector(".gallery");function h(r){const e=r.map(({webformatURL:a,largeImageURL:i,tags:t,likes:s,views:o,comments:g,downloads:L})=>`
        <li class="gallery-item">
            <a class="gallery-link" href=${i}>
                <img class="gallery-image" src=${a} alt=${t} />
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
        </li>`).join("");P.insertAdjacentHTML("beforeend",e),E.refresh()}const c=document.querySelector(".loader"),f=document.querySelector(".form"),n=document.querySelector(".btn_load"),w=document.querySelector(".gallery");let l="",u=1,d=0;f.addEventListener("submit",O);n.addEventListener("click",_);async function O(r){if(r.preventDefault(),c.classList.remove("is-hidden"),w.innerHTML="",l=r.target.elements.searchInput.value.trim(),l===""){alert("Enter search query");return}try{const{hits:e,totalHits:a}=await m(l,u);if(d=e.length,e.length===0){p.error({message:"Sorry, there are no images matching your search query. Please try again!"}),n.classList.add("is-hidden");return}h(e),n.classList.remove("is-hidden"),d===a&&n.classList.add("is-hidden")}catch(e){y(e)}finally{f.reset(),c.classList.add("is-hidden")}}function y(r){alert(r)}async function _(r){c.classList.remove("is-hidden"),u+=1;try{const{hits:e,totalHits:a}=await m(l,u);d+=e.length,h(e),d===a&&(n.classList.add("is-hidden"),p.info({message:"We're sorry, but you've reached the end of search results."}))}catch(e){y(e)}finally{c.classList.add("is-hidden")}}
//# sourceMappingURL=commonHelpers.js.map
