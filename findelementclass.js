var oldel;
var hideelement;
alert("Welcome to Surfly Support Tools. Please open Developer Console ");
console.log("                         |===================================================================|");
console.log("                         |                 Surlfy Support Tools                              |");
console.log("                         |                                                                   |");
console.log("                         |                 Find Class of element                             |");
console.log("                         |                                                                   |");
console.log("                         |                                                                   |");
console.log("                         |  Usage:-  Click the element whose class need to be found.         |");
console.log("                         |           Element will be highligted in Dark Black Border.        |");
console.log("                         |           Final list of Class will be displayed in console.       |");
console.log("                         |                                                                   |");
console.log("                         |                                                                   |");
console.log("                         |           Press Alt and 'c' to copy to clipboard                  |");
console.log("                         |===================================================================|");
console.log("                          ===> Class String of selected elements");
$(document).on("click", function(event){
    $(oldel).css('border','');
    $(event.target).css('border', '5px solid black');
    if (hideelement !== undefined)
    {
    hideelement=event.target.className+", "+hideelement
    }
    else
    {
        hideelement=event.target.className;
    }
    console.log(hideelement);
    oldel=event.target;
})

/*$(document).keypress("c",function() {
    navigator.clipboard.writeText(hideelement);
    alert("Class String copied to Clipboard");
  });*/

  $(document).keydown(function(e) {
    if(e.altKey && e.keyCode == 67) {
        navigator.clipboard.writeText(hideelement);
        alert("Class String copied to Clipboard");
    } 
});