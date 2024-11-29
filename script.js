let form=document.querySelector("form");
const display=document.querySelector("textarea");
const result=document.querySelector(".res");

function appendValue(value)
{
    display.textContent+=value;
}
function clearDisplay(){
    display.textContent="";
}
form.addEventListener("submit",function(event){
    event.preventDefault();
    calculate();
    
});

function calculate()
{
    const expression=display.value;
    const regex=/^-?\d+(\.\d+)?([+\-*/]-?\d+(\.\d+)?)*$/;
    if(regex.test(expression))
    {
        try
        {
            result.textContent=result.textContent = `Result: ${new Function(`return ${expression}`)()}`;
        }
        catch(err)
        {
            alert("error");
        }
    }
    // Part 2-> fast_0r_
    else result.textContent="Invalid Input";
}
