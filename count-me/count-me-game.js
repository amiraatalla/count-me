var countbtn = document.getElementById("countMe");
countbtn.addEventListener('click', countMe);

var tag = document.getElementById('tag');
var tagsId = document.getElementById('tagId');
var tagName = document.getElementById('tagName');
var tagClass = document.getElementById('tagClass');


function countMe() {
   
    var tags = document.getElementsByTagName(tag.value).length;

     var tagIdexist = (document.getElementById(tagsId.value) ? true : false);

    var tagsName = document.getElementsByName(tagName.value).length;
  
    var tagsClass = document.getElementsByClassName(tagClass.value).length;

    console.log(tags);
    console.log(tagIdexist)
    console.log(tagsName);
    console.log(tagsClass);

}



