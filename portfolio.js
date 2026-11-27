(() => {
  "use strict";
  const META = [{"n": 1, "pad": "01", "ch": "ch0", "chName": "00 · 前置履历与总览", "color": "#94A3B8", "visual": false, "title": "封面履历 · 四段工作经历与核心竞争力"}, {"n": 2, "pad": "02", "ch": "ch0", "chName": "00 · 前置履历与总览", "color": "#94A3B8", "visual": false, "title": "《予你深情侵入余生》系列 AI 漫剧（第 3—5 季分包）"}, {"n": 3, "pad": "03", "ch": "ch0", "chName": "00 · 前置履历与总览", "color": "#94A3B8", "visual": false, "title": "第 03 页"}, {"n": 4, "pad": "04", "ch": "ch0", "chName": "00 · 前置履历与总览", "color": "#94A3B8", "visual": true, "title": "全册总览视觉缓冲：AI 精品漫剧 × 平台定制短剧 × 品牌商业短片跨赛道代表作矩阵"}, {"n": 5, "pad": "05", "ch": "ch0", "chName": "00 · 前置履历与总览", "color": "#94A3B8", "visual": false, "title": "《予你深情侵入余生》"}, {"n": 6, "pad": "06", "ch": "ch0", "chName": "00 · 前置履历与总览", "color": "#94A3B8", "visual": false, "title": "第 06 页"}, {"n": 7, "pad": "07", "ch": "ch1", "chName": "01 ·《予你深情》百亿漫剧", "color": "#FB923C", "visual": false, "title": "第 07 页"}, {"n": 8, "pad": "08", "ch": "ch1", "chName": "01 ·《予你深情》百亿漫剧", "color": "#FB923C", "visual": false, "title": "第 08 页"}, {"n": 9, "pad": "09", "ch": "ch1", "chName": "01 ·《予你深情》百亿漫剧", "color": "#FB923C", "visual": false, "title": "第 09 页"}, {"n": 10, "pad": "10", "ch": "ch1", "chName": "01 ·《予你深情》百亿漫剧", "color": "#FB923C", "visual": true, "title": "《予你深情侵入余生》主视觉（一）：雨夜豪门对峙与 2.5D 高精度微表情光影定标"}, {"n": 11, "pad": "11", "ch": "ch1", "chName": "01 ·《予你深情》百亿漫剧", "color": "#FB923C", "visual": false, "title": "第 11 页"}, {"n": 12, "pad": "12", "ch": "ch1", "chName": "01 ·《予你深情》百亿漫剧", "color": "#FB923C", "visual": false, "title": "第 12 页"}, {"n": 13, "pad": "13", "ch": "ch1", "chName": "01 ·《予你深情》百亿漫剧", "color": "#FB923C", "visual": false, "title": "第 13 页"}, {"n": 14, "pad": "14", "ch": "ch1", "chName": "01 ·《予你深情》百亿漫剧", "color": "#FB923C", "visual": false, "title": "第 14 页"}, {"n": 15, "pad": "15", "ch": "ch1", "chName": "01 ·《予你深情》百亿漫剧", "color": "#FB923C", "visual": false, "title": "第 15 页"}, {"n": 16, "pad": "16", "ch": "ch1", "chName": "01 ·《予你深情》百亿漫剧", "color": "#FB923C", "visual": true, "title": "《予你深情侵入余生》主视觉（二）：S4/S5 暑期档名场面连续情绪张力与色彩母版"}, {"n": 17, "pad": "17", "ch": "ch1", "chName": "01 ·《予你深情》百亿漫剧", "color": "#FB923C", "visual": false, "title": "第 17 页"}, {"n": 18, "pad": "18", "ch": "ch1", "chName": "01 ·《予你深情》百亿漫剧", "color": "#FB923C", "visual": false, "title": "第 18 页"}, {"n": 19, "pad": "19", "ch": "ch2", "chName": "02 · 右豹560集漫剧量产", "color": "#FBBF24", "visual": false, "title": "第 19 页"}, {"n": 20, "pad": "20", "ch": "ch2", "chName": "02 · 右豹560集漫剧量产", "color": "#FBBF24", "visual": false, "title": "第 20 页"}, {"n": 21, "pad": "21", "ch": "ch2", "chName": "02 · 右豹560集漫剧量产", "color": "#FBBF24", "visual": false, "title": "第 21 页"}, {"n": 22, "pad": "22", "ch": "ch2", "chName": "02 · 右豹560集漫剧量产", "color": "#FBBF24", "visual": true, "title": "右豹商业订单池 × 百度 AI 精品漫剧联盟：暗黑都市悬疑与现代奇幻 2.5D 量产主视觉"}, {"n": 23, "pad": "23", "ch": "ch2", "chName": "02 · 右豹560集漫剧量产", "color": "#FBBF24", "visual": false, "title": "第 23 页"}, {"n": 24, "pad": "24", "ch": "ch2", "chName": "02 · 右豹560集漫剧量产", "color": "#FBBF24", "visual": false, "title": "第 24 页"}, {"n": 25, "pad": "25", "ch": "ch2", "chName": "02 · 右豹560集漫剧量产", "color": "#FBBF24", "visual": false, "title": "第 25 页"}, {"n": 26, "pad": "26", "ch": "ch2", "chName": "02 · 右豹560集漫剧量产", "color": "#FBBF24", "visual": false, "title": "第 26 页"}, {"n": 27, "pad": "27", "ch": "ch3", "chName": "03 · 微盟商业片与淘宝短剧", "color": "#60A5FA", "visual": true, "title": "微盟双 11 家电 3C 商业短片主视觉：微距工业金属质感与真实商品零变形合成"}, {"n": 28, "pad": "28", "ch": "ch3", "chName": "03 · 微盟商业片与淘宝短剧", "color": "#60A5FA", "visual": false, "title": "第 28 页"}, {"n": 29, "pad": "29", "ch": "ch3", "chName": "03 · 微盟商业片与淘宝短剧", "color": "#60A5FA", "visual": false, "title": "第 29 页"}, {"n": 30, "pad": "30", "ch": "ch3", "chName": "03 · 微盟商业片与淘宝短剧", "color": "#60A5FA", "visual": false, "title": "第 30 页"}, {"n": 31, "pad": "31", "ch": "ch3", "chName": "03 · 微盟商业片与淘宝短剧", "color": "#60A5FA", "visual": false, "title": "第 31 页"}, {"n": 32, "pad": "32", "ch": "ch3", "chName": "03 · 微盟商业片与淘宝短剧", "color": "#60A5FA", "visual": true, "title": "淘宝独家冠名《公关菜鸟》定制短剧主视觉：都市时尚职场 Lookbook 与空间绘景"}, {"n": 33, "pad": "33", "ch": "ch3", "chName": "03 · 微盟商业片与淘宝短剧", "color": "#60A5FA", "visual": false, "title": "第 33 页"}, {"n": 34, "pad": "34", "ch": "ch3", "chName": "03 · 微盟商业片与淘宝短剧", "color": "#60A5FA", "visual": false, "title": "第 34 页"}, {"n": 35, "pad": "35", "ch": "ch3", "chName": "03 · 微盟商业片与淘宝短剧", "color": "#60A5FA", "visual": false, "title": "第 35 页"}, {"n": 36, "pad": "36", "ch": "ch4", "chName": "04 · 京东×快手4.2亿特工剧", "color": "#2DD4BF", "visual": false, "title": "《重生之我在AI世界当特工》"}, {"n": 37, "pad": "37", "ch": "ch4", "chName": "04 · 京东×快手4.2亿特工剧", "color": "#2DD4BF", "visual": true, "title": "京东 × 快手星芒《重生之我在AI世界当特工》主视觉：赛博都市数字绘景与 3C 护航"}, {"n": 38, "pad": "38", "ch": "ch4", "chName": "04 · 京东×快手4.2亿特工剧", "color": "#2DD4BF", "visual": false, "title": "第 38 页"}, {"n": 39, "pad": "39", "ch": "ch4", "chName": "04 · 京东×快手4.2亿特工剧", "color": "#2DD4BF", "visual": false, "title": "第 39 页"}, {"n": 40, "pad": "40", "ch": "ch4", "chName": "04 · 京东×快手4.2亿特工剧", "color": "#2DD4BF", "visual": false, "title": "第 40 页"}, {"n": 41, "pad": "41", "ch": "ch4", "chName": "04 · 京东×快手4.2亿特工剧", "color": "#2DD4BF", "visual": false, "title": "第 41 页"}, {"n": 42, "pad": "42", "ch": "ch4", "chName": "04 · 京东×快手4.2亿特工剧", "color": "#2DD4BF", "visual": false, "title": "第 42 页"}, {"n": 43, "pad": "43", "ch": "ch5", "chName": "05 · 丰田/宁德时代与总账", "color": "#C084FC", "visual": true, "title": "广汽丰田赛那《AI与远方》商业短片主视觉：家庭公路温情叙事与动态故事板预演"}, {"n": 44, "pad": "44", "ch": "ch5", "chName": "05 · 丰田/宁德时代与总账", "color": "#C084FC", "visual": false, "title": "第 44 页"}, {"n": 45, "pad": "45", "ch": "ch5", "chName": "05 · 丰田/宁德时代与总账", "color": "#C084FC", "visual": false, "title": "第 45 页"}, {"n": 46, "pad": "46", "ch": "ch5", "chName": "05 · 丰田/宁德时代与总账", "color": "#C084FC", "visual": false, "title": "第 46 页"}, {"n": 47, "pad": "47", "ch": "ch5", "chName": "05 · 丰田/宁德时代与总账", "color": "#C084FC", "visual": false, "title": "第 47 页"}, {"n": 48, "pad": "48", "ch": "ch5", "chName": "05 · 丰田/宁德时代与总账", "color": "#C084FC", "visual": true, "title": "宁德时代广州车展互动大片主视觉：《山海奇旅》全画幅山海公路奇观底片全景"}, {"n": 49, "pad": "49", "ch": "ch5", "chName": "05 · 丰田/宁德时代与总账", "color": "#C084FC", "visual": false, "title": "第 49 页"}, {"n": 50, "pad": "50", "ch": "ch5", "chName": "05 · 丰田/宁德时代与总账", "color": "#C084FC", "visual": false, "title": "封底 · 岗位匹配方向与联系方式"}];
  const byId = id => document.getElementById(id);
  const body = document.body;
  const deck = byId("pf-deck");
  const slots = Array.from(deck.querySelectorAll(".pf-slot"));
  const modes = Array.from(document.querySelectorAll("[data-set-mode]"));
  const drawer = byId("chapter-drawer");
  const outline = byId("pf-outline");
  const filterInput = byId("pf-filter");
  const compact = matchMedia("(max-width:710px)");
  const groups = new Map();
  const pageButtons = new Map();
  const chapterNodes = new Map();
  let selected = 1;
  let mode = "";
  let frame = 0;
  let toastTimeout;

  function make(tag, cls, text) {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text) node.textContent = text;
    return node;
  }
  function chapterName(meta) { return meta.chName.replace(/^\d+\s*·\s*/, ""); }

  for (const entry of META) {
    if (!groups.has(entry.ch)) groups.set(entry.ch, []);
    groups.get(entry.ch).push(entry);
  }
  for (const [key, entries] of groups) {
    const first = entries[0];
    const chapter = make("details", "pf-chapter");
    const label = make("summary");
    label.append(make("span", "pf-ch-no", first.chName.slice(0, 2)), make("span", "", chapterName(first)));
    const list = make("div", "pf-list");
    for (const item of entries) {
      const button = make("button", "pf-ol-item");
      button.type = "button";
      button.dataset.idx = String(item.n);
      button.append(make("span", "pf-ol-no", item.pad), make("span", "", item.title));
      button.addEventListener("click", () => openPage(item.n, true));
      list.append(button);
      pageButtons.set(item.n, button);
    }
    chapter.append(label, list);
    outline.append(chapter);
    chapterNodes.set(key, chapter);
    filterInput.add(new Option(chapterName(first), key));
  }
  filterInput.add(new Option("视觉跨页", "visual"));
  byId("pf-summary").textContent = groups.size + " 个章节 · " + META.length + " 页";
  byId("btn-prev").addEventListener("click", () => openPage(selected - 1));
  byId("btn-next").addEventListener("click", () => openPage(selected + 1));

  function scheduleLayout() {
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      if (mode === "stage") {
        if (deck.clientWidth && deck.clientHeight) {
          const scale = Math.min(deck.clientWidth / 1920, deck.clientHeight / 1080);
          deck.style.setProperty("--stage-scale", String(scale));
        }
      } else {
        const widths = slots.map(slot => slot.classList.contains("is-filtered-out") ? 0 : slot.firstElementChild.clientWidth);
        widths.forEach((width, i) => {
          if (width) slots[i].firstElementChild.style.setProperty("--card-scale", String(width / 1920));
        });
      }
    });
  }
  function applyFilter() {
    const key = filterInput.value;
    let count = 0;
    for (const [i, slot] of slots.entries()) {
      const item = META[i];
      const hidden = key !== "all" && (key === "visual" ? !item.visual : item.ch !== key);
      slot.classList.toggle("is-filtered-out", hidden);
      if (!hidden) count++;
    }
    byId("pf-results").textContent = count + " 页";
    if (mode === "grid") deck.scrollTop = 0;
    scheduleLayout();
  }
  function switchMode(next) {
    if (mode === next) return;
    mode = next;
    body.dataset.mode = next;
    for (const button of modes) button.setAttribute("aria-pressed", String(button.dataset.setMode === next));
    for (const [i, slot] of slots.entries()) {
      if (next === "grid") {
        slot.tabIndex = 0;
        slot.setAttribute("role", "button");
        slot.setAttribute("aria-label", "打开第 " + META[i].n + " 页，" + META[i].title);
        slot.firstElementChild.setAttribute("aria-hidden", "true");
      } else {
        slot.removeAttribute("tabindex");
        slot.removeAttribute("role");
        slot.removeAttribute("aria-label");
        slot.firstElementChild.removeAttribute("aria-hidden");
      }
    }
    scheduleLayout();
  }
  function updatePage(n) {
    const oldButton = pageButtons.get(selected);
    if (oldButton) oldButton.removeAttribute("aria-current");
    slots[selected - 1].classList.remove("is-active");
    selected = n;
    const meta = META[n - 1];
    slots[n - 1].classList.add("is-active");
    pageButtons.get(n).setAttribute("aria-current", "page");
    chapterNodes.get(meta.ch).open = true;
    byId("pf-chapter-label").textContent = chapterName(meta);
    byId("pf-cur-title").textContent = meta.title;
    byId("pf-counter").textContent = meta.pad + " / " + META.length;
    byId("btn-prev").disabled = n === 1;
    byId("btn-next").disabled = n === META.length;
  }
  function setFragment(value) {
    const match = /^#p(\d+)$/.exec(value);
    const url = new URL(match ? "/portfolio/" + Number(match[1]) + "/" : "/portfolio/", location.href);
    if (!match) url.hash = value;
    if (url.href !== location.href) history.replaceState(null, "", url);
    updateTextLink();
  }
  function updateTextLink() {
    const path = mode === "stage" ? "/portfolio/" + selected + "/" : "/portfolio/";
    document.querySelector(".pf-text-link").href = path+"index.txt";
    document.querySelector('link[rel=alternate][type="text/plain"]').href=path+"index.txt";
  }
  function openPage(n, fromList = false, updateUrl = true) {
    n = Math.min(META.length, Math.max(1, n));
    switchMode("stage");
    updatePage(n);
    if (updateUrl) setFragment("#p" + META[n - 1].pad);
    if (fromList && compact.matches) {
      drawer.open = false;
      window.scrollTo({top:0, behavior:"instant"});
      byId("pf-counter").setAttribute("tabindex", "-1");
      byId("pf-counter").focus({preventScroll:true});
    }
    scheduleLayout();
  }
  function gridFragment() { return filterInput.value === "all" ? "#grid" : "#grid-" + filterInput.value; }
  function openGrid(updateUrl = true) {
    switchMode("grid");
    if (updateUrl) setFragment(gridFragment());
    scheduleLayout();
  }
  function loadFragment() {
    const match = /^#p(\d{1,2})$/i.exec(location.hash);
    const direct=/^\/portfolio\/(\d+)(?:\/(?:index\.html)?)?$/.exec(location.pathname);
    if (match) openPage(Number(match[1]), false, false);
    else if (/^#grid(?:-(.+))?$/.test(location.hash)) {
      const key = location.hash.slice(6);
      filterInput.value = groups.has(key) || key === "visual" ? key : "all";
      applyFilter();
      openGrid(false);
    } else if (direct) openPage(Number(direct[1]), false, false);
    else if (new URL(location.href).searchParams.has("page")) {
      openPage(Number(new URL(location.href).searchParams.get("page")), false, false);
    } else if (compact.matches) openGrid(false);
    else openPage(1, false, false);
    updateTextLink();
  }
  filterInput.addEventListener("change", () => { applyFilter(); setFragment(gridFragment()); });
  for (const button of modes) button.addEventListener("click", () => button.dataset.setMode === "grid" ? openGrid() : openPage(selected));
  deck.addEventListener("click", event => {
    const slot = event.target.closest(".pf-slot");
    if (slot && mode === "grid") openPage(Number(slot.dataset.idx), true);
  });
  deck.addEventListener("keydown", event => {
    if (mode === "grid" && (event.key === "Enter" || event.key === " ")) {
      const slot = event.target.closest(".pf-slot");
      if (slot) {event.preventDefault(); openPage(Number(slot.dataset.idx), true);}
    }
  });
  function notify(message) {
    const toast = byId("pf-toast");
    toast.textContent = message;
    toast.hidden = false;
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {toast.hidden = true;}, 2300);
  }
  async function fullscreen() {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else if (document.documentElement.requestFullscreen) await document.documentElement.requestFullscreen();
      else notify("当前浏览器支持双指放大页面");
    } catch { notify("当前浏览器无法进入全屏"); }
  }
  window.addEventListener("hashchange", loadFragment);
  document.addEventListener("fullscreenchange", () => {
    byId("btn-fullscreen").textContent = document.fullscreenElement ? "退出全屏" : "全屏";
    scheduleLayout();
  });
  document.addEventListener("keydown", event => {
    const target = event.target;
    if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.altKey || event.shiftKey || target.closest("input,select,textarea,[contenteditable=true]")) return;
    if (mode === "stage" && ["ArrowLeft","ArrowRight","Home","End"].includes(event.key)) {
      event.preventDefault();
      openPage(event.key === "Home" ? 1 : event.key === "End" ? META.length : selected + (event.key === "ArrowLeft" ? -1 : 1));
    } else if (event.key.toLowerCase() === "g") {
      mode === "grid" ? openPage(selected) : openGrid();
    } else if (event.key.toLowerCase() === "f" && mode === "stage") fullscreen();
  });
  byId("btn-fullscreen").addEventListener("click", fullscreen);
  byId("btn-print-deck").addEventListener("click", () => window.print());
  byId("btn-copy-link").addEventListener("click", async () => {
    setFragment(mode === "grid" ? gridFragment() : "#p" + META[selected - 1].pad);
    try {await navigator.clipboard.writeText(location.href); notify("已复制当前链接");}
    catch {window.prompt("复制当前链接", location.href);}
  });
  drawer.open = !compact.matches;
  if (!new URL(location.href).searchParams.has("from")) {
    try {
      const view=sessionStorage.getItem("portfolio-return-edition");
      if (view==="detail"||view==="all") {
        for(const link of document.querySelectorAll(".ui-id,.ui-nav a:first-child"))link.href="/resume/"+view+"/";
      }
    } catch {}
  }
  compact.addEventListener("change", () => {drawer.open = !compact.matches; scheduleLayout();});
  new ResizeObserver(scheduleLayout).observe(deck);
  window.addEventListener("resize", scheduleLayout);
  updatePage(1);
  applyFilter();
  loadFragment();
  body.classList.add("pf-ready");
  scheduleLayout();
})();

