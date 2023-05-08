// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i=0; i<10; i++){
    document.write('<div><h3>hello</h3></div>');
}

document.write(`----------`);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i=0; i<10; i++){
    document.write(`<div><h3>hello ${i}</h3></div>`);
}

document.write(`----------`);

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let i=0;
while (i<20){
    document.write(`<div><h3>hello</h3></div>`);
    i++;
}

document.write(`----------`);

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

i=0;
while(i<20){
    document.write(`<div><h3>hello ${i}</h3></div>`);
    i++;
}

