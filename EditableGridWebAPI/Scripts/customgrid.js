/// <reference path="jquery-2.0.3.min.js" />
/// <reference path="../Scripts/Controls/jquery-ui.min.js" />
/// <reference path="Controls/date.js" />
$(function () {

    
   
    function Add() {
   
        $.datepicker.setDefaults({ dateFormat: 'dd-mm-yy' });
        $('.datepicker').datepicker();
        var newRow = $('#tblGrid tbody>tr:first').clone(true);
		
      
		$('input', newRow).val('').
              filter('.hasDatepicker').removeClass('hasDatepicker').datepicker();
		$('#tblGrid tbody').append(newRow);
		newRow.appendTo('#tblGrid tbody').show('slow');
		
		$('input', newRow).val('').
            filter('.hasDatepicker').removeClass('hasDatepicker').attr('id', '').datepicker();
		
		$('select', newRow).filter('.dropDown').attr('id', 'o1');
		$('div', newRow).filter('.chzn-container').attr('id', 'o1');
	
		$(".btnSave").bind("click", Save);		
		$(".btnDelete").bind("click", Delete);
		
		
	};

	function Edit(){
		var par = $(this).parent().parent(); //tr
		var tdName = par.children("td:nth-child(1)");
		var tdAge = par.children("td:nth-child(2)");
		var tdDesignation = par.children("td:nth-child(3)");
		var tdDate = par.children("td:nth-child(4)");
        var tdIcon = par.children("td:nth-child(5)");
        tdName.html("<input type='text' value='" + tdName.html() + "'/>");
        tdAge.html("<input type='text' id='txtAge'  value='" + tdAge.html() + "'/>");
        tdDesignation.html("<select>" +
                        "<option>Development</option>"+
                        "<option>H</option>"+
                    "</select>");
       
        tdDate.html("<input type='text' id='txtDate' class='datepicker' value='" + tdDate.html() + "'/>");
	
		tdIcon.html("<img src='../images/icons/save.png' class='btnSave'/>");
		
		$(".btnSave").bind("click", Save);
		$(".btnEdit").bind("click", Edit);
		$(".btnDelete").bind("click", Delete);
		
	};

	function Save(){
		var par = $(this).parent().parent(); //tr
		var tdName = par.children("td:nth-child(1)");
		
		var tdTAge = par.children("td:nth-child(2)");
		var tdDesignation = par.children("td:nth-child(3)");
		
		var tdDate = par.children("td:nth-child(4)");
		var tdIcon = par.children("td:nth-child(5)");
		tdName.html(tdName.children("input[type=text]").val());
		
		tdTAge.html(tdTAge.children("input[type=text]").val());
		tdDesignation.html(tdDesignation.children("select").val());
		
		tdDate.html(tdDate.children("input[type=text]").val());


		tdIcon.html("<img src='../../images/icons/update.png' class='btnEdit'/><img src='../../images/icons/delete.png' class='btnDelete'/>");

		$(".btnEdit").bind("click", Edit);
		$(".btnDelete").bind("click", Delete);
	};

	function Delete(){
		var par = $(this).parent().parent(); 
		par.remove();
	
	};

	
	//function isNumberKey(evt) {
	//    var charCode = (evt.which) ? evt.which : event.keyCode;
	//    if (charCode != 46 && charCode > 31
    //      && (charCode < 48 || charCode > 57))
	//        return false;

	//    return true;
	//}

	$(".btnSave").bind("click", Save);
	$(".btnEdit").bind("click", Edit);
	$(".btnDelete").bind("click", Delete);
	$("#btnAdd").bind("click", Add);
    $("#btnSaveAll").bind("click",SaveAll)

	$("#tblGrid").on("keypress", "#txtAge", function (evt) {
	    

	    var charCode = (evt.which) ? evt.which : event.keyCode;
	    if (charCode != 46 && charCode > 31
          && (charCode < 48 || charCode > 57))
	        return false;

	    return true;
	});

	$("#tblGrid").on("click", "#txtDate", function (event) {
	   
	   // $('.datepicker').removeClass('hasDatepicker').datepicker();
	    $('.datepicker').removeClass('hasDatepicker').attr('id', '').datepicker();
	    event.preventDefault();
	});
	
	function SaveAll() {
	    var employees = [];
	    
	    var count = $('#tblGrid tbody tr').length;
	  
	    for (var i = 2; i <= count; i++) {
	        var employee = new Object();
	     
	        employee.Name = $('#tblGrid tbody >tr:nth-child(' + i + ')').find('td:eq(0)').text();
	        employee.Salary=$('#tblGrid tbody >tr:nth-child(' + i + ')').find('td:eq(1)').text();
	        employee.JoiningDate=$('#tblGrid tbody >tr:nth-child(' + i + ')').find('td:eq(3)').text();
	        employee.Designation =   $('#tblGrid tbody >tr:nth-child(' + i + ')').find('td:eq(2)').text()
	        
            
	       
	        employees.push(employee);
	      
	    }
	 
	    $.ajax({
	        url: '/DataOperation/SaveList',
	        type: 'POST',
	        dataType: 'json',
	        data: JSON.stringify(employees),
	        contentType: 'application/json',
	        success: function (result) {
	            window.location.href = '/DataOperation/SaveList';

	        },
	        error: function (err) {
	            if (err.responseText == "success")
	            { window.location.href = '/DataOperation/SaveList'; }
	            else {
	                alert(err.responseText);
	            }
	        },
	        complete: function () {
	        }

	    });
	    
	};

	
});


