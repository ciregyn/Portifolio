// 1) Efeito de clique leve nos links e botões
document.querySelectorAll("a, button").forEach((el) => {
  el.addEventListener("mousedown", () => el.style.transform = "scale(0.95)");
  el.addEventListener("mouseup",   () => el.style.transform = "scale(1)");
});

// 2) Botão “Voltar ao Topo”
const btnTopo = document.getElementById("btn-topo");
window.addEventListener("scroll", () => {
  btnTopo.style.display = window.scrollY > 300 ? "block" : "none";
});
btnTopo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 3) Validação e envio do formulário
const form = document.getElementById("form-contato");
form.addEventListener("submit", function (event) {
  event.preventDefault(); // sempre previne primeiro

  // Pegando os valores
  const name    = document.getElementById("name").value.trim();
  const email   = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Regex de email
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // 1. Nome não vazio
  if (name === "") {
    alert("Por favor, preencha seu nome.");
    return;
  }

  // 2. Email válido
  if (!emailValido.test(email)) {
    alert("Por favor, insira um e-mail válido.");
    return;
  }

  // 3. Mensagem longa o suficiente
  if (message.length < 10) {
    alert("Sua mensagem deve ter pelo menos 10 caracteres.");
    return;
  }

  // Se tudo ok, envie o formulário para o FormSubmit
  form.submit();
});

form.addEventListener("submit", function(event) {
  event.preventDefault();
  // ... suas validações ...
  form.submit(); // envia ao FormSubmit (opcional)
  setTimeout(() => {
    window.location.href = "obrigado.html";
  }, 500); // meio segundo de atraso
});
