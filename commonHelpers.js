import{a as v,S as $,i as m}from"./assets/vendor-06b1bbdf.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const b="https://pixabay.com/api/",S="43873427-52524e51f424820d3ed845203",q=15;async function h(r,t){const a=`?key=${S}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=${q}`,{data:i}=await v.get(`${b}${a}&q=${r}`);return i}const w=new $(".gallery a",{captionsData:"alt",captionsDelay:250}),E=document.querySelector(".gallery");function p(r){const t=r.map(({webformatURL:a,largeImageURL:i,tags:e,likes:s,views:n,comments:g,downloads:L})=>`
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
                <p class="caption-value">${n}</p>
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
        </li>`).join("");E.insertAdjacentHTML("beforeend",t),w.refresh()}const l=document.querySelector(".loader"),f=document.querySelector(".form"),o=document.querySelector(".btn_load"),P=document.querySelector(".gallery");let c="",d=1,u=0;f.addEventListener("submit",I);o.addEventListener("click",O);async function I(r){if(r.preventDefault(),l.classList.remove("is-hidden"),P.innerHTML="",c=r.target.elements.searchInput.value.trim(),c===""){m.info({message:"Enter search query."}),l.classList.add("is-hidden"),o.classList.add("is-hidden");return}d=1;try{const{hits:t,totalHits:a}=await h(c,d);if(u=t.length,t.length===0){m.error({message:"Sorry, there are no images matching your search query. Please try again!"}),o.classList.add("is-hidden");return}p(t),o.classList.remove("is-hidden"),u===a&&o.classList.add("is-hidden")}catch(t){y(t)}finally{f.reset(),l.classList.add("is-hidden")}}function y(r){alert(r)}async function O(r){l.classList.remove("is-hidden"),d+=1;try{const{hits:t,totalHits:a}=await h(c,d);u+=t.length,p(t);const e=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:e.height*2,behavior:"smooth"}),u===a&&(o.classList.add("is-hidden"),m.info({message:"We're sorry, but you've reached the end of search results."}))}catch(t){y(t)}l.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
