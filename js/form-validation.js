function validarCadastro() {
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const cpf = document.getElementById('cpf').value.trim();
  const telefone = document.getElementById('telefone').value.trim();

  let erro = false;

  if(nome === '') {
    alert("Preencha o nome!");
    erro = true;
  }

  if(!email.includes('@')) {
    alert("E-mail inválido!");
    erro = true;
  }

  if(cpf.length !== 11) {
    alert("CPF inválido!");
    erro = true;
  }

  if(telefone.length < 10) {
    alert("Telefone inválido!");
    erro = true;
  }

  return !erro;
}

document.querySelector('form').addEventListener('submit', function(e){
  if(!validarCadastro()) {
    e.preventDefault();
  }
});

