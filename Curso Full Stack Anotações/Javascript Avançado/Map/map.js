//Convertendo fahrenheit em celcius usando o map

const fahrenheit = [0, 32, 45, 50, 75, 80, 120];

const celcius = fahrenheit.map((elem) => Math.round(((elem - 32) * 5) / 9));

console.log(celcius);
