document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".btn-responder").forEach(btn => {
      btn.addEventListener("click", () => {
        const comment = btn.closest(".comment");
        const replyBox = comment.querySelector(".comment-reply-box");
        replyBox.classList.toggle("d-none");
      });
    });

    document.querySelectorAll(".btn-publicar-respuesta").forEach(btn => {
      btn.addEventListener("click", () => {
        const replyBox = btn.closest(".comment-reply-box");
        const textarea = replyBox.querySelector(".reply-textarea");
        const respuestaTexto = textarea.value.trim();
        if (respuestaTexto !== "") {
          const responsesContainer = replyBox.nextElementSibling;
          const nuevaRespuesta = document.createElement("div");
          nuevaRespuesta.className = "comment-response";
          nuevaRespuesta.innerHTML = `<p><strong>Tú:</strong> ${respuestaTexto}</p>`;
          responsesContainer.appendChild(nuevaRespuesta);
          textarea.value = "";
          replyBox.classList.add("d-none");
        }
      });
    });

    document.querySelectorAll(".btn-destacar").forEach(btn => {
      btn.addEventListener("click", () => {
        const comment = btn.closest(".comment");
        const estrella = comment.querySelector(".bi-star-fill");
        estrella.classList.toggle("d-none");
      });
    });
  });