document.addEventListener("DOMContentLoaded", () => {
  // 所有跳转锚点（侧边栏里的）
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  const sections = document.querySelectorAll(".collapsible-section");
  const backToTopBtn = document.getElementById("backToTop");

  // 平滑滚动
  anchorLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      const top = target.offsetTop - 16;
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    });
  });

  // 点击标题折叠/展开
  sections.forEach((section) => {
    const title = section.querySelector(".section-title");
    if (!title) return;
    title.addEventListener("click", () => {
      section.classList.toggle("collapsed");
    });
  });

  // 回到顶部
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});
