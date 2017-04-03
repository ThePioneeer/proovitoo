//SCRIPT.JS
$(function(){
    $("input[type=checkbox]").on("change",function(){
        var tabID = this.id.slice(0, -7);
        $("."+tabID+"-child").prop("checked", $(this).prop("checked"));
    });

    $("#btnAddLocation").on("click", function(){
        createTab();
    });

    $("select").on("change", function(){
        var tabID = this.id.slice(0, -7);
        filterResults(tabID);
    })

    $(".manus").on("click", function(e){
        e.preventDefault();
        location.href = "sample.txt"
    })
});

function filterResults(id){
    var filter = $("#"+id+"-select").val().toUpperCase();
    console.log(filter);
    var tableEra = document.getElementById(id+"-era-table");
    var tableEtte = document.getElementById(id+"-ette-table");
    console.log(tableEra);
    var tr = tableEra.getElementsByTagName("tr");
    console.log(tr);
    for(var i = 0; i < tr.length; i++){
        var td = tr[i].getElementsByClassName("makseviis")[0];
        console.log(td);
        if(td){
            if(td.innerHtml.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display = "";
            }else{
                tr[i].style.display = "none";
            }
        }
    }
}

function createTab() {
    var nextTab = $("#location-tab-nav li").length;

    //Create navigation link
    $('<li><a href="#tab' + nextTab + '" data-toggle="tab">Kohvik ' + nextTab +'</a></li>').appendTo('#location-tab-nav');    
    $("#last").appendTo("#location-tab-nav");
    //set tab active
    showTab();
    //create content for tab
    createTabContent(nextTab);
}

function createTabContent(nextTab){
    //create tab content
    $('<div id="tab'+nextTab+'" class="tab-pane fade in active"></div>').appendTo("#location-tab-content");
    //create sub navigation
    $('<ul class="nav nav-tabs" id="tab'+nextTab+'-nav"></ul>').appendTo('#tab'+nextTab);
    $('<li class="active"><a data-toggle="tab" href="#tab'+nextTab+'-era">Erakliendid</a></li>').appendTo('#tab'+nextTab+'-nav');
    $('<li><a data-toggle="tab" href="#tab'+nextTab+'-ette">Ettevõtted</a></li>').appendTo('#tab'+nextTab+'-nav');
    //create sub tab content
    $('<div id="tab'+nextTab+'-content" class="tab-content"></div>').appendTo('#tab'+nextTab);
    $('<div id="tab'+nextTab+'-era" class="tab-pane fade in active">TAB'+nextTab+'-ERA</div>').appendTo('#tab'+nextTab+'-content');
    $('<div id="tab'+nextTab+'-ette" class="tab-pane fade">TAB'+nextTab+'-ETTE</div>').appendTo('#tab'+nextTab+'-content');
}


function showTab(){
    $("#location-tab-nav li.active").removeClass();
    $("#location-tab-nav li:nth-last-child(2)").addClass("active");
    $("#location-tab-content > div").removeClass("active in")    
}