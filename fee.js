
        function input() {
            debugger;

            var first = document.getElementById("first").value;
            var Mid = document.getElementById("Mid").value;
            var Last = document.getElementById("Last").value;
           var Gender = document.querySelector('input[name="Gender"]:checked').value;
           
            var feedback = document.getElementById("mytest").value;
            var suggestion = document.getElementById("suggestion").value;
            var d = new Date();
          
            if (first == "" ) {
                alert("Please inpur your first name. ");
            }
            else if (Last == "")
            {
                alert("Please inpur your last name. ");
            }
            else if (first.length > 40 || Mid.length > 40 || Last.length > 40)
            {
                alert("Please inpur your name in 40 char ");
            }
            else{
                if (Mid.trim() == "")
                    name = Gender + " " + first.trim() + " " + Last.trim();
                else {
                    name = Gender + " " + first.trim() + " " + Mid.trim() + " " + Last.trim()
                    }
            } 
            feedback += "\n" + "Name: " + name + "\n" + "Suggestion: " + suggestion + "\n" + d + "\n";
            document.getElementById("mytest").value = feedback;
           

        }