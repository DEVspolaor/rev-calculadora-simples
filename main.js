function adicionar(value) {
    document.getElementById('display').value += value; //+= serve pra "ligar" no display
  }

  function limpar() {
    document.getElementById('display').value = '';
  }

  function calcular() {
    try {
      document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
      document.getElementById('display').value = 'Erro';
    }
  }

//eval = é usada para avaliar uma string como código JavaScript e executá-lo. Essa função pode ser utilizada para calcular expressões matemáticas ou executar código dinamicamente.



//try e catch são blocos usados para lidar com exceções (erros) durante a execução do código. O bloco try contém o código que pode gerar uma exceção, e o bloco catch contém o código que será executado caso uma exceção ocorra.