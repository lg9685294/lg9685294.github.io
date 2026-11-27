(() => {
  for (const form of document.querySelectorAll(".reply-form")) {
    const message = form.elements.message, nonce = form.elements.nonce, button = form.querySelector('button[type="submit"]');
    if (!nonce.value && globalThis.crypto?.randomUUID) nonce.value = crypto.randomUUID();
    message.addEventListener("input", () => message.setCustomValidity(""));
    form.addEventListener("submit", event => {
      if (!message.value.trim()) {
        event.preventDefault();
        message.setCustomValidity("请先写下你的回复。");
        message.reportValidity();
        return;
      }
      button.disabled = true;
      button.textContent = "正在提交…";
    });
    window.addEventListener("pageshow", () => { button.disabled = false; button.textContent = "提交回复"; });
  }

  const opener = document.getElementById("inbox-open");
  if (opener) {
    const key = new URLSearchParams(location.hash.slice(1)).get("key");
    if (key && /^[A-Za-z0-9_-]{43}$/.test(key)) {
      history.replaceState(null,"",location.pathname);
      opener.elements.key.value = key;
      opener.hidden = false;
      document.getElementById("inbox-instruction").textContent = "正在打开你的收件箱…";
      opener.requestSubmit();
    }
  }
})();
