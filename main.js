let Star = document.getElementById("Star");
let Moon = document.getElementById("Moon");
let Mountain = document.getElementById("Mountain4");
let River = document.getElementById("River5");
let Bout = document.getElementById("Boat6");
let Mountains = document.getElementById("Mountains");
let Name = document.querySelector(".Name");

window.onscroll = function ()
{
    let Value = scrollY;
    Star.style.top = Value  + 'PX';
    Moon.style.top = Value * 3 + 'PX';
    Mountain.style.top = Value * 0.5 + 'PX';
    River.style.top = Value  + 'PX';
    Bout.style.left = Value * 2.5 + 'PX';
    Name.style.fontSize = Value  + 'PX';
    if(scrollY >= 185)
    {
        Name.style.fontSize = 185  + 'PX';
        Name.style.position = 'fixed';
        if(scrollY >= 500)
        {
            Name.style.display = 'none';
        }
        else
        {
            Name.style.display = 'block';
        };
    };
    if(scrollY >= 200)
    {
        document.querySelector(".Main").style.background = "linear-gradient(#376281, #10001f)";
    }
    else
    {
        document.querySelector(".Main").style.background = "linear-gradient(#200016, #10001f)";
    };
};
