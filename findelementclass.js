var oldel;

$(document).on("click", function(event){
    $(oldel).removeProp("border");
    $(event.target).css('border', '1px solid black');
    console.log(event.target.className);
    event.target=oldel;
})