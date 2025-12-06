// 点击目录链接时平滑滚动到对应 section
document.addEventListener("DOMContentLoaded", () => {
  const tocLinks = document.querySelectorAll(".toc a");
  const sections = document.querySelectorAll(".collapsible-section");
  const backToTopBtn = document.getElementById("backToTop");

  tocLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 16,
          behavior: "smooth",
        });
      }
    });
  });

  // 点击 h2 折叠/展开章节
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
