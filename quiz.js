
            let myImagesArray = ["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg","images/7.jpg","images/12.jpg","images/9.jpg","images/10.jpg","images/11.jpg"];
            let ImageNumber = 0;
            let difference = myImagesArray.length -1;
            let delay = 3000;
            setInterval('ChangeImages(1)', delay);
            function ChangeImages(direction){
                ImageNumber = ImageNumber + direction;
        
                if(ImageNumber > difference) {
                    ImageNumber = 0;
                }
        
                if(ImageNumber < 0){
                    ImageNumber = difference;
                }
                document.getElementById('slideshow').src = myImagesArray[ImageNumber];
            }

            function validateForm() {
                var category = document.getElementsByName("firstq");
            var check1 = 0;
            for(i=0;i<category.length;i++){
                if(category[i].checked){
                check1++;
                break;
                }
            }
            var company = document.getElementsByName("secondq");
            var check2 = 0;
            for(i=0;i<company.length;i++){
                if(company[i].checked){
                check2++;
                break;
                }
            }

            var company = document.getElementsByName("thirdq");
            var check3 = 0;
            for(i=0;i<company.length;i++){
                if(company[i].checked){
                check3++;
                break;
                }
            }

            var company = document.getElementsByName("forthq");
            var check4 = 0;
            for(i=0;i<company.length;i++){
                if(company[i].checked){
                check4++;
                break;
                }
            }

            if(check1 && check2 && check3 && check4){
            }else{
                alert("Please respond to all the questions!");
                return false;
            }
            }