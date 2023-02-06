const app = document.getElementById("typewriter");

const typewriter = new Typewriter(app, {
  loop: true,
  delay: 120,
});

typewriter
  .typeString("DESARROLLADOR WEB <strong>FULL STACK!</strong>")
  .pauseFor(2000)
  .deleteAll()
  .start();

((d) => {
  const $form = d.querySelector(".contacto-form"),
    $loader = d.querySelector(".contact-form-loader"),
    $response = d.querySelector(".contact-form-response");

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e.target);
    $loader.classList.remove("loader");
    fetch("https://formsubmit.co/ajax/cislas5294@gmail.com", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        console.log(json);
        location.hash = "#gracias";
        $form.reset();
      })
      .catch((err) => {
        console.log(err);
        let message =
          err.statusText || "Ocurrio un error al enviar, intenta nuevamente";
        $response.querySelector(
          "h3"
        ).innerHTML = `Error ${err.status}: ${message}`;
      })
      .finally(() => {
        $loader.classList.add("loader");
        setTimeout(() => {
          location.hash = "#close";
        }, 3000);
      });
  });
})(document);
