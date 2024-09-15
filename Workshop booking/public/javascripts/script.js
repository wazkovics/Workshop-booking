function ModifyBooking(userID){
    window.location = "/booking/updatebooking/"+ userID;
   
}

function PopUpDelete(userID){
    if (confirm("Please confirm that you would like to delete this booking")){
        window.location = "/booking/deletebooking/"+ userID;
    }
    
}


function CurrentDate(){
    var today = new Date().toISOString().split("T")[0];
    document.getElementById("bookingDate").setAttribute('min', today);
}

function CurrentDate2(){
    var year = new Date().toISOString().split("T")[0].split("-")[0];
    var month = new Date().toISOString().split("T")[0].split("-")[1];
    document.getElementById("ExpMonthYear").setAttribute('min', year+"-"+month);
}
