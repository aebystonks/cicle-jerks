let count1 = 0;
let count2 = 0;

for (let i = 0; i < 13; i++) {
  if(i % 2 === 0) {
		count1++;
	}
	else if(i % 2 === 1){
		count2++;
	}
}

console.log(`Четных всего: ${count1}, нечетных: ${count2}`)


