(() => {
  "use strict";
  const META = [{"n": 1, "pad": "01", "ch": "ch0", "chName": "00 · 前置履历与总览", "color": "#94A3B8", "visual": false, "title": "封面页头 + 关于我与最新四段工作经历"}, {"n": 2, "pad": "02", "ch": "ch0", "chName": "00 · 前置履历与总览", "color": "#94A3B8", "visual": false, "title": "五大代表作总览（双主作 + 三专项）"}, {"n": 3, "pad": "03", "ch": "ch0", "chName": "00 · 前置履历与总览", "color": "#94A3B8", "visual": false, "title": "作品集 50 页完整目录与章节配比"}, {"n": 4, "pad": "04", "ch": "ch1", "chName": "01 ·《云浮若梦归》长剧", "color": "#FB923C", "visual": false, "title": "代表作一 ·《云浮若梦归》剧集总览与核心数据"}, {"n": 5, "pad": "05", "ch": "ch1", "chName": "01 ·《云浮若梦归》长剧", "color": "#FB923C", "visual": false, "title": "立项前测：双平台目标用户画像、评论痛点调研与三大选本硬标尺推导"}, {"n": 6, "pad": "06", "ch": "ch1", "chName": "01 ·《云浮若梦归》长剧", "color": "#FB923C", "visual": false, "title": "《云浮若梦归》AI 自动化选本 SOP、竞品分析与定案依据"}, {"n": 7, "pad": "07", "ch": "ch1", "chName": "01 ·《云浮若梦归》长剧", "color": "#FB923C", "visual": false, "title": "参考剧本高原创改编：反潮流切口 × 单集直线叙事 × 高密度零冷场视听编排"}, {"n": 8, "pad": "08", "ch": "ch1", "chName": "01 ·《云浮若梦归》长剧", "color": "#FB923C", "visual": false, "title": "世界观构建（上）：晚唐至北宋留世典籍、官档与地方县志全貌查证"}, {"n": 9, "pad": "09", "ch": "ch1", "chName": "01 ·《云浮若梦归》长剧", "color": "#FB923C", "visual": false, "title": "世界观构建（下）：制度身份锚定下的核心人物设定与四角博弈关系网"}, {"n": 10, "pad": "10", "ch": "ch1", "chName": "01 ·《云浮若梦归》长剧", "color": "#FB923C", "visual": true, "title": "大视觉缓冲跨页（一）：深宫侯府冷血夜宴 ⇄ 南市浮生记烟火做局「双界宿命对撞」全画幅主视觉"}, {"n": 11, "pad": "11", "ch": "ch1", "chName": "01 ·《云浮若梦归》长剧", "color": "#FB923C", "visual": false, "title": "人物资产一致性：单图平光定标 × 9:16 四格正背板 × 四参考解耦跨阶段换装伤妆"}, {"n": 12, "pad": "12", "ch": "ch1", "chName": "01 ·《云浮若梦归》长剧", "color": "#FB923C", "visual": false, "title": "场景资产一致性：平面动线定轴 × 常驻陈设锚定 × 标准九机位正反打底图墙"}, {"n": 13, "pad": "13", "ch": "ch1", "chName": "01 ·《云浮若梦归》长剧", "color": "#FB923C", "visual": false, "title": "道具与关键道具一致性：L1/L2 分级管控 × 白底三视图 × 净面剥离防乱码回贴"}, {"n": 14, "pad": "14", "ch": "ch1", "chName": "01 ·《云浮若梦归》长剧", "color": "#FB923C", "visual": true, "title": "故事板大视觉缓冲跨页（二）：EP25《靖安侯府寿宴 · 献糕藏证当席试毒》连续 6 镜宽银幕画廊"}, {"n": 15, "pad": "15", "ch": "ch1", "chName": "01 ·《云浮若梦归》长剧", "color": "#FB923C", "visual": false, "title": "故事板与单镜分镜图职责闭环：整场连铺审节奏轴线 ⇄ 单镜净图锁首帧真值"}, {"n": 16, "pad": "16", "ch": "ch1", "chName": "01 ·《云浮若梦归》长剧", "color": "#FB923C", "visual": false, "title": "逐镜分镜设计与执行表：一镜一独立分镜图 × 固定坐标三态调度 × 连续段派单"}, {"n": 17, "pad": "17", "ch": "ch1", "chName": "01 ·《云浮若梦归》长剧", "color": "#FB923C", "visual": false, "title": "高难度动作 3D 白模控场：20% 高危镜头精准介入 × 透视手部锁死 × 净增益验收"}, {"n": 18, "pad": "18", "ch": "ch1", "chName": "01 ·《云浮若梦归》长剧", "color": "#FB923C", "visual": false, "title": "视频大模型选型路由与疑难排障：分戏精准派单 × 动态背景锁死 × 固 Seed 无损救片"}, {"n": 19, "pad": "19", "ch": "ch1", "chName": "01 ·《云浮若梦归》长剧", "color": "#FB923C", "visual": false, "title": "后期声画统合与成片精修：多角色情绪配音 × 非遗器物声桥 × 剪辑 v1–v5 × 达芬奇双影调"}, {"n": 20, "pad": "20", "ch": "ch1", "chName": "01 ·《云浮若梦归》长剧", "color": "#FB923C", "visual": true, "title": "大视觉缓冲跨页（三）：《云浮若梦归》9:16 竖屏正片母版样貌与高光名场面剧照画廊"}, {"n": 21, "pad": "21", "ch": "ch1", "chName": "01 ·《云浮若梦归》长剧", "color": "#FB923C", "visual": false, "title": "《云浮若梦归》收官复盘：双端 5,077 万+ 热度战报 × 1,450 元/分 制片账本 × 可复用 SOP 总结"}, {"n": 22, "pad": "22", "ch": "ch2", "chName": "02 · 京东×敦煌商业TVC", "color": "#60A5FA", "visual": true, "title": "代表作二开场大视觉：京东 × 敦煌美术研究所《敦煌寻新记》4 支系列 TVC 与青岛快闪整合视效承制"}, {"n": 23, "pad": "23", "ch": "ch2", "chName": "02 · 京东×敦煌商业TVC", "color": "#60A5FA", "visual": false, "title": "《敦煌寻新记》项目总览：代理商协同承制架构、全触点交付清单与双轨排期控制"}, {"n": 24, "pad": "24", "ch": "ch2", "chName": "02 · 京东×敦煌商业TVC", "color": "#60A5FA", "visual": false, "title": "商业需求解码与消费者洞察：破除国潮联名审美疲劳，划清「可创想区」与「品牌零容忍红线」"}, {"n": 25, "pad": "25", "ch": "ch2", "chName": "02 · 京东×敦煌商业TVC", "color": "#60A5FA", "visual": false, "title": "四支系列 TVC 支线拆解：莫高窟四大古画母体 × 现代生活痛点 × AIGC 核心视效攻坚方案"}, {"n": 26, "pad": "26", "ch": "ch2", "chName": "02 · 京东×敦煌商业TVC", "color": "#60A5FA", "visual": false, "title": "美学底座定标：莫高窟原窟史料采样与自训练「敦煌矿物岩彩 LoRA」权重梯度测试"}, {"n": 27, "pad": "27", "ch": "ch2", "chName": "02 · 京东×敦煌商业TVC", "color": "#60A5FA", "visual": false, "title": "商业硬件 0 幻觉锁死工程：棚拍微距 × 3D 白模定透视 × ControlNet 受光融合 × 原厂真标无损回贴"}, {"n": 28, "pad": "28", "ch": "ch2", "chName": "02 · 京东×敦煌商业TVC", "color": "#60A5FA", "visual": true, "title": "大视觉缓冲跨页：四支系列商业 TVC 核心名场面宽银幕故事板与成片英雄帧画廊"}, {"n": 29, "pad": "29", "ch": "ch2", "chName": "02 · 京东×敦煌商业TVC", "color": "#60A5FA", "visual": false, "title": "代表支线深拆 ①《唐代双飞天》：一镜一独立分镜图设计与「壁画破壁→新风起舞」执行表"}, {"n": 30, "pad": "30", "ch": "ch2", "chName": "02 · 京东×敦煌商业TVC", "color": "#60A5FA", "visual": false, "title": "代表支线深拆 ②：《晚唐婚嫁图》多食盒冰箱交互控位 &《张骞出使西域》大漠奔马物理控制"}, {"n": 31, "pad": "31", "ch": "ch2", "chName": "02 · 京东×敦煌商业TVC", "color": "#60A5FA", "visual": false, "title": "商业级疑难排障与审片迭代：三大广告片致命穿帮精修 ×「异类 Outliers + 京东监制」三轮定稿闭环"}, {"n": 32, "pad": "32", "ch": "ch2", "chName": "02 · 京东×敦煌商业TVC", "color": "#60A5FA", "visual": false, "title": "跨媒介延展 ①：联名主题字标设计规范 × 微博/小红书平面 KV 海报矩阵（同源高精资产零重做）"}, {"n": 33, "pad": "33", "ch": "ch2", "chName": "02 · 京东×敦煌商业TVC", "color": "#60A5FA", "visual": true, "title": "大视觉缓冲跨页：京东 MALL（青岛站）「沙漠绿洲」主题快闪店实景与空间视觉落位全览"}, {"n": 34, "pad": "34", "ch": "ch2", "chName": "02 · 京东×敦煌商业TVC", "color": "#60A5FA", "visual": false, "title": "跨媒介延展 ②：青岛快闪 32:9 超宽屏无缝循环动态壁画 × 线下数米级喷绘 8K 分块超分工程"}, {"n": 35, "pad": "35", "ch": "ch2", "chName": "02 · 京东×敦煌商业TVC", "color": "#60A5FA", "visual": false, "title": "一源多端成片规格矩阵：同一支创意从 16:9 官宣主片、9:16 社媒投流到线下异形屏的全尺寸自适应交付"}, {"n": 36, "pad": "36", "ch": "ch2", "chName": "02 · 京东×敦煌商业TVC", "color": "#60A5FA", "visual": false, "title": "《敦煌寻新记》收官复盘：全触点落地实证 × 较实拍省本 60%+ 制片账本 × 商业承制可复用 SOP"}, {"n": 37, "pad": "37", "ch": "ch3", "chName": "03 ·《我有无限血条》漫剧", "color": "#FBBF24", "visual": false, "title": "代表作三 ·《咒术反噬？我有无限血条》80 集奇幻系统漫剧：前 3 秒奇观钩子与极速量产总览"}, {"n": 38, "pad": "38", "ch": "ch3", "chName": "03 ·《我有无限血条》漫剧", "color": "#FBBF24", "visual": false, "title": "空间定轴工程：搭建「宗门演武擂台」3D 空间预演母盘，根治传统抽卡漫剧多人斗法跳轴与透视崩坏"}, {"n": 39, "pad": "39", "ch": "ch3", "chName": "03 ·《我有无限血条》漫剧", "color": "#FBBF24", "visual": true, "title": "大视觉缓冲跨页：宗门大比「血咒反噬 · 无限血条暴走瞬秒」全画幅国风奇幻战斗主视觉"}, {"n": 40, "pad": "40", "ch": "ch3", "chName": "03 ·《我有无限血条》漫剧", "color": "#FBBF24", "visual": false, "title": "动态特效合成管线：Seedance 狂傲台词特写 × 可灵运动笔刷受击动态 × AE 粒子与血条包装"}, {"n": 41, "pad": "41", "ch": "ch3", "chName": "03 ·《我有无限血条》漫剧", "color": "#FBBF24", "visual": false, "title": "《咒术反噬？我有无限血条》交付复盘：52% 追看完播战报 × 3 周 80 集产能拆解 × 1,250 元/分账本"}, {"n": 42, "pad": "42", "ch": "ch4", "chName": "04 · 点众《如果AI》与出海", "color": "#2DD4BF", "visual": false, "title": "代表作四 · 点众科技《如果AI》首钢园科幻微短剧：实拍工业遗迹与 AIGC 数字绘景融合总览"}, {"n": 43, "pad": "43", "ch": "ch4", "chName": "04 · 点众《如果AI》与出海", "color": "#2DD4BF", "visual": false, "title": "实景数字绘景工程：基于首钢园实拍钢铁遗迹，用 SDXL + ControlNet 零违和扩建末日赛博天际线"}, {"n": 44, "pad": "44", "ch": "ch4", "chName": "04 · 点众《如果AI》与出海", "color": "#2DD4BF", "visual": true, "title": "大视觉缓冲跨页：《如果AI》首钢园一高炉「百年锈铁工业遗迹 ⇄ 末日觉醒数字天穹」全画幅主视觉"}, {"n": 45, "pad": "45", "ch": "ch4", "chName": "04 · 点众《如果AI》与出海", "color": "#2DD4BF", "visual": false, "title": "动态补镜与影调统合：可灵虚拟意识空间转场合成 × 达芬奇实拍底片与 AI 镜头冷峻影调对齐"}, {"n": 46, "pad": "46", "ch": "ch4", "chName": "04 · 点众《如果AI》与出海", "color": "#2DD4BF", "visual": false, "title": "宣发与出海买量方法论：《如果AI》15+ 预热切片 × DramaBox 海外短剧 Lip-sync 与 150+ 高转化素材"}, {"n": 47, "pad": "47", "ch": "ch5", "chName": "05 · 联想YOGA与制片总账", "color": "#C084FC", "visual": false, "title": "代表作五 · 联想 × 蓝色光标《#万物皆可YOGA#》（上）：长城奖金奖案动态故事板预演与跨时空大师短片"}, {"n": 48, "pad": "48", "ch": "ch5", "chName": "05 · 联想YOGA与制片总账", "color": "#C084FC", "visual": false, "title": "《#万物皆可YOGA#》（下）：双屏转轴线稿锁死 KV 海报矩阵 × 北京联想总部未来中心夏日品鉴会展陈"}, {"n": 49, "pad": "49", "ch": "ch5", "chName": "05 · 联想YOGA与制片总账", "color": "#C084FC", "visual": false, "title": "全链路制片总账：跨四大内容赛道的「成本—周期—良率」量化台账与 AIGC 视听工业化能力矩阵"}, {"n": 50, "pad": "50", "ch": "ch5", "chName": "05 · 联想YOGA与制片总账", "color": "#C084FC", "visual": false, "title": "AIGC 精品剧项目制片 ｜ 导演向 AI 视频主管 ｜ 商业视效统筹"}];
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

