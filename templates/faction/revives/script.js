$(document).on('change', '#date-live-revives', e=>{
    e.preventDefault();
    var start = parseInt($("#ts-start-revives").val());
    var end = parseInt($("#ts-end-revives").val());
    var live = $(e.currentTarget).prop('checked');
    if(live) {
        $("#date-end-revives").addClass("valid").removeClass("error").html("Will be constantly udpated");
        if(start) {
            $("#create-report-revives").show();
        } else {
            $("#create-report-revives").hide();
        }
    } else {
        $("#date-end-revives").removeClass("valid").addClass("error").html('<i class="fas fa-plus-circle"></i>&nbsp;&nbsp;Add an ending date (or leave blank for live)');
        $("#create-report-revives").hide();
    }
});

// create report
$(document).on('click', '#create-report-revives', e=>{
    e.preventDefault();
    var start = parseInt($("#ts-start-revives").val());
    var end = parseInt($("#ts-end-revives").val());
    if($("#date-live-revives").prop('checked')) {
        var live = 1;
        var end = 0;
    } else {
        var live = 0
    }
    $( "#content-update" ).load( "/faction/revives/", {
        start: start, end: end, live: live, type: "new",
        csrfmiddlewaretoken: getCookie("csrftoken")
    },afterLoad);
    $("#content-update h2").addClass("grey").html(spinner + '&nbsp;&nbsp;Creating report ');
});

// delete report
$(document).on('click', '.faction-revives-reports-delete', e=>{
    e.preventDefault();
    var reportId = $(e.currentTarget).attr("data-val");
    $(e.currentTarget).closest("tr").load( "/faction/revives/manage/", {
        type:"delete", reportId: reportId, csrfmiddlewaretoken: getCookie("csrftoken")
    }).remove();
});

// see report
$(document).on('click', '.faction-revives-reports-see', e=>{
    e.preventDefault();
    var reportId = $(e.currentTarget).attr("data-val");
    $("#content-update").load( "/faction/revives/" + reportId, {
        reportId: reportId, csrfmiddlewaretoken: getCookie("csrftoken")
    },afterLoad);
    $("#content-update h2").addClass("grey").html(spinner + '&nbsp;&nbsp;Loading report');
    $("div.error").hide();
});


// show hide
$(document).on('click', '.faction-revives-report-toggle', e=>{
    e.preventDefault();
    var splt = e.currentTarget.id.split("-");
    var factionId = splt.pop();
    var reportId = splt.pop();
    var type = splt.pop();
    var reload = $(e.currentTarget).closest("td");
    console.log(reportId);
    $( "#content-update" ).load( "/faction/revives/" + reportId, {
        reportId: reportId, factionId: factionId, type: type,
        csrfmiddlewaretoken: getCookie("csrftoken")
    }, afterLoad);
    $("#content-update h2").addClass("grey").html(spinner + '&nbsp;&nbsp;Reload report ');
});

// show hide attack breakdown list
$(document).on('click', '.faction-revives-report-see-all', e=>{
    e.preventDefault();
    var tr = $(e.currentTarget);
    tr.parents("table").find("tr.hidden").toggle();
    if (tr.find("i").hasClass("fa-eye")) {
      tr.find("td").html('Hide small contributions&nbsp;&nbsp;<i class="far fa-eye-slash"></i>')
    } else {
      tr.find("td").html('Show all&nbsp;&nbsp;<i class="far fa-eye"></i>')
    }
});
