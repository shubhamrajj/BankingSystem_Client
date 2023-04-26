$(document).ready(function () {

    ViewDetails()
});


function ViewDetails() {

    $.ajax({
        type: "GET",
        url: "http://localhost:51996/api/GetAllTransaction?accountNumber=" +localStorage.getItem("accountNumber"),
        contentType: "application/json",
        success: function (data) {


            $('#tbody1').empty();
            $.each(data, function (i, item) {

                var row = "<tr><td>" + item.TransactionId + "</td> <td>" + item.DateOfTransaction + "</td> <td>" + item.TypeOfTransaction + "</td> <td>" + item.Amount_transacted + "</td> <td>" + item.AccountNo + "</td> </tr >";
                $('#tbody1').append(row);

            });
        },
        error: function () {
            alert("error");
        }
    })
}

$(document).ready(function () {

    ViewDetails()
});

function closeModel() {
    $('#myModal').modal('hide');
}



function Edit() {

    var details = {

    }
    $.ajax({

        type: "GET",
        url: "http://localhost:51996/api/UpdateProfile",
        contentType: "application/json",
        success: function (data) {


            $('#tbody1').empty();
            $.each(data, function (i, item) {

                var row = "<tr><td>" + item.AccountNo + "</td> <td>" + item.CustomerName + "</td> <td>" + item.PhoneNo + "</td> <td>" + item.Addrss + "</td> <td>" + item.MailId + "</td> <td>" + item.DtOfOpeningAccnt + "</td> <td>" + item.AccountType + "</td> <td>" + item.Balance + "</td><td><button id='b1'>Edit</button></td> </tr >";
                $('#tbody1').append(row);

            });
        },
        error: function () {
            alert("error");
        }
    })
}

function Add() {
    //var res = validate();
    //if (res == false) {
    //    return false;

    var empObj = {
        CustomerName: $('#Name').val(),
        PhoneNo: $('#PhNo').val(),
        Addrss: $('#Addrss').val(),
        MailId: $('#mail').val(),
        DtOfOpeningAccnt: $('#date').val(),
        AccountType: $('#type').val(),
        Psswrd: $('#pass').val(),
        Balance: $('#bal').val()
    };
    $.ajax({
        url: "http://localhost:51996/CreateCustomer",
        data: JSON.stringify(empObj),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            ViewDetails();
            $('#myModal').modal('hide');
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

function OpeenAdd() {
    $('#a').show();
    $('#b').show();
    $('#btnUpdate').hide();
    $('#btnAdd').show();
    $('#div1').hide();
    $('#Name').val(''),
        $('#PhNo').val(''),
        $('#Addrss').val(''),
        $('#mail').val(''),
        $('#date').val(''),
        $('#type').val(''),
        $('#pass').val(''),
        $('#bal').val(''),
        $('#myModal').modal('show');

}

function OpenModel(id) {
    $('#a').hide();
    $('#b').hide();
    $('#btnUpdate').show();
    $('#btnAdd').hide();
    $('#AccNo').val(id);
    $('#myModal').modal('show');
}
function Update() {
    //var res = validate();
    //if (res == false) {
    //    return false;
    //}
    var empObj = {
        // AccountNo: $('#AccNo').val(),
        CustomerName: $('#Name').val(),
        PhoneNo: $('#PhNo').val(),
        Addrss: $('#Addrss').val(),
        MailId: $('#mail').val(),
        DtOfOpeningAccnt: $('#date').val(),
        AccountType: $('#type').val(),
        Psswrd: $('#pass').val(),
        Balance: $('#bal').val(),
    };
    $.ajax({
        url: "http://localhost:53682/api/UpdateProfile?AccountNo=" + $('#AccNo').val(),
        data: JSON.stringify(empObj),
        type: "PUT",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            //loadData();
            ViewDetails();
            $('#myModal').modal('hide');
            $('#AccNo').val("");
            $('#Name').val("");
            $('#PhNo').val("");
            $('#Addrss').val("");
            $('#mail').val("");
            $('#date').val("");
            $('#type').val("");
            $('#pass').val("");
            $('#bal').val("");
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}
function Delete(id) {
    var ans = confirm("Are you sure you want to delete this Record?");
    if (ans) {
        $.ajax({
            url: "http://localhost:53682/api/DeleteProfiles?AccountNo=" + id,
            type: "POST",
            contentType: "application/json;charset=UTF-8",
            dataType: "json",
            success: function (result) {
                ViewDetails();
            },
            error: function (errormessage) {
                alert(errormessage.responseText);
            }
        });
    }
}