// console.log("hello js");
// console.log(document)

const liCollection = document.getElementsByTagName('li');
for(const li of liCollection){
    console.log(li);
}

const allHeadings = document.getElementsByTagName('h1');
for(const h1 of allHeadings){
    console.log(h1.innerText);
}

const bugTitle = Document.getElementByID('bug-title');
bugTitle.innerText = 'My name is Sheikh';