const display = document.getElementById("wordCountDisplay");
const paragraphs = document.querySelectorAll('.essay p');
const stringsArray = Array.from(elements, el => el.textContent.trim());



function WordCount(str) { 
    return str.split(" ").length;

  }

function count()
{
    let sumWords = 0;
    for (let i = 0; i < stringsArray.length; i++)
    {
        sumWords += WordCount(stringsArray[i]);
    }
    return sumWords;
}

display.textContent = "Word Count: " + count();
console.log(count());