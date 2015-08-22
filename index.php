<!DOCTYPE html>

<html>

<head>
    <meta charset='utf-8' />
    <meta name='description' content='CUFDIG507A - Assessment 4' />
    <meta name='keywords' content='CUFDIG507A - Assessment 4' />
    <meta name='author' content='Clinton Fong' />

    <title>CUFDIG507A - Assessment 4</title>

    <link rel='stylesheet' type='text/css' href='js/jquery-ui-1.11.2.custom/jquery-ui.min.css' />
    <link rel='stylesheet' type='text/css' href='css/fireSafetyQuestions.css' />
    <link rel='stylesheet' type='text/css' href='css/main.css' />

</head>

<body>

    <div id="cntScore">
        <div id="theScore">Score: <span class="fireText">0</span></div>
        <div id="theHealth">Health: <span class="fireText">100%</span></div>
        <div id="theWalkingMode">Mode: <span>Walking</span></div>
        <div id="theElapsedTime">Elapsed Time: <span>0:00:00</span></div>
        <div id="theWarning"></div>
    </div>

    <div id='theGameInstructions' class='gameInstructionsPopup'></div>
    <div id="cntGame"></div>
    <div id='gameOverMessage'></div>

    <?php
        include "include/fireSafetyQuestions.php";
    ?>


    <script src="js/lib/jquery-1.11.1.min.js"></script>
    <script src="js/lib/jquery-ui-1.11.2.custom/jquery-ui.min.js"></script>
    <script src="js/fireSafetyQuestions.js"></script>


    <script src="js/phaser.js"></script>
    <script src="js/burningHouse.js"></script>
    <script src="js/main.js"></script>

</body>
</html>

