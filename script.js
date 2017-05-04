for (var i = 0; i < document.getElementsByClassName("thumbnailClick").length; i++) {

    console.log(i);

    document.getElementsByClassName("thumbnailClick")[i].onclick =

        function myFunction() {

            // console.log(this.src);
            document.getElementsByClassName("thumbnailApend")[0].removeAttribute("src");

            var img = document.getElementsByClassName("thumbnailApend")[0];
            var att = document.createAttribute("src");
            att.value = this.src;
            img.setAttributeNode(att);


        }
}
