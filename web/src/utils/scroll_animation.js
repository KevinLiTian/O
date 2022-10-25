window.addEventListener(
  "scroll",
  () => {
    const homepage = document.querySelector(".homepage");
    homepage.style.setProperty(
      "--scroll",
      (
        window.pageYOffset /
        (homepage.offsetHeight - window.innerHeight)
      ).toString()
    );
  },
  false
);
