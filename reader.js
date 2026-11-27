(() => {
  "use strict";
  const doc=JSON.parse(document.getElementById("resume-data").textContent);
  const sheets=document.getElementById("sheets"), measure=document.getElementById("measure");
  const status=document.getElementById("status"), modeButton=document.getElementById("reading-mode");
  const pager=document.querySelector(".rr-pagination"),links=document.getElementById("page-links");
  const media=matchMedia("(max-width:710px)");
  let choice,view,pageCount=0,observer,timer;
  try { choice=sessionStorage.getItem("resume-reading-mode"); } catch {}
  const names={brief:"一页简版",detail:"详细版",all:"整套简历"};
  function fit() {
    const width=measure.getBoundingClientRect().width;
    if(width&&sheets.clientWidth)sheets.style.setProperty("--paper-scale",Math.min(1,sheets.clientWidth/width));
  }
  function showMode() {
    const mode=["paper","flow"].includes(choice)?choice:media.matches?"flow":"paper";
    document.body.dataset.reading=mode;
    modeButton.hidden=false;modeButton.textContent=mode==="flow"?"看 A4 排版":"舒适阅读";
    modeButton.setAttribute("aria-label",mode==="flow"?"切换到 A4 排版":"切换到舒适阅读");
    document.getElementById("paper-status").textContent=names[view]+" · "+(mode==="flow"?"舒适阅读":"A4 排版")+" · "+pageCount+" 页";
    pager.hidden=mode!=="paper"||pageCount<2;
    if(mode==="flow")document.querySelectorAll("[data-flow-edition]:not([hidden]) [data-flow-photo]").forEach(img=>{
      if(!img.hasAttribute("src"))img.src=img.dataset.flowPhoto==="detail"?doc.detail.photo:doc.photo;
      img.hidden=false;
    });
    fit();
  }
  function selectPage(index) {
    [...links.children].forEach((btn,i)=>{if(i===index)btn.setAttribute("aria-current","page");else btn.removeAttribute("aria-current");});
  }
  function pageLinks(frames) {
    observer?.disconnect();links.replaceChildren();
    const sizes=new Map();
    frames.forEach((frame,i)=>{
      const btn=document.createElement("button");btn.type="button";btn.textContent=String(i+1).padStart(2,"0");btn.setAttribute("aria-label","跳到第 "+(i+1)+" 页");
      btn.addEventListener("click",()=>frame.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion:reduce)").matches?"instant":"smooth",block:"start"}));links.append(btn);
    });
    selectPage(0);
    if("IntersectionObserver" in window){
      observer=new IntersectionObserver(entries=>{
        for(const e of entries)sizes.set(e.target,e.intersectionRatio);
        const visible=frames.reduce((best,f,i)=>(sizes.get(f)||0)>(sizes.get(frames[best])||0)?i:best,0);
        if(sizes.get(frames[visible])>0)selectPage(visible);
      },{threshold:[0,.15,.35,.5,.7,.9,1]});
      frames.forEach(f=>observer.observe(f));
    }
  }
  function render() {
    const url=new URL(location.href);
    const currentPath=url.pathname.replace(/\/index\.html$/,"/").replace(/\/?$/,"/");
    const direct=[...document.querySelectorAll("[data-edition]")].find(a=>new URL(a.href).pathname===currentPath);
    const requested=direct?.dataset.edition||url.searchParams.get("view")||document.body.dataset.initialEdition;
    view=requested==="all"&&doc.published.brief&&doc.published.detail?"all":
      (requested==="detail"&&doc.published.detail)||!doc.published.brief?"detail":"brief";
    const subject=view==="detail"?doc.detail:doc;
    document.title=subject.title||doc.suite.name;
    const identity=document.querySelector(".ui-id-name");identity.textContent=subject.name||doc.name||doc.detail?.name||"个人资料";
    const cap=v=>v?.workView==="projection"?"职业路径规划":"";
    const brief=view==="detail"?[]:window.ResumePaper.build(measure,doc,false,cap(doc));
    const detail=view==="brief"?[]:window.ResumeDetail.build(measure,doc.detail,cap(doc.detail));
    const leaves=view==="all"?window.ResumeDetail.assemble(brief,detail,cap(doc.detail)):[...brief,...detail];
    const frames=leaves.map(leaf=>{const f=document.createElement("div");f.className="frame";f.append(leaf);return f;});
    sheets.replaceChildren(...frames);pageCount=frames.length;
    document.querySelectorAll("[data-flow-edition]").forEach(el=>{el.hidden=view!=="all"&&view!==el.dataset.flowEdition;});
    document.querySelectorAll("[data-edition]").forEach(a=>{if(a.dataset.edition===view)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current");});
    const canonical=document.querySelector("[data-edition][aria-current=page]").href;
    document.querySelector(".rr-text-link").href=canonical+"index.txt";
    document.querySelector('link[rel=alternate][type="text/plain"]').href=canonical+"index.txt";
    document.querySelector('link[rel=canonical]').href=canonical;
    document.querySelector(".ui-id").href=canonical;
    document.querySelector(".ui-nav a[aria-current=page]").href=canonical;
    pageLinks(frames);showMode();
  }
  document.querySelector(".versions").addEventListener("click",e=>{
    const a=e.target.closest("[data-edition]");if(!a||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.button!==0)return;
    e.preventDefault();if(a.href!==location.href)history.pushState(null,"",a.href);render();window.scrollTo(0,0);
  });
  document.querySelector("[data-portfolio-link]").addEventListener("click",()=>{
    try{sessionStorage.setItem("portfolio-return-edition",view);}catch{}
  });
  modeButton.addEventListener("click",()=>{
    choice=document.body.dataset.reading==="flow"?"paper":"flow";
    try{sessionStorage.setItem("resume-reading-mode",choice);}catch{}
    showMode();
  });
  document.getElementById("copy").addEventListener("click",async()=>{
    try{await navigator.clipboard.writeText(document.querySelector('link[rel=canonical]').href);status.textContent="已复制此版简历的链接";}
    catch{status.textContent="可从浏览器地址栏复制此页链接";}
    status.hidden=false;clearTimeout(timer);timer=setTimeout(()=>{status.hidden=true;},2500);
  });
  document.getElementById("print").addEventListener("click",()=>window.print());
  window.addEventListener("popstate",render);media.addEventListener("change",showMode);
  render();new ResizeObserver(fit).observe(sheets);document.fonts?.ready.then(render);
})();
