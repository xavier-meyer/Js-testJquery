
$("document").ready(function(){
   
    // we hide the paragraph at the beginning
    $("p").hide();

    // when we click on the first button: button click
    $("button").eq(0).click(function(){
        // we put the background in red in the first div
        $("div").eq(0).css(
            {"background-color": "red", "color":"black"});
        
        // we put the background in blue with an outline in the second div      
        $("div").eq(1).css(          
            {"height":"100%", "width":"100%","background-color": "blue", "outline":"2px solid black"});

       $("h1").css(
            {"color":"white"});   
    })
    // when we click on the second div
    $("div").eq(1).dblclick(function(){
        // we make appear the paragraph
        $("p").show();
        // we add properties to the paragraph
        $("p").css(
            {"background-color":"#000", "height":"60%", "width":"80%", color:"white"});     
    })   
    // when we click on the second div
    $("div").eq(1).click(function(){
        // we change the background-color and the color of the paragraph
        $("p").css(
            {"background-color":"#fff", "color":"black"}); 
    })  
    // change background color of first div and color or title
    $("button").eq(1).click(function(){
        $("div").eq(0).css(
            {"background-color":"grey"});
        $("h1").css(
            {"color":"orange"});
    })
    // remove all
    $("button").eq(2).click(function(){
        $("div").eq(0).css(
            {"background-color":"white"});
        $("div").eq(1).css(
            {"background-color":"white", "outline":""});    
        $("h1").css(
            {"color":"black"});
        $("p").hide();    
    })
})
