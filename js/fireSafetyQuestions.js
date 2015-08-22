//---------------------------------------------------------------------------------------------
// JQuery functions for forgot password popup
//---------------------------------------------------------------------------------------------

var score = 0;
var health= 100;

var isQuestionTime = false;
var blinkerIntervalID;

$(document).ready( function() 
{
    //---------------------------------------------------------------------------------------------
    $('#btnAnswerDoor').click( function()   
    { 
        respondToAnswer( checkAnswerDoor(), 200, getFeedbackMessageDoor() );
	    return false;

    }); // $('#btnAnswerDoor').click( function()   

    //---------------------------------------------------------------------------------------------
    $('#btnAnswerHiding').click( function()   
    { 

        respondToAnswer( checkAnswerHiding(), 100, getFeedbackMessageHiding() );
	    return false;

    }); // $('#btnAnswerHiding').click( function() 


    //---------------------------------------------------------------------------------------------
    $('#btnAnswerWindow').click( function()   
    { 
        respondToAnswer( checkAnswerWindow(), 100, getFeedbackMessageWindow() );
	    return false;

    }); // $('#btnAnswerWindow').click( function()   


    //---------------------------------------------------------------------------------------------
    $('#btnAnswerSmoke').click( function()   
    { 
        respondToAnswer( checkAnswerSmoke(), 100, getFeedbackMessageSmoke() );
	    return false;

    }); // $('#btnAnswerSmoke').click( function()   

       
    //---------------------------------------------------------------------------------------------
    $('.btnClose').click( function()   
    {
	    $('.fireSafetyQuestionPopup').fadeOut(300 , function() 
        {
		    $('#mask').remove();  
            isQuestionTime = false;
	    }); 
    });

});

//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------

function changeWalkingModeDisplay( newMode )
{
    $('#theWalkingMode span').html( newMode );

} // changeWalkingModeDisplay

//---------------------------------------------------------------------------------------------
function addScore( pointsToAdd )
{
    score += pointsToAdd;
    $('#theScore span').html( score );

} // addScore

//---------------------------------------------------------------------------------------------
function dropHealth( pointsToDrop )
{
    health -= pointsToDrop;
    $('#theHealth span').html( health+'%' );

    addScore( -pointsToDrop );

} // addScore

//---------------------------------------------------------------------------------------------
function resetScoreAndHealth()
{
    health = 100;
    score = 0;

    $('#theScore span').html( score );
    $('#theHealth span').html( health+'%' );

} // resetScoreAndHealth

//---------------------------------------------------------------------------------------------
function displayTheWarning( theWarning )
{
    $('#theWarning').html( theWarning );

} // displayTheWarning

function removeTheWarning()
{
    $('#theWarning').html('');

} // displayTheWarning

//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------
// updateTime
//
// Description: (hook-in) called from withing the game in burningHouse.js to update the display time
//---------------------------------------------------------------------------------------------
function updateTime( elapsedTimeInSeconds )
{
    var hours           = Math.floor( elapsedTimeInSeconds / 3600 );
    var hourSeconds     = hours * 3600;
    var minutes         = Math.floor( ( elapsedTimeInSeconds - hourSeconds ) / 60 );
    var minuteSeconds   = minutes * 60;
    var seconds         = elapsedTimeInSeconds - hourSeconds - minuteSeconds;

    var timeDisplay     = hours + ":" + ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);

    $('#theElapsedTime span').html( timeDisplay );

} // updateTime

//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------
function respondToAnswer(   isAnswerCorrect, 
                            pointsAwarded,
                            feedbackMessage )
{        
    if( isAnswerCorrect )
    {
        addScore( pointsAwarded );
        $('.theAnswers div.answerFeedback').css( 'color', '#00ff00' );
        $('.theAnswers div.answerFeedback').html( "Answer Correct" );
        $('.theAnswers div.answerFeedbackMessage').html( feedbackMessage );
        $('.btnClose').css( 'display', 'inline-block' );
        $('.btnAnswer').css( 'display', 'none' );

        $('.theInstructions').css('display', 'none');
        $('.theQuestion').css('display', 'none');

    }
    else
    {
        $('.theAnswers div.answerFeedback').css( 'color', '#ff0000' );
        $('.theAnswers div.answerFeedback').html( "Answer Incorrect" );
    }

} // respondToAnswer

//---------------------------------------------------------------------------------------------
// openFireSafetyQuestionDoor
//
// Description: (hook-in) called from within the game in burningHouse.js to answer door fire safety question
//---------------------------------------------------------------------------------------------
function openFireSafetyQuestionDoor()
{
    isQuestionTime = true; // turn the flag on so player can't move around the screen

    document.getElementById('questionDoorSelection1').checked = false;
    document.getElementById('questionDoorSelection2').checked = false;
    document.getElementById('questionDoorSelection3').checked = false;
    document.getElementById('questionDoorSelection4').checked = false;
    document.getElementById('questionDoorSelection5').checked = false;
    document.getElementById('questionDoorSelection6').checked = false;

    openQuestionWindow( "#openFireSafetyQuestionDoor" );

	return false;

} // openFireSafetyQuestionDoor


//---------------------------------------------------------------------------------------------
function checkAnswerDoor()
{
    var answeredCorrectly   = false;

    //correctAnswers are [1, 4, 5, 6];
    //
    if( document.getElementById('questionDoorSelection1').checked &&
        document.getElementById('questionDoorSelection4').checked &&
        document.getElementById('questionDoorSelection5').checked &&
        document.getElementById('questionDoorSelection6').checked &&
        !document.getElementById('questionDoorSelection2').checked &&
        !document.getElementById('questionDoorSelection3').checked  )
    {
        answeredCorrectly = true;
    }

    return answeredCorrectly;

} // checkAnswerDoor


//---------------------------------------------------------------------------------------------
function getFeedbackMessageDoor()
{
    // information taken from http://kidshealth.org/kid/watch/er/fire_safety.html
    //
    var feedbackMessage  = "<p>If you're in a room with the door closed when the fire breaks out, you need to take a few extra steps:</p>";
    feedbackMessage     += "<ul>";     
    feedbackMessage     += "<li>Check to see if there's heat or smoke coming in the cracks around the door. (You're checking to see if there's fire on the other side.)</li>";
    feedbackMessage     += "<li>If you see smoke coming under the door - don't open the door!</li>";
    feedbackMessage     += "<li>If you don't see smoke - touch the door. If the door is hot or very warm - don't open the door!</li>";
    feedbackMessage     += "<li>If you don't see smoke - and the door is not hot - then use your fingers to lightly touch the doorknob. If the doorknob is hot or very warm - don't open the door!</li>";
    feedbackMessage     += "</ul>";     
    feedbackMessage     += "<p>If the doorknob feels cool, and you can't see any smoke around the door, you can open the door very carefully and slowly. When you open the door, if you feel a burst of heat or smoke pours into the room, quickly shut the door and make sure it is really closed. If there's no smoke or heat when you open the door, go toward your escape route exit.</p>";
    feedbackMessage     += "<p>If you can't get out, keep heat and smoke from getting through the door by blocking the cracks around the door with sheets, blankets, and/or clothing. If there is a window in the room that is not possible to escape from, open it wide and stand in front of it. If you can grab a piece of clothing or a towel, place it over your mouth to keep from breathing in the smoke. This works even better if you wet the cloth first.</p>";

    return feedbackMessage;

} // getFeedbackMessageDoor

//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------
// openFireSafetyQuestionHiding
//
// Description: (hook-in) called from within the game in burningHouse.js to answer hiding fire safety question
//---------------------------------------------------------------------------------------------
function openFireSafetyQuestionHiding( isAskTheQuestion )
{
    isQuestionTime = true; // turn the flag on so player can't move around the screen

    document.getElementById('questionHidingSelection1').checked = false;
    document.getElementById('questionHidingSelection2').checked = false;
    document.getElementById('questionHidingSelection3').checked = false;
    document.getElementById('questionHidingSelection4').checked = false;

    if( isAskTheQuestion )  { openQuestionWindow( "#openFireSafetyQuestionHiding" ); }
    else                    { openQuestionWindow( "#openFireSafetyQuestionHiding", getFeedbackMessageHiding() );  }

	return false;

} // openFireSafetyQuestionHiding


//---------------------------------------------------------------------------------------------
function checkAnswerHiding()
{
    var answeredCorrectly   = false;

    //correctAnswers are [1, 4];
    //
    if( document.getElementById('questionHidingSelection1').checked &&
        document.getElementById('questionHidingSelection4').checked &&
        !document.getElementById('questionHidingSelection2').checked &&
        !document.getElementById('questionHidingSelection3').checked  )
    {
        answeredCorrectly = true;
    }

    return answeredCorrectly;

} // checkAnswerHiding

//---------------------------------------------------------------------------------------------
function getFeedbackMessageHiding()
{
    // information taken from http://kidshealth.org/kid/watch/er/fire_safety.html
    //
    return "<p>Even if you're scared, never hide under the bed or in a closet. If you do, firefighters will have a hard time finding you. Know that firefighters or other adults will be looking for you to help you out safely. The sooner they find you, the sooner you both can get out.</p>";

} // getFeedbackMessageHiding

//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------
// openFireSafetyQuestionSmoke
//
// Description: (hook-in) called from within the game in burningHouse.js to answer smoke fire safety question
//---------------------------------------------------------------------------------------------
function openFireSafetyQuestionSmoke()
{
    isQuestionTime = true; // turn the flag on so player can't move around the screen

    document.getElementById('questionSmokeSelection1').checked = false;
    document.getElementById('questionSmokeSelection2').checked = false;
    document.getElementById('questionSmokeSelection3').checked = false;
    document.getElementById('questionSmokeSelection4').checked = false;

    openQuestionWindow( "#openFireSafetyQuestionSmoke" );

	return false;

} // openFireSafetyQuestionSmoke

//---------------------------------------------------------------------------------------------
function checkAnswerSmoke()
{
    var answeredCorrectly   = false;

    //correctAnswers are [3];
    //
    if( document.getElementById('questionSmokeSelection3').checked &&
        !document.getElementById('questionSmokeSelection1').checked &&
        !document.getElementById('questionSmokeSelection2').checked &&
        !document.getElementById('questionSmokeSelection4').checked  )
    {
        answeredCorrectly = true;
    }

    return answeredCorrectly;

} // checkAnswerSmoke


//---------------------------------------------------------------------------------------------
function getFeedbackMessageSmoke()
{
    // information taken from http://kidshealth.org/kid/watch/er/fire_safety.html
    //
    var feedbackMessage  = "<p>If you can see smoke in the house, stay low to the ground as you make your way to the exit. In a fire, smoke and poisonous air hurt more people than the actual flames do. You'll breathe less smoke if you stay close to the ground.</p>";
    feedbackMessage     += "<p>Smoke naturally rises, so if there is smoke while you're using your escape route, staying low means you can crawl under most of it. You can drop to the floor and crawl on your hands and knees below the smoke.</p>";
    feedbackMessage     += "<p>Smoke inhalation is also a danger of smoke that can cause serious injury and death. Many compounds of smoke from fires are highly toxic and/or irritating.</p>";

    return feedbackMessage;

} // getFeedbackMessageSmoke


//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------
// openFireSafetyQuestionWindow
//
// Description: (hook-in) called from within the game in burningHouse.js to answer window fire safety question
//---------------------------------------------------------------------------------------------
function openFireSafetyQuestionWindow( isAskTheQuestion )
{
    isQuestionTime = true; // turn the flag on so player can't move around the screen

    document.getElementById('questionWindowSelection1').checked = false;
    document.getElementById('questionWindowSelection2').checked = false;
    document.getElementById('questionWindowSelection3').checked = false;
    document.getElementById('questionWindowSelection4').checked = false;

    if( isAskTheQuestion )  { openQuestionWindow( "#openFireSafetyQuestionWindow" ); }
    else                    { openQuestionWindow( "#openFireSafetyQuestionWindow", getFeedbackMessageWindow() );  }

	return false;

} // openFireSafetyQuestionWindow

//---------------------------------------------------------------------------------------------
function checkAnswerWindow()
{
    var answeredCorrectly   = false;

    //correctAnswers are [1, 3, 4];
    //
    if( document.getElementById('questionWindowSelection1').checked &&
        document.getElementById('questionWindowSelection3').checked &&
        document.getElementById('questionWindowSelection4').checked &&
        !document.getElementById('questionWindowSelection2').checked  )
    {
        answeredCorrectly = true;
    }

    return answeredCorrectly;

} // checkAnswerWindow


//---------------------------------------------------------------------------------------------
function getFeedbackMessageWindow()
{
    // information taken from http://kidshealth.org/kid/watch/er/fire_safety.html
    //
    var feedbackMessage  = "<p>Use the window to escape only if it is safe to do so</p>";
    feedbackMessage     += "<p>If you can't get out fast, because fire or smoke is blocking an escape route, you'll want to yell for help. You can do this from an open window or call 000 if you have a phone with you.</p>";
    feedbackMessage     += "<p>In the meanwhile, keep heat and smoke from getting through the door by blocking the cracks around the door with sheets, blankets, and/or clothing. If there is a window in the room that is not possible to escape from, open it wide and stand in front of it. If you can grab a piece of clothing or a towel, place it over your mouth to keep from breathing in the smoke. This works even better if you wet the cloth first.</p>";
       
    return feedbackMessage;

} // getFeedbackMessageWindow


//---------------------------------------------------------------------------------------------
function openQuestionWindow(    idQuestion,
                                feedbackMessage )
{
    feedbackMessage = ( typeof feedbackMessage !== 'undefined' )? feedbackMessage : "";

    $('.theInstructions').css('display', 'block');
    $('.theAnswers div.answerFeedback').html( "" );
    $('.theAnswers div.answerFeedbackMessage').html( feedbackMessage );

    if( feedbackMessage == "" ) // ask the question
    {
        $('.btnClose').css( 'display', 'none' );
        $('.btnAnswer').css( 'display', 'inline-block' );
        $('.theQuestion').css('display', 'block');
    }
    else // don't ask the question just display the info
    {
        $(idQuestion+' .theInstructions').html('Information');
        $('.btnClose').css( 'display', 'inline-block' );
        $('.btnAnswer').css( 'display', 'none' );
        $('.theQuestion').css('display', 'none');
    }


	// Getting the variable's value from a link 
	var questionBox = idQuestion; 

	//Fade in the Popup and add close button
	$(questionBox).fadeIn(300);
		
	//Set the center alignment padding + border
	var popMargTop = ($(questionBox).height() + 24) / 2; 
	var popMargLeft = ($(questionBox).width() + 24) / 2; 
		
	$(questionBox).css(
    { 
		'margin-top' : -popMargTop,
		'margin-left' : -popMargLeft
	});
		
	// Add the mask to body
	$('body').append("<div id='mask'></div>");
	$('#mask').fadeIn(300);

} // openQuestionWindow



