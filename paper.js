window.GUIDE = {esc: function escapeHTML(value) {
  const entities = {"&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"};
  return String(value ?? "").replace(/[&<>"']/g, ch => entities[ch]);
}};
(() => {
  "use strict";
  const {esc} = window.GUIDE;
  const labels = {
    work: ["工作履历", "Work Experience"], projects: ["代表项目", "Selected Projects"],
    education: ["教育背景", "Education"], contact: ["个人信息", "Information"],
    skills: ["工作技能", "Skills"], awards: ["获奖经历", "Awards"]
  };
  const contactFields = {phone:"电话",email:"邮箱",portfolio:"作品集",city:"意向城市",years:"工作年限",salary:"目前薪资",availability:"到岗时间"};
  const primaryContactKeys = ["phone","email","portfolio"];
  const metaContactKeys = ["city","years","salary","availability"];
  const levels = ["仅名称","入门","能独立使用","熟练","可指导他人","专精"];
  const example = {};
  const clean = s => typeof s === "string" ? s.trim() : "";
  const sectionHeading = key => '<h3 class="cv-heading"><b>'+labels[key][0]+'</b><span lang="en">'+labels[key][1]+'</span></h3>';
  function portfolioURL(value) {
    let url = clean(value);
    if (!url || /\s/.test(url)) return "";
    if (!/^https?:\/\//i.test(url) && /^[\w-]+(?:\.[\w-]+)+(?:[/?#]|$)/i.test(url)) url="https://"+url;
    try { const u=new URL(url); return ["https:","http:"].includes(u.protocol) ? u.href : ""; } catch { return ""; }
  }
  // Each unit keeps a section/entry heading with its first line. Only long text needs splitting.
  const block = html => ({html});
  function columns(doc, isExample) {
    const left=[],right=[],placeholders=doc.placeholders||new Set();
    const attributes=path=>' data-cv-field="'+path+'"'+(placeholders.has(path)?' data-example="true"':"");
    const tagged=(key,value)=>clean(value)?'<span'+attributes(key)+'>'+esc(clean(value))+'</span>':"";
    const line=(body,kind,path,prefix="")=>({body,kind,prefix,path,hint:placeholders.has(path),emphasis:kind==="bullet"});
    const name=clean(doc.name),role=clean(doc.title);
    if (name || role) left.push(block('<header class="cv-identity">'+(name?'<h2'+attributes("name")+'>'+esc(name)+'</h2>':'')+(role?'<div class="cv-rule"></div><p'+attributes("title")+'>'+esc(role)+'</p>':'')+'</header>'));
    if (clean(doc.summary))left.push(line(clean(doc.summary),"quote","summary"));
    for (const key of ["work","projects","education"]) {
      let pending=sectionHeading(key);
      for (const [i,entry] of (doc[key]||[]).entries()) {
        const id=key+":"+i+":";
        const heading=[tagged(id+"org",entry.org),tagged(id+"role",entry.role)].filter(Boolean).join('<span class="cv-slash"> / </span>');
        const date=clean(entry.date);
        const bulletLines=clean(entry.text).split(/\n/).map(s=>s.replace(/^\s*[•·●]\s*/u,"").trim()).filter(Boolean);
        if (!heading && !date && !bulletLines.length) continue;
        const head=pending+'<div class="cv-entry-head">'+(heading?'<h4>'+heading+'</h4>':'')+(date?'<p class="cv-date"'+attributes(id+"date")+'>'+esc(date)+'</p>':'')+'</div>';
        pending="";
        if (bulletLines.length) bulletLines.forEach((v,n)=>left.push(line(v,"bullet",id+"text",n===0?head:"")));
        else left.push(block(head));
      }
    }
    if(doc.photo)right.push(block('<figure class="cv-picture"'+attributes("photo")+'><img class="cv-photo" src="'+esc(doc.photo)+'" alt="'+(isExample||placeholders.has("photo")?"虚构示例人物的照片":"简历照片")+'">'+(placeholders.has("photo")?'<figcaption>示例照片</figcaption>':"")+'</figure>'));
    let contactHead=sectionHeading("contact");
    const renderContactValue=(key,value)=>{
      const target=key==="portfolio"?portfolioURL(value):key==="email"&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)?"mailto:"+value:"";
      return target&&!placeholders.has(key)?'<a href="'+esc(target)+'" target="_blank" rel="noopener noreferrer">'+esc(value)+'</a>':esc(value);
    };
    const primaryItems=primaryContactKeys.map(key=>{
      const value=clean(doc[key]);if(!value)return "";
      return '<div class="cv-contact-item"'+attributes(key)+'><span>'+contactFields[key]+'</span><b>'+renderContactValue(key,value)+'</b></div>';
    }).filter(Boolean);
    const metaItems=metaContactKeys.map(key=>{
      const value=clean(doc[key]);if(!value)return "";
      const wide=Array.from(value).length>9?" cv-meta-wide":"";
      const label=key==="salary"&&doc.workView==="projection"?"期望薪资":contactFields[key];
      return '<div class="cv-meta-item'+wide+'"'+attributes(key)+'><span>'+label+'</span><b>'+esc(value)+'</b></div>';
    }).filter(Boolean);
    if(primaryItems.length){
      right.push(block(contactHead+'<div class="cv-contact-list">'+primaryItems.join("")+'</div>'));
      contactHead="";
    }
    if(metaItems.length){
      const divided=primaryItems.length?" cv-meta-divided":"";
      right.push(block(contactHead+'<div class="cv-meta-grid'+divided+'">'+metaItems.join("")+'</div>'));
      contactHead="";
    }
    let skillHead=sectionHeading("skills");
    for(const [i,skill] of (doc.skills||[]).entries()){
      const name=clean(skill.name);if(!name)continue;
      const n=Number(skill.level)||0,id="skills:"+i+":";
      right.push(block(skillHead+'<div class="cv-skill"><div'+attributes(id+"name")+'>'+esc(name)+'</div>'+(n?'<div class="cv-bar" role="img"'+attributes(id+"level")+' aria-label="'+esc(levels[n])+'"><i style="width:'+n*20+'%"></i></div>':'')+'</div>'));skillHead="";
    }
    let awardHead=sectionHeading("awards");
    for(const [i,award] of (doc.awards||[]).entries()){
      if(!clean(award.name)&&!clean(award.detail))continue;
      const id="awards:"+i+":";
      right.push(block(awardHead+'<div class="cv-award">'+(clean(award.name)?'<b'+attributes(id+"name")+'>'+esc(award.name)+'</b>':'')+(clean(award.detail)?'<p'+attributes(id+"detail")+'>'+esc(award.detail)+'</p>':'')+'</div>'));awardHead="";
    }
    if(!left.length&&!right.length)left.push(block('<div class="cv-identity cv-blank"><h2>你的姓名</h2><div class="cv-rule"></div><p>目标岗位</p></div><p class="cv-empty-note">填写内容后，这里会显示可投递的简历。</p>'));
    return {left,right};
  }
  function makePage() {
    const page=document.createElement("article"); page.className="cv-page";
    page.innerHTML='<div class="cv-main"></div><aside class="cv-rail"></aside><div class="cv-folio"></div>';
    return page;
  }
  function paintUnit(node, unit, text, continuation) {
    if (unit.html!==undefined) { node.innerHTML=unit.html;return; }
    node.innerHTML=continuation?"":unit.prefix;
    const p=document.createElement("p");
    p.className="cv-"+unit.kind+(continuation?" cv-continued":"");
    p.dataset.cvField=unit.path;if(unit.hint)p.dataset.example="true";
    const lead=unit.emphasis&&!continuation&&text.match(/^([\p{L}][^：:\n]{0,22}(?:：|:(?![\d/])))\s*/u);
    if(lead){const b=document.createElement("strong");b.textContent=lead[1];p.append(b,document.createTextNode(text.slice(lead[0].length)));}
    else p.textContent=text;
    node.append(p);
  }
  function paginate(holder, flows, createPage) {
    holder.replaceChildren(); const pages=[];
    function getPage(i) {
      if (!pages[i]) { const sheet=createPage(i); holder.append(sheet);pages.push(sheet); }
      return pages[i];
    }
    for (const [className,units] of flows) {
      let index=0,col=getPage(0).querySelector(className);
      const next=()=>{col=getPage(++index).querySelector(className);};
      for (const unit of units) {
        let remaining=unit.body||"", continued=false;
        for (;;) {
          const node=document.createElement("div");node.className="cv-unit";
          const occupied=col.childElementCount>0;
          col.append(node);paintUnit(node,unit,remaining,continued);
          if (col.scrollHeight<=col.clientHeight+1) break;
          if (occupied && (!remaining || remaining.length<280)) {node.remove();next();continue;}
          if (!remaining) break;
          const chars=Array.from(remaining); let lo=0,hi=chars.length;
          while(lo<hi) {
            const mid=Math.ceil((lo+hi)/2);
            paintUnit(node,unit,chars.slice(0,mid).join(""),continued);
            if (col.scrollHeight<=col.clientHeight+1)lo=mid;else hi=mid-1;
          }
          if (occupied && lo<(unit.prefix?36:16)) {node.remove();next();continue;}
          const count=Math.max(1,lo);
          paintUnit(node,unit,chars.slice(0,count).join(""),continued);
          remaining=chars.slice(count).join(""); if(!remaining)break;
          continued=true;next();
        }
      }
    }
    return pages;
  }
  function build(holder, doc, isExample, caption="") {
    const parts=columns(doc,isExample),flows=[[".cv-main",parts.left],[".cv-rail",parts.right]];
    let pages=paginate(holder,flows,makePage);
    if(pages.length>1)pages=paginate(holder,flows,()=>{const sheet=makePage();sheet.classList.add("cv-compact");return sheet;});
    pages.forEach((p,i)=>{
      p.setAttribute("aria-label",(caption||(isExample?"排版示例":"我的简历"))+"，第 "+(i+1)+" 页");
      p.querySelector(".cv-folio").textContent=[caption,isExample?"虚构排版示例":"",pages.length>1?(i+1)+" / "+pages.length:""].filter(Boolean).join("     ·     ");
    });
    return pages;
  }
  window.ResumePaper={build,paginate,columns,example,labels,levels,contactFields};
})();

"use strict";
function createResumeDetailModel() {
  const textFields={name:"姓名",title:"求职目标",photo:"照片",city:"意向城市",phone:"电话",email:"邮箱",portfolio:"作品集",years:"工作年限",salary:"目前薪资",availability:"到岗时间",sideLabel:"页边题字",birth:"出生年月",degree:"学历",address:"居住地",about:"关于我",skillsText:"专业技能",languages:"语言能力",certificates:"技能证书",honorsText:"荣誉奖项"};
  const rowKinds=["education","work","projects"],rowKeys=["org","role","date","text"];
  const trim=value=>typeof value==="string"?value.trim():"";
  const lines=value=>trim(value).split(/\r?\n/).map(line=>line.replace(/^\s*[•·●◇]\s*/u,"").trim()).filter(Boolean);
  const hasRow=row=>rowKeys.some(key=>trim(row[key]));
  function read(value) {
    if(typeof value!=="string")throw Error("详细版字段应为文字。");
    return value;
  }
  function rows(items) {
    if(!Array.isArray(items))throw Error("详细版经历应为列表。");
    return items.map(item=>{
      if(!item||typeof item!=="object"||Array.isArray(item))throw Error("详细版经历格式有误。");
      return Object.fromEntries(rowKeys.map(key=>[key,read(item[key]??"")]));
    });
  }
  function normalize(source={}) {
    if(!source||typeof source!=="object"||Array.isArray(source))throw Error("详细版格式有误。");
    if(source.detailVersion!==undefined&&source.detailVersion!==2)throw Error("详细版数据版本无法读取。");
    const full=source.detailVersion===2,result=full?{detailVersion:2,workView:source.workView==="projection"?"projection":"current"}:{};
    for(const key of Object.keys(textFields))if(full||Object.hasOwn(source,key))result[key]=read(source[key]??"");
    for(const kind of rowKinds)if(full||Object.hasOwn(source,kind))result[kind]=rows(source[kind]??[]);
    if(result.photo&&(result.photo.length>480000||!/^data:image\/(?:jpeg|png|webp);base64,[a-z\d+/]+=*$/i.test(result.photo)))throw Error("详细版照片格式有误。");
    return result;
  }
  const blank=()=>normalize({detailVersion:2,sideLabel:"RESUME"});
  const hasContent=doc=>Object.keys(textFields).some(key=>key!=="sideLabel"&&trim(doc[key]))||rowKinds.some(kind=>doc[kind]?.some(hasRow));
  // Materialize older linked editions once. Version 2 never reads values from the brief.
  function migrate(brief,changes) {
    if(changes?.detailVersion===2){
      const extra={};
      if(!Object.hasOwn(changes,"salary")&&brief?.salary)extra.salary=brief.salary;
      if(!Object.hasOwn(changes,"availability")&&brief?.availability)extra.availability=brief.availability;
      return normalize({...changes,...extra});
    }
    const qualifications=(brief.education||[]).map(row=>trim(row.role)).join(" ");
    const degree=["博士","硕士","研究生","本科","学士","大专","专科","高中"].find(level=>qualifications.includes(level))||"";
    const doc={...brief,sideLabel:"RESUME",about:brief.summary||"",birth:"",degree,address:"",
      skillsText:(brief.skills||[]).map(s=>trim(s.name)).filter(Boolean).join("、"),languages:"",certificates:"",
      honorsText:(brief.awards||[]).map(r=>[trim(r.name),trim(r.detail)].filter(Boolean).join(" · ")).filter(Boolean).join("\n")};
    for(const kind of rowKinds)doc[kind]=rows((brief[kind]||[]).filter(hasRow));
    return normalize({...doc,...normalize(changes),detailVersion:2});
  }
  return {textFields,rowKinds,trim,lines,hasRow,normalize,blank,hasContent,migrate};
}

(() => {
  "use strict";
  const {esc}=window.GUIDE;
  const {textFields,rowKinds,trim,lines,hasRow,normalize,blank,hasContent,migrate}=createResumeDetailModel();
  const heading=(cn,en)=>'<h3 class="dd-section"><b>'+esc(cn)+'</b><span lang="en">'+esc(en)+'</span></h3>';
  const tagged=(key,value,cls="")=>trim(value)?'<span'+(cls?' class="'+cls+'"':'')+' data-cv-field="'+key+'">'+esc(value)+'</span>':"";
  function linkValue(key,value) {
    const raw=trim(value);
    if(!raw)return "";
    if(key==="email"&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(raw))return '<a href="mailto:'+esc(raw)+'">'+esc(raw)+'</a>';
    if(key==="portfolio"&&!/\s/.test(raw)){
      const candidate=/^https?:\/\//i.test(raw)?raw:/^[\w-]+(?:\.[\w-]+)+(?:[/?#]|$)/i.test(raw)?"https://"+raw:"";
      if(candidate){
        try{const u=new URL(candidate);if(["https:","http:"].includes(u.protocol))return '<a href="'+esc(u.href)+'" target="_blank" rel="noopener noreferrer">'+esc(raw)+'</a>';}catch{}
      }
    }
    return esc(raw);
  }
  function profile(d) {
    const info=(name,key,value)=>trim(value)?'<p><b>'+name+'</b><span data-cv-field="'+key+'">'+linkValue(key,value)+'</span></p>':"";
    const salaryLabel=d.workView==="projection"?"期望薪资":"目前薪资";
    const personal=info("工作年限","years",d.years)+info("学历","degree",d.degree)+info(salaryLabel,"salary",d.salary)+info("到岗时间","availability",d.availability)+info("出生年月","birth",d.birth);
    const contact=info("电话","phone",d.phone)+info("邮箱","email",d.email)+
      (trim(d.address)?info("居住地","address",d.address):info("意向城市","city",d.city))+info("作品集","portfolio",d.portfolio);
    const photo=d.photo?'<img class="dd-photo" data-cv-field="photo" src="'+esc(d.photo)+'" alt="简历照片">':"";
    const watermark=trim(d.sideLabel)?'<p class="dd-watermark" lang="en"><span data-cv-field="sideLabel">'+esc(d.sideLabel)+'</span></p>':'<p class="dd-watermark" lang="en">RESUME</p>';
    return '<header class="dd-title"><div class="dd-title-main">'+(trim(d.name)?'<h2 data-cv-field="name">'+esc(d.name)+'</h2>':"")+
      (trim(d.title)?'<div class="dd-target"><span>求职目标</span><i>·</i>'+tagged("title",d.title)+'</div>':"")+'</div>'+watermark+'</header>'+
      (photo||personal||contact?'<div class="dd-profile">'+photo+'<div class="dd-profile-grid">'+
        (personal?'<div class="dd-info">'+personal+'</div>':"")+(contact?'<div class="dd-info">'+contact+'</div>':"")+'</div></div>':"");
  }
  function paragraphs(units,values,prefix,kind,path,emphasis=true) {
    values.forEach((text,i)=>units.push({body:text,kind,path,prefix:i===0?prefix:"",emphasis}));
  }
  function experience(units,doc,key,cn,en) {
    let opening=heading(cn,en);
    doc[key].forEach((row,index)=>{
      if(!hasRow(row))return;
      const id=key+":"+index+":";
      const orgPart=tagged(id+"org",row.org,"dd-org"),rolePart=tagged(id+"role",row.role,"dd-role"),datePart=tagged(id+"date",row.date,"dd-date");
      const titleGroup=[orgPart,rolePart].filter(Boolean).join(" ");
      const head=opening+'<div class="dd-record"><div class="dd-record-main">'+titleGroup+'</div>'+(datePart?'<div class="dd-record-side">'+datePart+'</div>':"")+'</div>';
      opening="";
      const body=lines(row.text);
      if(body.length)paragraphs(units,body,head,key==="education"?"dd-edu":"dd-bullet",id+"text",key!=="education");
      else units.push({html:head});
    });
  }
  function contentUnits(doc) {
    const units=[{html:profile(doc)}],aboutLines=lines(doc.about);
    paragraphs(units,aboutLines,heading("关于我","Executive Summary"),aboutLines.length>1?"dd-bullet":"dd-summary","about");
    experience(units,doc,"work","工作经验","Work Experience");
    experience(units,doc,"projects","项目经历","Selected Projects");
    experience(units,doc,"education","教育背景","Education");
    let opening=heading("技能证书","Skills & Honors");
    for(const key of ["skillsText","languages","certificates","honorsText"]){
      const values=lines(doc[key]);
      if(!values.length)continue;
      values[0]=textFields[key]+"："+values[0];
      paragraphs(units,values,opening,"dd-qual",key,true);opening="";
    }
    return units;
  }
  function build(holder,doc,caption="") {
    const units=contentUnits(doc);
    const runningLeft=[trim(doc.name),trim(doc.title)].filter(Boolean).join(" · ");
    const runningRight=trim(doc.sideLabel)||"CURRICULUM VITAE";
    const pages=window.ResumePaper.paginate(holder,[[".dd-body",units]],i=>{
      const page=document.createElement("article");page.className="cv-page cv-detail"+(i>0?" is-continuation":"");
      const headBar=i>0&&runningLeft?'<header class="dd-running-head"><span>'+esc(runningLeft)+'</span><span lang="en">'+esc(runningRight)+'</span></header>':"";
      page.innerHTML=headBar+'<div class="dd-body"></div><div class="cv-folio"></div>';
      return page;
    });
    pages.forEach((p,i)=>{
      p.setAttribute("aria-label","详细版，第 "+(i+1)+" 页");
      p.querySelector(".cv-folio").textContent=[caption,pages.length>1?(i+1)+" / "+pages.length:""].filter(Boolean).join(" · ");
    });
    return pages;
  }
  function assemble(brief,details,caption="") {
    const pages=[...brief,...details];
    details.forEach((page,i)=>{
      const number=brief.length+i+1;
      page.setAttribute("aria-label","整套简历，第 "+number+" 页");
      page.querySelector(".cv-folio").textContent=[caption,number+" / "+pages.length].filter(Boolean).join(" · ");
    });
    return pages;
  }
  window.ResumeDetail={normalize,blank,hasContent,migrate,build,assemble,contentUnits,textFields,rowKinds,hasRow};
})();
