// Data de início do namoro (ano, mês-1, dia, hora, minuto, segundo)
const dataNamoro = new Date(2024, 8, 13, 21, 35, 0); // 13/09/2024 21:35:00

function atualizarTimer() {
  const agora = new Date();

  let anos = agora.getFullYear() - dataNamoro.getFullYear();
  let meses = agora.getMonth() - dataNamoro.getMonth();
  let dias = agora.getDate() - dataNamoro.getDate();
  let horas = agora.getHours() - dataNamoro.getHours();
  let minutos = agora.getMinutes() - dataNamoro.getMinutes();
  let segundos = agora.getSeconds() - dataNamoro.getSeconds();

  if (segundos < 0) {
    segundos += 60;
    minutos--;
  }

  if (minutos < 0) {
    minutos += 60;
    horas--;
  }

  if (horas < 0) {
    horas += 24;
    dias--;
  }

  if (dias < 0) {
    const ultimoMes = new Date(agora.getFullYear(), agora.getMonth(), 0);
    dias += ultimoMes.getDate();
    meses--;
  }

  if (meses < 0) {
    meses += 12;
    anos--;
  }

  document.getElementById("timer").innerHTML =
    `${anos} ano(s), ${meses} mês(es), ${dias} dia(s), ` +
    `${horas} hora(s), ${minutos} minuto(s), ${segundos} segundo(s)`;
}

setInterval(atualizarTimer, 1000);
atualizarTimer();



