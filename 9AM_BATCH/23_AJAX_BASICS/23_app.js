// JavaScript AJAX
$('#js-ajax-btn').click(function() {

    // Create an AJAX Request
    let http = new XMLHttpRequest();

    // Prepare the Request
    http.open('GET', 'https://api.myjson.com/bins/kex1z' , true);

    // Send the Request
    http.send();

    // Track the Request
    http.onreadystatechange = () => {
        // if server is ready with response and status is 'OK'
        if(http.readyState === 4 && http.status === 200){
            let data = http.responseText;
            let persons = JSON.parse(data);
            displayPersonData(persons);
        }
    };

});

// JQuery AJAX
$('#jquery-ajax-btn').click(function() {

    // call AJAX
    $.ajax({
        url : 'https://api.myjson.com/bins/gylqv',
        method : 'GET',
        dataType : 'json',
        success : function(data) {
            let persons = data;
            displayPersonData(persons);
        }
    });

});

// Display Person Data
let displayPersonData = (persons) => {
    let tableRow = '';
    for(let person of persons){
        tableRow += `<tr>
                         <td>${person.id}</td>
                         <td>${person.first_name}</td>
                         <td>${person.last_name}</td>
                         <td>${person.email}</td>
                         <td>${person.gender}</td>
                         <td>${person.ip_address}</td>
                    </tr>\n`;
    }
    $('#table-body').empty().append(tableRow);
};