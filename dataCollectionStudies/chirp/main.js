(function(){
	w3.includeHTML();
    var testDiv1InputRowCount = 4, testDiv2InputRowCount = 4;
    window.onbeforeunload = function (e) {
        e = e || window.event;
        // For IE and Firefox prior to version 4
        if (e) {
            e.returnValue = 'Any string';
        }
        // For Safari
        return 'Any string';
    };
    var userId = "user-" + new Date().getTime()
    LE.log({"event":"SESSION_START", "userId":userId});

	$('#introConsent').change(function() {
        if($(this).is(":checked")) {
        	$("#introProceed").removeClass("disabled");
        }else{
        	$("#introProceed").addClass("disabled");
        }
    });
    $('#exampleConsent').change(function() {
        if($(this).is(":checked")) {
        	$("#examplesProceed").removeClass("disabled");
        }else{
        	$("#examplesProceed").addClass("disabled");
        }
    });
    
	$("#introProceed").on("click",function(evt){
		$("#introDiv").css("display","none");
		$("#exampleDiv").css("display","block");
	});
	$("#examplesProceed").on("click",function(evt){
		$("#exampleDiv").css("display","none");
		$("#testDiv1").css("display","block");
	});
    $("#testDiv1Proceed").on("click",function(evt){
        $("#testDiv1").css("display","none");
        $("#testDiv2").css("display","block");

        var testDiv1Responses = [];
        $(".testDiv1QuestionEntryBox").each(function(){
            testDiv1Responses.push($(this).val());
        })
        LE.log({"event":"DB1_RESPONSES","db1Questions":testDiv1Responses, "userId":userId});
    });
    $("#testDiv2Proceed").on("click",function(evt){
        $("#testDiv2").css("display","none");
        $("#allSetDiv").css("display","block");

        var testDiv2Responses = [];
        $(".testDiv2QuestionEntryBox").each(function(){
            testDiv2Responses.push($(this).val());
        })
        LE.log({"event":"DB2_RESPONSES","db2Questions":testDiv2Responses, "userId":userId});
        LE.log({"event":"SESSION_END", "userId":userId});

        var timeleft = 10;
        var downloadTimer = setInterval(function(){
        document.getElementById("allSetWaitTimeProgressBar").value = 10 - --timeleft;
            if(timeleft <= 0){
                clearInterval(downloadTimer);
                $("#pleaseWaitMessage").css("display","none");
                $("#doneMessage").css("display","block");
                $("#allSetWaitTimeProgressBar").css("display","none");
                window.onbeforeunload = null;
            }
        },1000);
    });
    

    $("#testDiv1AddQuestionButton").on("click",function(evt){
        testDiv1InputRowCount += 1;
        var newInputRow = '<br><br>Question '+testDiv1InputRowCount+'&nbsp;: <input class="testDiv1QuestionEntryBox" type="text">';
        $("#testDiv1QuestionBoxes").append(newInputRow);
        $(".testDiv1QuestionEntryBox").on("keyup",function(evt){
            var showNextButton = true;
            $(".testDiv1QuestionEntryBox.required").each(function(d){
                var text = $(this).val();
                
                if(text==""){
                    showNextButton = false;
                }
            });
            if(showNextButton==true){
                $("#testDiv1Proceed").removeClass("disabled");            
            }else{
                $("#testDiv1Proceed").addClass("disabled");
            }
        })
    });

    $("#testDiv2AddQuestionButton").on("click",function(evt){
        testDiv2InputRowCount += 1;
        var newInputRow = '<br><br>Question '+testDiv2InputRowCount+'&nbsp;: <input class="testDiv2QuestionEntryBox" type="text">';
        $("#testDiv2QuestionBoxes").append(newInputRow);
        $(".testDiv2QuestionEntryBox").on("keyup",function(evt){
            var showNextButton = true;
            $(".testDiv2QuestionEntryBox.required").each(function(d){
                var text = $(this).val();
                
                if(text==""){
                    showNextButton = false;
                }
            });
            if(showNextButton==true){
                $("#testDiv2Proceed").removeClass("disabled");            
            }else{
                $("#testDiv2Proceed").addClass("disabled");
            }
        })
    });

    $(".testDiv1QuestionEntryBox").on("keyup",function(evt){
        var showNextButton = true;
        $(".testDiv1QuestionEntryBox.required").each(function(d){
            var text = $(this).val();
            if(text==""){
                showNextButton = false;
            }
        });
        if(showNextButton==true){
            $("#testDiv1Proceed").removeClass("disabled");            
        }else{
            $("#testDiv1Proceed").addClass("disabled");
        }
    });

    $(".testDiv2QuestionEntryBox").on("keyup",function(evt){
        var showNextButton = true;
        $(".testDiv2QuestionEntryBox.required").each(function(d){
            var text = $(this).val();
            if(text==""){
                showNextButton = false;
            }
        });
        if(showNextButton==true){
            $("#testDiv2Proceed").removeClass("disabled");            
        }else{
            $("#testDiv2Proceed").addClass("disabled");
        }
    });

})()