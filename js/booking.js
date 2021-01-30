var table;
var urlBooking = "https://600706b53698a80017de2790.mockapi.io/booking";
function initTableData(){
    $.get(urlBooking, function (responseData) {
        table = $('#booking').DataTable({
                "processing": true,
                datatype: 'json',
                data: responseData,
                columns: [
                    {data: "id"},
                    {data: "fullname"},
                    {data: "checkin"},
                    {data: "checkout"},
                    {data: "status"},
                    {data: "phone"},
                    {data: "roomtype"}
                ]
            }); 
    });
}
$(document).ready(function(){
  initTableData();
    $('#btnEdit').on("click", function(){
    });
});