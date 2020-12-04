function TabG(imgs)
{
    var expand = document.getElementById("Expandir");
    var text = document.getElementById("TextImg");

    expand.src = imgs.src;
    text.innerHTML = imgs.alt;

    expand.parentElement.style.display = "block";
}
