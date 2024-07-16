function openChat() {
        var formContainer = document.getElementById("studentForm");
        formContainer.style.display = "block";
    }
function submitForm(event) {
        event.preventDefault();
        var formData = new FormData(document.getElementById("studentDetailsForm"));
        formData.forEach(function(value, key){
            console.log(key + ": " + value);
        });
    }
