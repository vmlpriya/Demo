function edit_row(no) {
    document.getElementById("edit_button" + no).style.display = "none";
    document.getElementById("save_button" + no).style.display = "block";
   
    var name = document.getElementById("name_row" + no);
    var rollnumber = document.getElementById("rollnumber_row" + no);
    var branch = document.getElementById("branch_row" + no);
    var cgpa = document.getElementById("cgpa_row" + no);
   
    var name_data = name.innerHTML;
    var rollnumber_data = rollnumber.innerHTML;
    var branch_data = branch.innerHTML;
    var cgpa_data = cgpa.innerHTML;
   
    name.innerHTML =
     "<input type='text' id='name_text" + no + "' value='" + name_data + "'>";
    rollnumber.innerHTML =
     "<input type='text' id='country_text" + no + "' value='" + rollnumber_data +"'>";
    branch.innerHTML =
     "<input type='text' id='age_text" + no + "' value='" + branch_data + "'>";
    cgpa.innerHTML =
     "<input type='text' id='age_text" + no + "' value='" + cgpa_data + "'>";
   }
   
   function save_row(no) {
    var name_val = document.getElementById("name_text" + no).value;
    var rollnumber_val = document.getElementById("rollnumber_text" + no).value;
    var branch_val = document.getElementById("branch_text" + no).value;
    var cgpa_val = document.getElementById("cgpa_text" + no).value;

    document.getElementById("name_row" + no).innerHTML = name_val;
    document.getElementById("rollnumber_row" + no).innerHTML = rollnumber_val;
    document.getElementById("branch_row" + no).innerHTML = branch_val;
    document.getElementById("cgpa_row" + no).innerHTML = cgpa_val;
   
    document.getElementById("edit_button" + no).style.display = "block";
    document.getElementById("save_button" + no).style.display = "none";
   }
   
   function delete_row(no) {
    document.getElementById("row" + no + "").outerHTML = "";
   }
   
   function add_row() {
    var new_name = document.getElementById("new_name").value;
    var new_rollnumber = document.getElementById("new_rollnumber").value;
    var new_branch = document.getElementById("new_branch").value;
    var new_cgpa = document.getElementById("new_cgpa").value;
   
    var table = document.getElementById("data_table");
    var table_len = table.rows.length - 1;
    var row = (table.insertRow(table_len).outerHTML ="<tr id='row" +table_len +"'><td id='name_row" +
     table_len +"'>" +
     new_name +
     "</td><td id='rollnumber_row" +
     table_len +
     "'>" +
     new_rollnumber +
     "</td><td id='branch_row" +
     table_len +
     "'>" +
     new_branch +
     "</td><td id='cgpa_row" +
     table_len +
     "'>" +
     new_cgpa +
     "</td><td><input type='button' id='edit_button" +
     table_len +
     "' value='Edit' class='edit' onclick='edit_row(" +
     table_len +
     ")'> <input type='button' id='save_button" +
     table_len +
     "' value='Save' class='save' onclick='save_row(" +
     table_len +
     ")'> <input type='button' value='Delete' class='delete' onclick='delete_row(" + table_len + ")'></td></tr>");
   
    document.getElementById("new_name").value = "";
    document.getElementById("new_rollnumber").value = "";
    document.getElementById("new_branch").value = "";
    document.getElementById("new_cgpa").value="";
   }
   