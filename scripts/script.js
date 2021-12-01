// Captando os valores dos formulários.
let resultado = document.querySelector('div#resultado')
let nome = document.querySelector('input#nomeForm')
let telefone = document.querySelector('input#telefoneForm')
let email = document.querySelector('input#emailForm')
let pesquisa = document.querySelector('input#nomePesquisa')

// Declarando o "banco de dados" dos funcionários.
let nomeFuncionario = ['Marcos Amaral', 'Maria Almeida', 'Gustavo da Silva', 'Antonio Facundes', 'Juliana Ferreira']
let numeroTelefone = ['(19) 99999-9999', '(19) 99999-9999', '(19) 99999-9999', '(19) 99999-9999', '(19) 99999-9999']
let emailFuncionario = ['jose.amaral@gmail.com', 'maria.almeida@gmail.com', 'gustavo.silva@hotmail.com', 'antonio.facundes@yahoo.com', 'juliana.ferreira@hotmail.com']

// Mostra a lista dos funcionários na tela.
function mostrarLista() {
   resultado.innerHTML = ''
   for (id in nomeFuncionario) {
      resultado.innerHTML += `<p>${nomeFuncionario[id]}</p>`
      resultado.innerHTML += `<p>${numeroTelefone[id]}</p>`
      resultado.innerHTML += `<p>${emailFuncionario[id]}</p>`
   }
}

// Pesquisa e exibe o funcionário específico.
function pesquisarFuncionario() {
   if (pesquisa.value != '') {
      if (nomeFuncionario.indexOf(pesquisa.value) != -1) {
         id = nomeFuncionario.indexOf(pesquisa.value)
         resultado.innerHTML = ''
         resultado.innerHTML += `<p>${nomeFuncionario[id]}</p>`
         resultado.innerHTML += `<p>${numeroTelefone[id]}</p>`
         resultado.innerHTML += `<p>${emailFuncionario[id]}</p>`
      } else {
         alert('Não existe!')
      }
   } else {
      alert('[ERRO] Preencha o campo com o nome completo antes!')
   }
}

// Adiciona os funcionários com nome, telefone e email e faz a verificação de campos e se o mesmo já existe ou não.
function adicionarFuncionario() {
   if (nome.value != '' && telefone.value != '' && email.value != '') {
      if (numeroTelefone.indexOf(telefone.value) == -1 && emailFuncionario.indexOf(email.value) == -1) {
         nomeFuncionario.push(nome.value)
         numeroTelefone.push(telefone.value)
         emailFuncionario.push(email.value)
         alert('[SUCESSO] Funcionário adicionado!')
      } else {
         alert('[ERRO] Funcionário já existente no banco de dados!')
      }
   } else {
      alert('[ERRO] Não deixe nenhum campo em branco!')
   }
}