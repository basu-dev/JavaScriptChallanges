
let button=""
async function  minify(div) {
    console.log("abc")
    let val=await abc(div);
    return
    button.removeAttribute("disabled");
    
}
function abc(div){
    setTimeout(() => {
        
        button=document.querySelector("#html-submit");
        // button.firstChild.style.display="block";
        // button.setAttribute('disabled',true);
        // button.textContent="Minifying";
        let originalSize= `${((div.toString().length)/1024).toFixed(3)}KB`;
        patterns = [/\n/g,/ =/g,/= /g,/ ;/g, /; /g, / {/g, /{ /g, / }/g, /} /g, / :/g, /: /g,/(,) /g,/ (,)/g,/[ /g,/ [/g,/ ]/g,/] /g];
        replacePatterns = ["","=","=",";", ";", "{", "{", "}", "}", ":", ":",",",",","[","[","]","]"];
        this.patterns.forEach((value, i) => {
            div=div.replace(value,replacePatterns[i])
        });
        let finalSize= `${((div.toString().length)/1024).toFixed(3)}KB`;
        document.querySelector(".minified").textContent = div;
        document.querySelector("#original").innerHTML = originalSize;
        document.querySelector("#final").innerHTML = finalSize;
    }, 0);
}
