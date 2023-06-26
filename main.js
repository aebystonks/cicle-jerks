for (let i = 0; i < 13; i++) {
  if(i % 2 == 0) {
		console.log(`Четное число: ${i}`);
		continue;
	}
	else if(i % 2 == 1){
		console.log(`Нечетное число: ${i}`);
		continue;
	}
}


