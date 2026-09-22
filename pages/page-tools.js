document.querySelectorAll("[data-copy-value]").forEach((button) => {
  button.addEventListener("click", async () => {
    const copyValue = button.getAttribute("data-copy-value");
    if (!copyValue) {
      return;
    }

    const originalText = button.textContent;

    try {
      await navigator.clipboard.writeText(copyValue);
      button.textContent = "Copied";
      button.classList.add("copied");
      window.setTimeout(() => {
        button.textContent = originalText;
        button.classList.remove("copied");
      }, 1400);
    } catch {
      button.textContent = "Failed";
      window.setTimeout(() => {
        button.textContent = originalText;
      }, 1400);
    }
  });
});