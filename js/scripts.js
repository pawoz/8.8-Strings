var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.',
	animal = 'Zielone słonie',
	animalUpperCased = animal.toUpperCase(),
	textCharsAfter = text.replace ('Papugi', animalUpperCased),
	textCharsAfterLength = textCharsAfter.length;
	
console.log(textCharsAfter.slice(0, textCharsAfterLength/2));