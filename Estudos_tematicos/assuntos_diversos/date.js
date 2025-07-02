const data = new Date();

let dia_m = data.getDate() < 10 ? "0" + data.getDate() : data.getDate();
let mes_m = data.getMonth() < 10 ? "0" + data.getMonth() : data.getMonth();
const data_r = dia_m + "/" + mes_m + "/" + data.getFullYear();

console.log(data_r);

// console.log(data.getHours());
// console.log(data.getDate());
// console.log(Date.now());

// Criação de datas
// new Date()                      // Data e hora atuais
// new Date("2025-05-24")          // A partir de uma string
// new Date(2025, 4, 24)           // Ano, mês (0 a 11), dia

// Métodos GET (pegar partes da data)
// date.getFullYear()              // Ano (ex: 2025)
// date.getMonth()                 // Mês (0 = jan)
// date.getDate()                  // Dia do mês
// date.getDay()                   // Dia da semana (0 = dom)
// date.getHours()                 // Horas
// date.getMinutes()               // Minutos

// Métodos SET (alterar partes da data)
// date.setFullYear(2026)          // Define o ano
// date.setMonth(5)                // Define o mês (junho)
// date.setDate(10)                // Define o dia
// date.setHours(15)               // Define a hora

// Conversão e formatação
// date.toString()                 // Data completa como string
// date.toDateString()             // Apenas a data
// date.toTimeString()             // Apenas a hora
// date.toISOString()              // Formato ISO (ex: 2025-05-24T00:00:00.000Z)
// date.toLocaleDateString()       // Data local (ex: "24/05/2025")
// date.toLocaleTimeString()       // Hora local (ex: "13:45:00")

// Métodos Estáticos
// Date.now()                      // Timestamp atual (ms desde 1970)
// Date.parse("2025-05-24")        // Converte string em timestamp
