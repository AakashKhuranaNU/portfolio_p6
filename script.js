function contact(){
     window.open("https://github.com/AakashKhuranaNU");
    
}


document.addEventListener("DOMContentLoaded", function(){
    var s=document.querySelector(".header .second");
    var t=document.querySelector(".header .first");
    var letters =s.innerHTML;
    // letters.strip()
    console.log(letters)
    var nHTML = '';
    for (var letter of letters) {
        if(letter!=" "){
      nHTML += "<span class='a'>"+ letter + "</span>";
    }
    else{
        nHTML += "<span class='a'>"+ "&thinsp;" + "</span>"
    }
    console.log(nHTML);
    s.innerHTML=nHTML;  
    }
    h=s.innerHTML;
    s.innerHTML=h+"<br/";
    console.log(s)
    
    var letters =t.innerHTML;
    // letters.strip()
    console.log(letters)
    var nHTML = "<br>";
    for (var letter of letters) {
        if(letter!=" "){
      nHTML += "<span class='a'>"+ letter + "</span>";
    }
    else{
        nHTML += "<span class='a'>"+ "&thinsp;" + "</span>"
    }
    console.log(nHTML);
    t.innerHTML=nHTML;  
    }
    console.log(t)
    // $('h1').html(nHTML);
  })
