for (let i = 0; i < 13; i++) {
  if(i % 2 == 0) continue;
	console.log(`Нечетное число: ${i}`)
}

console.log('\n')

for(let j = 0; j < 13; j++){
	if(j % 2 == 1) continue;
	console.log(`Четное число: ${j}`)
}

console.log("Всего четных чисел: 7 \n Нечетных чисел: 6") // Чисто 0 зарешал )