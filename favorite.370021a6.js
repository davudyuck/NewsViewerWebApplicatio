function e(e,t){try{const a=JSON.stringify(t);localStorage.setItem(e,a)}catch(e){console.error("Oops, something went wrong: ",e.message)}}const t=e=>{try{const t=localStorage.getItem(e);return null===t?[]:JSON.parse(t)}catch(e){console.error("Oops, something went wrong: ",e.message)}};function a(e){return String(e).padStart(2,"0")}!function(){const e="theme";let t=!0;const a=document.querySelector("#theme-clicker"),s=document.querySelector("body");a.addEventListener("change",(function(){s.classList.toggle("dark"),t=!t,localStorage.setItem(e,t)})),null!==localStorage.getItem(e)&&(t=JSON.parse(localStorage.getItem(e))),t?a.checked=!1:(s.classList.add("dark"),a.checked=!0)}();const s={sectionNews:document.querySelector(".section-news")};let n=[],r=[];n=t("favorite"),r=t("read"),console.log(n),function(e){const t=document.querySelectorAll(".header__link"),a=document.querySelector(".search-form"),s=document.querySelector(".search-button__mobile");switch(t.forEach((e=>{e.classList.remove("header__link--active")})),e){case 1:t[0].classList.add("header__link--active");break;case 2:t[1].classList.add("header__link--active"),a.remove(),s.remove();break;case 3:a.remove(),s.remove(),t[2].classList.add("header__link--active");break;default:console.log('error. value in function "setActiveLink(`HERE`)" is incorrect')}}(2);const c=n.map((function(e){return"news"===e.flag?function({category:e,lead_paragraph:t,id:s,published_date:n,url:r,title:c,media:i,favorite:d,read:o}){const l="https://www.nytimes.com/",u=function(e){const t=new Date(`${e}`);return`${a(t.getUTCDate())}/${a(t.getUTCMonth()+1)}/${t.getUTCFullYear()}`}(n),g="https://i.postimg.cc/vZrscCZ0/tablet-1x.jpg";let p="";if(i)if(1===i.length){const e=i[0]["media-metadata"],[,,t]=e;p=t.url}else if(4===i.length){const e=i.find((e=>440===e.width));p=e?`${e.url}`:g}else{const e=i.find((e=>"master495"===e.subtype));p=e?`${l}${e.url}`:g}else p=g;let _="";return _="true"===String(d)?"Remove from favorite":"Add to favorite",`<li data-read="${o}" class="news-card">\n    <div class="news-card__image">\n     <div class="news-card__darkend" data-read="${o}"></div>\n      <img src="${p}" alt="News" />\n      <span class="news-card__category">${e}</span>\n      <span class="news-card__status" data-read="${o}">Already read\n      <svg class="news-card__icon-tick" width="18px" height="18px">\n       <use xlink:href="#icon-tick"></use>\n       </svg>\n      </span>\n      <span class="news-card__status--have" data-read="${o}">Have read</span>\n      <button data-id="${s}" data-favorite="${d}" class="news-card__favorite">\n        <span>${_}</span>\n        <svg class="news-card__icon" data-favorite="${d}" width="16px" height="16px">\n      <use xlink:href="#icon-heart-empty"></use>\n         </svg>\n         <svg class="news-card__icon-full" data-favorite="${d}" width="16px" height="16px">\n              <use xlink:href="#icon-heart-full"></use>\n            </svg>\n      </button>\n    </div>\n    <div class="news-card__wrapper">\n    <h2 class="news-card__title">\n      ${c}\n    </h2>\n    <p class="news-card__text">\n      ${t}\n    </p>    \n      <div class="news-card__box">\n        <span class="news-card__date">${u}</span>\n        <a data-ida="${s}" target="_blank" data-read="${o}" class="news-card__read" href="${r}">Read more</a>\n      </div>\n    </div>\n  </li>`}(e):function({temp:e,descriptrion:t,city:a,icon:s,dayWeek:n,date:r}){return`<li class="weather__card">\n    <div class="weather__wrapper">\n      <p class="weather__temperature">${e}°</p>\n      <div class="weather__box">\n        <p class="weather__description">${t}</p>\n        <div class="weather__city">\n            <svg class="weather__location-icon">\n              <path d="M16 2.001c-6.072 0.007-10.992 4.927-11 10.998v0.001c0 0.005 0 0.011 0 0.017 0 2.486 0.833 4.777 2.236 6.61l-0.019-0.026s0.3 0.395 0.348 0.45l8.435 9.95 8.439-9.953c0.044-0.053 0.345-0.447 0.345-0.447l0.001-0.004c1.383-1.806 2.216-4.098 2.216-6.583 0-0.005 0-0.009 0-0.014v0.001c-0.007-6.072-4.928-10.993-11-11h-0.001zM16 17c-2.209 0-4-1.791-4-4s1.791-4 4-4v0c2.209 0 4 1.791 4 4s-1.791 4-4 4v0z"></path>\n            </svg>\n            ${a}\n        </div>\n    </div>\n  </div>\n<img class="weather-picture" src="https://openweathermap.org/img/wn/${s}@2x.png"></img>\n  <p class="weather__day">${n}</p>\n  <p class="weather__date">${r}</p>\n</li>`}(e)})).join("");s.sectionNews.innerHTML=c,s.sectionNews.addEventListener("click",(function(t){const a=t.target.closest("button"),s=t.target.closest("li");if(a){const s=a.dataset.id;if("true"===a.dataset.favorite){const t=n.findIndex((e=>String(e.id)===s));n.splice(t,1),a.children[1].dataset.favorite="false",a.children[2].dataset.favorite="false",a.dataset.favorite="false",a.children[0].textContent="Add to favorite",e("favorite",n),r=r.map((e=>(String(e.id)===s&&(e.favorite="false"),e))),e("read",r)}t.target.closest("li").remove()}if("A"===t.target.nodeName){const a=t.target.dataset.ida,c=t.target.dataset.read,i=new Date,d=i.getFullYear(),o=String(i.getMonth()+1).padStart(2,"0"),l=String(i.getDate()).padStart(2,"0"),u=`${d}-${o}-${l}`;if("true"===c){const t=r.findIndex((e=>String(e.id)===a));r[t].readed_date=u,e("read",r)}else{const c=n.find((e=>String(e.id)===a));c.read=!0,n=n.map((e=>(String(e.id)===a&&(e.read="true"),e))),e("favorite",n),c.readed_date=u,t.target.dataset.read="true",r.push(c),s.dataset.read="true",e("read",r)}}})),(()=>{const e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu]"),a=document.querySelector("body");e.addEventListener("click",(()=>{const s="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!s),t.classList.toggle("is-open"),a.classList.toggle("scroll")}))})();const i=document.querySelector(".menu__container"),d=document.querySelector("body");i.addEventListener("click",(e=>{i.classList.contains(".is-open")?d.classList.add(".is-modal"):d.classList.remove(".is-modal")}));
//# sourceMappingURL=favorite.370021a6.js.map
