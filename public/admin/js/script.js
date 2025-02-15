const button = document.querySelectorAll("[button-status]");

if (button.length > 0) {
  button.forEach((item) => {
    item.addEventListener("click", () => {
      const attribute = item.getAttribute("button-status");
      let url = new URL(window.location.href);
      if (attribute) {
        url.searchParams.set("status", attribute);
      } else {
        url.searchParams.delete("status");
      }
      window.location.href = url.href;
    });
  });
}

const formSearch = document.querySelector("#form-search");
if (formSearch) {
  let url = new URL(window.location.href);
  formSearch.addEventListener("submit", (e) => {
    e.preventDefault();
    const keyword = e.target.elements.keyword.value;
    if (keyword) {
      url.searchParams.set("keyword", keyword);
    } else {
      url.searchParams.delete("keyword");
    }
    window.location.href = url.href;
  });
}
