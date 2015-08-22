// defined values
//
var WALK_PACE   = 170;
var CRAWL_PACE  = 100;

var ALARM_VOLUME        = 0.7;
var COUGHING_VOLUME     = 0.7;
var SCREAMING_VOLUME    = 0.7;

// tiles
//
var TILE_DOOR_H = 1685;
var TILE_DOOR_V = 1780;

var HIDE_PLAYER_TILES   = [1273];
var UNHIDE_PLAYER_TILE  = [95];
var SMOKE_TILES         = [3597, 3598, 3599, 3600, 3601, 3602, 3603, 3604, 3605, 3606, 3607, 3608, 3609, 3610, 3611, 3612, 3628, 3629, 3630, 3631, 3632, 3633, 3634, 3635, 3636, 3637, 3638, 3639, 3640, 3641, 3642, 3643, 3659, 3660, 3661, 3662, 3663, 3664, 3665, 3666, 3667, 3668, 3669, 3670, 3671, 3672, 3673, 3674, 3690, 3691, 3692, 3693, 3694, 3695, 3696, 3697, 3698, 3699, 3700, 3701, 3702, 3703, 3704, 3705, 2948, 2949, 2950, 2951, 2952, 2953, 2954, 2955, 2956, 2957, 2958, 2959, 2960, 2961, 2962, 2963, 2964, 2965, 2966, 2967, 2968, 2969, 2970, 2971, 2972, 2973, 2974, 2975, 2976, 3721, 3722, 3723, 3724, 3725, 3726, 3727, 3728, 3729, 3730, 3731, 3732, 3733, 3734, 3735, 3736, 2979, 2980, 2981, 2982, 2983, 2984, 2985, 2986, 2987, 2988, 2989, 2990, 2991, 2992, 2993, 2994, 2995, 2996, 2997, 2998, 2999, 3000, 3001, 3002, 3003, 3004, 3005, 3006, 3007, 3752, 3753, 3754, 3755, 3756, 3757, 3758, 3759, 3760, 3761, 3762, 3763, 3764, 3765, 3766, 3767, 3010, 3011, 3012, 3013, 3014, 3015, 3016, 3017, 3018, 3019, 3020, 3021, 3022, 3023, 3024, 3025, 3026, 3027, 3028, 3029, 3030, 3031, 3032, 3033, 3034, 3035, 3036, 3037, 3038, 3783, 3784, 3785, 3786, 3787, 3788, 3789, 3790, 3791, 3792, 3793, 3794, 3795, 3796, 3797, 3798, 3041, 3042, 3043, 3044, 3045, 3046, 3047, 3048, 3049, 3050, 3051, 3052, 3053, 3054, 3055, 3056, 3057, 3058, 3059, 3060, 3061, 3062, 3063, 3064, 3065, 3066, 3067, 3068, 3069, 3814, 3815, 3816, 3817, 3818, 3819, 3820, 3821, 3822, 3823, 3824, 3825, 3826, 3827, 3828, 3829, 3072, 3073, 3074, 3075, 3076, 3077, 3078, 3079, 3080, 3081, 3082, 3083, 3084, 3085, 3086, 3087, 3088, 3089, 3090, 3091, 3092, 3093, 3094, 3095, 3096, 3097, 3098, 3099, 3100, 3845, 3846, 3847, 3848, 3849, 3850, 3851, 3852, 3853, 3854, 3855, 3856, 3857, 3858, 3859, 3860, 3103, 3104, 3105, 3106, 3107, 3108, 3109, 3110, 3111, 3112, 3113, 3114, 3115, 3116, 3117, 3118, 3119, 3120, 3121, 3122, 3123, 3124, 3125, 3126, 3127, 3128, 3129, 3130, 3131, 3132, 3133, 3134, 3135, 3136, 3137, 3138, 3139, 3140, 3141, 3142, 3143, 3144, 3145, 3146, 3147, 3148, 3149, 3150, 3151, 3152, 3153, 3154, 3155, 3156, 3157, 3158, 3159, 3160, 3161, 3162, 3163, 3164, 3165, 3166, 3167, 3168, 3169, 3170, 3171, 3172, 3173, 3174, 3175, 3176, 3177, 3178, 3179, 3180, 3181, 3182, 3183, 3184, 3185, 3186, 3187, 3188, 3189, 3190, 3191, 3192, 3193, 3194, 3195, 3196, 3197, 3198, 3199, 3200, 3201, 3202, 3203, 3204, 3205, 3206, 3207, 3208, 3209, 3210, 3211, 3212, 3213, 3214, 3215, 3216, 3217, 3218, 3219, 3220, 3221, 3222, 3223, 3224, 3225, 3226, 3227, 3228, 3229, 3230, 3231, 3232, 3233, 3234, 3235, 3236, 3237, 3238, 3239, 3240, 3241, 3242, 3243, 3244, 3245, 3246, 3247, 3248, 3249, 3250, 3251, 3252, 3253, 3254, 3255, 3259, 3260, 3261, 3262, 3263, 3264, 3265, 3266, 3267, 3268, 3269, 3270, 3271, 3272, 3273, 3274, 3275, 3276, 3277, 3278, 3279, 3280, 3281, 3282, 3283, 3284, 3285, 3286, 3290, 3291, 3292, 3293, 3294, 3295, 3296, 3297, 3298, 3299, 3300, 3301, 3302, 3303, 3304, 3305, 3306, 3307, 3308, 3309, 3310, 3311, 3312, 3313, 3314, 3315, 3316, 3317, 3321, 3322, 3323, 3324, 3325, 3326, 3327, 3328, 3329, 3330, 3331, 3332, 3333, 3334, 3335, 3336, 3337, 3338, 3339, 3340, 3341, 3342, 3343, 3344, 3345, 3346, 3347, 3348, 3352, 3353, 3354, 3355, 3356, 3357, 3358, 3359, 3360, 3361, 3362, 3363, 3364, 3365, 3366, 3367, 3368, 3369, 3370, 3371, 3372, 3373, 3374, 3375, 3376, 3377, 3378, 3379, 3383, 3384, 3385, 3386, 3387, 3388, 3389, 3390, 3391, 3392, 3393, 3394, 3395, 3396, 3397, 3398, 3399, 3400, 3401, 3402, 3403, 3404, 3405, 3406, 3407, 3408, 3409, 3410, 3414, 3415, 3416, 3417, 3418, 3419, 3420, 3421, 3422, 3423, 3424, 3425, 3426, 3427, 3428, 3429, 3430, 3431, 3432, 3433, 3434, 3435, 3436, 3437, 3438, 3439, 3440, 3441, 3445, 3446, 3447, 3448, 3449, 3450, 3451, 3452, 3453, 3454, 3455, 3456, 3457, 3458, 3459, 3460, 3461, 3462, 3463, 3464, 3465, 3466, 3467, 3468, 3469, 3470, 3471, 3472, 3476, 3477, 3478, 3479, 3480, 3481, 3482, 3483, 3484, 3485, 3486, 3487, 3488, 3489, 3490, 3491, 3492, 3493, 3494, 3495, 3496, 3497, 3498, 3499, 3500, 3501, 3502, 3503, 3507, 3508, 3509, 3510, 3511, 3512, 3513, 3514, 3515, 3516, 3517, 3518, 3519, 3520, 3521, 3522, 3523, 3524, 3525, 3526, 3527, 3528, 3529, 3530, 3531, 3532, 3533, 3534, 3535, 3536, 3537, 3538, 3539, 3540, 3541, 3542, 3543, 3544, 3545, 3546, 3547, 3548, 3549, 3550, 3551, 3552, 3553, 3554, 3555, 3556, 3557, 3558, 3559, 3560, 3561, 3562, 3563, 3564, 3565, 3566, 3567, 3568, 3569, 3570, 3571, 3572, 3573, 3574, 3575, 3576, 3577, 3578, 3579, 3580, 3581, 3582, 3583, 3584, 3585, 3586, 3587, 3588, 3589, 3590, 3591, 3592, 3593, 3594, 3595, 3596, 2977, 2978, 3258, 3289, 3320, 3351, 3382, 3876, 3881, 3882, 3883, 3884, 3885, 3413, 2946, 2947, 3444, 3475, 3008, 3009, 3506, 3039, 3040, 3070, 3071, 3101, 3102, 3256, 3257, 3287, 3288, 3318, 3319, 3349, 3350, 3380, 3381, 3411, 3412, 3442, 3443, 3877, 3878, 3879, 3880, 3886, 3887, 3888, 3889, 3890, 3891, 3473, 3474]; 

var WINDOW_TILES        = [803, 898, 900, 901];

var FLAME1_TILES            = [1214, 1217, 1309, 1310, 1311, 1312, 1404, 1405, 1406, 1407, 1498, 1499, 1500, 1501, 1502, 1593, 1594, 1595, 1596, 1597, 1598, 1689, 1690, 1691, 1692];
var FLAME1_EXCLUSION_TILES  = [1213, 1215, 1216, 1218, 1308, 1313, 1403, 1408, 1503, 1688, 1693];
var FLAME2_TILES            = [1220, 1223, 1315, 1316, 1317, 1318, 1410, 1411, 1412, 1413, 1505, 1506, 1507, 1508, 1509, 1599, 1600, 1601, 1602, 1603, 1604, 1695, 1696, 1697, 1698];
var FLAME2_EXCLUSION_TILES  = [1219, 1221, 1222, 1224, 1314, 1319, 1409, 1414, 1504, 1694, 1699];     

var EXIT_TILE               = 190;


//==================================================================
// Boot
//==================================================================

var boot = function( game ) 
{
    this.game = game;
}

boot.prototype =
{
    preload: function()
    {
    },

    create: function()
    {
        this.game.state.start( "Preloader" );
    }

} // boot.prototype


//==================================================================
// Preloader
//==================================================================

var preloader = function( game ) 
{
    this.game = game;
    this.continueKey;
}

preloader.prototype =
{
    preload: function()
    {
    },

    create: function()
    {
        this.displayGameInstructions();

        this.continueKey = this.game.input.keyboard.addKey( Phaser.Keyboard.SPACEBAR );
        this.continueKey.onDown.add( this.onContinueToGame, this );
    },

    //----------------------------------------------------------------
    onContinueToGame: function( key )
    {
        if( key.keyCode == Phaser.Keyboard.SPACEBAR )
        {
            this.closeInstructionWindow( "#theGameInstructions" );
            this.game.state.start( "TheGame" );
        }

    }, // onContinueToGame

    //----------------------------------------------------------------
    displayGameInstructions: function()
    {
        var instructions     = "<div>";
        instructions        += "<h1>Instructions</h1>";
        instructions        += "<ul>";
        instructions        += "<li>Use the Arrow keys to move the player.</li>";
        instructions        += "<li>SPACEBAR to switch between walking and crawling.</li>" ;
        instructions        += "<li>S to turn off/on the house alarm</li><br>" ;
        instructions        += "<li>You will lose 1 point in score for every second that you are hiding in a wardrobe.</li>" ;
        instructions        += "<li>You will lose 1 point in score and health for every second that you are standing up in smoke.</li>" ;
        instructions        += "<li>You will lose 10 points in score and health for every second that you are in contact with fire.</li>" ;
        instructions        += "<li>You will gain points in score when you answer the questions correctly in the game.</li>" ;
        instructions        += "<li>When your health reaches '0'(zero) and below, you die and the game ends.</li>" ;
        instructions        += "<li>You complete the game when you successfully exit the house safely without dying.</li>" ;
        instructions        += "</ul>";
        instructions        += "<strong>Hint:</strong> Having a higher resolution screen with the window maximised will slow the game down a bit compared to a smaller window. So if you find the scrolling is getting too slow, make the window smaller and restart the game.<br><br>";
        instructions        += "Hit the spacebar to continue";
        instructions        += "</div>";

        $("#theGameInstructions").html( instructions );
        this.openInstructionWindow( '#theGameInstructions' );


    }, // displayGameInstructions

    //----------------------------------------------------------------
    openInstructionWindow: function ( idWindow )
    {

	    //Fade in the Popup and add close button
	    $( idWindow ).fadeIn(300);
		
	    //Set the center alignment padding + border
	    var popMargTop = ($(idWindow).height() + 24) / 2; 
	    var popMargLeft = ($(idWindow).width() + 24) / 2; 
		
	    $( idWindow ).css(
        { 
		    'margin-top' : -popMargTop,
		    'margin-left' : -popMargLeft
	    });
		
	    // Add the mask to body
	    $('body').append("<div id='mask'></div>");
	    $('#mask').fadeIn(300);

    }, // openInstructionWindow

    //---------------------------------------------------------------------------------------------
    closeInstructionWindow: function( idWindow )   // When clicking on the button close (the cross at the top right corner)
    { 
	    $( idWindow ).fadeOut(300 , function() 
        {
		    $('#mask').remove();  
	    }); 
	    return false;
    }


} // preloader.prototype



//==================================================================
// TheGame
//==================================================================
function doorClass() 
{
    this.doorTile;              // DOOR_TILE_H or DOOR_TILE_V
    this.isDoorOpen = false;
    this.X          = [];       // in tile units
    this.Y          = [];       // in tile units
    this.Tiles      = [];
}


var theGame = function( game ) 
{
    this.game = game;
    this.map;
    
    this.layerFloor;
    this.layerWalkable;
    this.layerCollisionObjs;
    this.layerHidePlayer;
    this.layerSmoke;

    this.cursors;
    this.player;

    this.toggleCrawlWalk;
    this.toggleSound;
    this.toggledPlayPosition            = '';
    this.currentPlayPosition            = '';

    this.isPlayerCrawling               = false;
    this.isPlayerHiding                 = false;
    this.isPlayerCoughing               = false;

    this.isSoundOn                      = true;
    
    this.hasAskedSmokeQuestion          = false;
    this.hasAskedWindowQuestion         = false;

    this.hasPlayerExitedSuccessfully    = false;


    this.isGameOver                     = false;
    this.isGameOverChangeState          = false;

    // doors----------------------
    //
    // horizontal doors
    this.doorBedroom1;
    this.doorBedroom2;
    this.doorBedroom3;
    this.doorGarageExit;
    this.doorFrontExit;

    // vertical doors
    this.doorBathroom1;
    this.doorHouseToGarage;
    this.doorWalkinWardrobe;
    this.doorEnsuite;
    this.doorEnsuiteToilet;

    // audios ----------------------------------
    //
    this.alarm;
    this.coughing;

    // time ----------------------------------
    //
    this.timePrevious = 0.0;
    this.timePreviousBurning = 0.0;
    this.timeGameOver = 0.0; // game over time marker to check if 3 seconds has passed after game ends before changing state

} // theGame Constructor


theGame.prototype = 
{
    //----------------------------------------------------------------
	preload: function () 
    {
        this.gameReset(); // reset game from last one

        $('#cntGame').css( 'cursor', 'wait' ); // change the cursor to wait


        //this.load.tilemap( 'map', 'assets/maps/burningHouse_test1.csv', null, Phaser.Tilemap.CSV );
        this.game.load.tilemap( 'map', 'assets/maps/burningHouse.json', null, Phaser.Tilemap.TILED_JSON );

        // load tileset images
        this.game.load.image( 'house',          'assets/maps/house-tilemap.png');
        this.game.load.image( 'smoke',          'assets/maps/smoke-tilemap.png');
        this.game.load.spritesheet( 'player',   'assets/sprites/george-tilesheet.png', 48, 48 );        //  took images from http://opengameart.org/sites/default/files/george_0.png

        // load the sounds
        this.game.load.audio( 'alarm',      'assets/audio/House Fire Alarm-SoundBible.com-1609046789.mp3' ); //  sound is royalty free and taken from http://soundbible.com/tags-alarm.html
        this.game.load.audio( 'coughing',   'assets/audio/coughing.mp3');                                 //  sound is royalty free and taken from http://soundbible.com/suggest.php?q=choking&x=0&y=0
        this.game.load.audio( 'screaming',  'assets/audio/Tortured Person Screaming-SoundBible.com-63498375.mp3');                                 //  sound is royalty free and taken from http://soundbible.com/suggest.php?q=choking&x=0&y=0

	}, // preload

    //----------------------------------------------------------------
	create: function () 
    {

        this.game.stage.backgroundColor = '#dddddd';
        this.game.physics.startSystem( Phaser.Physics.ARCADE );

//        this.map = this.add.tilemap('map', 16, 16);                             // because we're loading CSV map data we have to specify the tile size here or we can't render it
        this.map = this.game.add.tilemap( 'map' );

        // add in the tileset
        //
        this.map.addTilesetImage('house');                                      
        this.map.addTilesetImage('smoke');

        // create our layers
        this.layerFloor             = this.map.createLayer('floor');                
        this.layerWalkable          = this.map.createLayer('walkable');    
        this.layerCollisionObjs     = this.map.createLayer('collision-objects');    
        this.layerHidePlayer        = this.map.createLayer('hide-player');    // create our layer
        this.layerSmoke             = this.map.createLayer('smoke');    // create our layer

        // Set Collisions for collision-objects
        //
        var CollisionExclude = FLAME1_EXCLUSION_TILES.concat( FLAME2_EXCLUSION_TILES );
        this.map.setCollisionByExclusion( CollisionExclude, true, this.layerCollisionObjs );    // set collisions against collision layer

        // doors -----------------
        this.map.setTileIndexCallback( TILE_DOOR_H, this.obstacleDoorHTest, this, this.layerCollisionObjs );
        this.map.setTileIndexCallback( TILE_DOOR_V, this.obstacleDoorVTest, this, this.layerCollisionObjs );

        this.map.setTileIndexCallback( WINDOW_TILES, this.obstacleWindow, this, this.layerCollisionObjs );

        // flames ---------------
        var FlameTiles = FLAME1_TILES.concat( FLAME2_TILES );
        this.map.setTileIndexCallback( FlameTiles, this.obstacleFlames, this, this.layerCollisionObjs );
        this.screaming = this.game.add.audio( 'screaming', SCREAMING_VOLUME, false );


        // get door tiles ------------
        //
        // horizontal doors
        for( i = 0; i < this.doorBedroom1.X.length; i++ )   { this.doorBedroom1.Tiles[i]    = this.map.getTile( this.doorBedroom1.X[i], this.doorBedroom1.Y[0], this.layerCollisionObjs ); }
        for( i = 0; i < this.doorBedroom2.X.length; i++ )   { this.doorBedroom2.Tiles[i]    = this.map.getTile( this.doorBedroom2.X[i], this.doorBedroom2.Y[0], this.layerCollisionObjs ); }
        for( i = 0; i < this.doorBedroom3.X.length; i++ )   { this.doorBedroom3.Tiles[i]    = this.map.getTile( this.doorBedroom3.X[i], this.doorBedroom3.Y[0], this.layerCollisionObjs ); }
        for( i = 0; i < this.doorGarageExit.X.length; i++ ) { this.doorGarageExit.Tiles[i]  = this.map.getTile( this.doorGarageExit.X[i], this.doorGarageExit.Y[0], this.layerCollisionObjs ); }
        for( i = 0; i < this.doorFrontExit.X.length; i++ )  { this.doorFrontExit.Tiles[i]   = this.map.getTile( this.doorFrontExit.X[i], this.doorFrontExit.Y[0], this.layerCollisionObjs ); }

        // vertical doors
        for( j = 0; j < this.doorBathroom1.Y.length; j++ )      { this.doorBathroom1.Tiles[j]       = this.map.getTile( this.doorBathroom1.X[0], this.doorBathroom1.Y[j], this.layerCollisionObjs ); }
        for( j = 0; j < this.doorHouseToGarage.Y.length; j++ )  { this.doorHouseToGarage.Tiles[j]   = this.map.getTile( this.doorHouseToGarage.X[0], this.doorHouseToGarage.Y[j], this.layerCollisionObjs ); }
        for( j = 0; j < this.doorWalkinWardrobe.Y.length; j++ ) { this.doorWalkinWardrobe.Tiles[j]  = this.map.getTile( this.doorWalkinWardrobe.X[0], this.doorWalkinWardrobe.Y[j], this.layerCollisionObjs ); }
        for( j = 0; j < this.doorEnsuite.Y.length; j++ )        { this.doorEnsuite.Tiles[j]         = this.map.getTile( this.doorEnsuite.X[0], this.doorEnsuite.Y[j], this.layerCollisionObjs ); }
        for( j = 0; j < this.doorEnsuiteToilet.Y.length; j++ )  { this.doorEnsuiteToilet.Tiles[j]   = this.map.getTile( this.doorEnsuiteToilet.X[0], this.doorEnsuiteToilet.Y[j], this.layerCollisionObjs ); }

        // resize the world - this allows for scrolling of background
        //
        this.layerFloor.resizeWorld();                       

        //  Player ------------------
        this.player = this.add.sprite(48, 48, 'player', 16);
        this.player.anchor.setTo( 0, 0 );
        this.player.animations.add('walk-left', [1, 13, 9, 5], 10, true);
        this.player.animations.add('walk-right', [3, 15, 11, 7], 10, true);
        this.player.animations.add('walk-up', [2, 14, 10, 6], 10, true);
        this.player.animations.add('walk-down', [0, 12, 8, 4], 10, true);

        this.player.animations.add('crawl-left', [26, 27], 10, true);
        this.player.animations.add('crawl-right', [22, 23], 10, true);
        this.player.animations.add('crawl-up', [20, 21], 10, true);
        this.player.animations.add('crawl-down', [24, 25], 10, true);      

        this.player.animations.add('dead', [18], 10, true);

        this.physics.enable( this.player, Phaser.Physics.ARCADE );
        this.player.body.setSize( 31, 32, 8, 11);
        

        // place player on the bed to start with
        this.player.x = 180;
        this.player.y = 1000;

        this.game.camera.follow( this.player );

        this.cursors            = this.game.input.keyboard.createCursorKeys();  // use cursors to move/scroll around the map
        this.toggleCrawlWalk    = this.game.input.keyboard.addKey( Phaser.Keyboard.SPACEBAR );
        this.toggleCrawlWalk.onDown.add( this.onToggle, this );
        this.toggleSound        = this.game.input.keyboard.addKey( Phaser.Keyboard.S );
        this.toggleSound.onDown.add( this.onToggle, this );


        // hiding player -------------
        this.map.setTileIndexCallback( HIDE_PLAYER_TILES, this.hidePlayer, this, this.layerHidePlayer );
        this.map.setTileIndexCallback( UNHIDE_PLAYER_TILE, this.unhidePlayer, this, this.layerHidePlayer );

        // smoke ------------------------------------------
        this.map.setTileIndexCallback( SMOKE_TILES, this.smokePlayer, this, this.layerSmoke );
        this.coughing = this.game.add.audio( 'coughing', COUGHING_VOLUME, true );

        // game exit tiles ------------------------------------------
        this.map.setTileIndexCallback( EXIT_TILE, this.exitPlayer, this, this.layerHidePlayer );

        // alarm ----------------
        //
        this.alarm = this.game.add.audio( 'alarm', ALARM_VOLUME, true );
        this.alarm.play();

        $('#cntGame').css( 'cursor', 'default' ); // change the cursor back to normal
        this.game.time.reset();

	}, // create

    //----------------------------------------------------------------
	update: function () 
    {
        // end the game if health drops below 0
        if( ( health <= 0 ) || ( this.hasPlayerExitedSuccessfully ) )
        {
            this.timeGameOver = ( this.timeGameOver == 0.0 )? this.game.time.totalElapsedSeconds() : this.timeGameOver;
            var timeElapsed = this.game.time.totalElapsedSeconds();
            if( 3.0 <= ( timeElapsed - this.timeGameOver ) )
            {
                this.game.state.start( 'GameOver' );
            }
            else
            {
                if( health <= 0 ) { this.player.body.velocity.set(0); } // stop the player moving if he has died

                this.isGameOver = true;
                this.coughing.stop();
                this.alarm.stop();
                this.displayGameOverMessage();
            }
            return;
        }

        this.game.physics.arcade.collide( this.player, this.layerCollisionObjs );
        this.game.physics.arcade.collide( this.player, this.layerHidePlayer );
        this.game.physics.arcade.collide( this.player, this.layerSmoke);

        this.player.body.velocity.set(0);

        if( !isQuestionTime )
        {
            var timeElapsed = this.game.time.totalElapsedSeconds();
            if( 1.0 <= ( timeElapsed - this.timePrevious ) )
            {
                updateTime( Math.round( timeElapsed ) );
                this.timePrevious = timeElapsed;

                // deduct point for every second
                if( this.isPlayerHiding )   { addScore( -1 ); } 
                if( this.isPlayerCoughing ) { dropHealth( 1 ); }
            }

            // Moving player

            // left ---------
            if( this.cursors.left.isDown )
            {
                if( this.isPlayerCrawling ) { this.movePlayerX( -CRAWL_PACE, 'crawl-left', 'walk-left' );  }
                else                        { this.movePlayerX( -WALK_PACE,  'walk-left',  'crawl-left' ); }
            }

            // right ---------
            else if( this.cursors.right.isDown )
            {
                if( this.isPlayerCrawling ) { this.movePlayerX( CRAWL_PACE,  'crawl-right',  'walk-right' );  }
                else                        { this.movePlayerX( WALK_PACE,   'walk-right',   'crawl-right' ); }
            }

            // up ---------
            else if( this.cursors.up.isDown )
            {
                if( this.isPlayerCrawling ) { this.movePlayerY( -CRAWL_PACE,  'crawl-up',  'walk-up' );  }
                else                        { this.movePlayerY( -WALK_PACE,   'walk-up',  'crawl-up' );  }
            }

            // down --------
            else if( this.cursors.down.isDown )
            {
                if( this.isPlayerCrawling ) { this.movePlayerY( CRAWL_PACE,   'crawl-down',  'walk-down' );   }
                else                        { this.movePlayerY( WALK_PACE,    'walk-down',   'crawl-down' );  }
            }
            else
            {
                this.player.animations.stop();
            }

            this.layerCollisionObjs.dirty = true;

        }

	}, // update

    //----------------------------------------------------------------
    movePlayerX: function(  pace, 
                            currentPlayPosition, 
                            toggledPlayPosition )
    {
        this.player.body.velocity.x = pace;
        this.player.play( currentPlayPosition );
        this.toggledPlayPosition = toggledPlayPosition;
        this.currentPlayPosition = currentPlayPosition;

    }, // movePlayerX

    //----------------------------------------------------------------
    movePlayerY: function(  pace, 
                            currentPlayPosition, 
                            toggledPlayPosition )
    {
        this.player.body.velocity.y = pace;
        this.player.play( currentPlayPosition );
        this.toggledPlayPosition = toggledPlayPosition;
        this.currentPlayPosition = currentPlayPosition;

    }, // movePlayerY

    //----------------------------------------------------------------
    onToggle: function( key )
    {
        if( key.keyCode == Phaser.Keyboard.SPACEBAR )
        {
            // Toggle between walking and crawling
            //
            this.isPlayerCrawling = ( !this.isPlayerCrawling );
            if( this.toggledPlayPosition != '' ) { this.player.play( this.toggledPlayPosition ); }

            var tempPlayPosition     = this.toggledPlayPosition;
            this.toggledPlayPosition = this.currentPlayPosition
            this.currentPlayPosition = tempPlayPosition;

            // change the visual cue to the user
            var mode = (this.isPlayerCrawling)? "Crawling" : "Walking";
            changeWalkingModeDisplay( mode );

            this.layerCollisionObjs.dirty = true;
        }
        else if( key.keyCode == Phaser.Keyboard.S )
        {
            // toggle sound
            if( this.isSoundOn )    { this.alarm.pause(); }
            else                    { this.alarm.play(); }

            // toggle the sound on flag
            this.isSoundOn = !this.isSoundOn; 
        }


    }, // onToggle

    //----------------------------------------------------------------
    // Callback functions
    //----------------------------------------------------------------
    //----------------------------------------------------------------
    // obstacleDoorHTest
    //
    // Description: Callback function for Horizontal doors
    //----------------------------------------------------------------
    obstacleDoorHTest: function( player, 
                                 door )
    {
        var isBlockAccess = true;

        // check all the horizontal doors 
        //
        if( this.areWeAtThisDoorH( door, this.doorBedroom1 ) )          { isBlockAccess = ( !this.openDoor( this.doorBedroom1 ) ); }
        else if( this.areWeAtThisDoorH( door, this.doorBedroom2 ) )     { isBlockAccess = ( !this.openDoor( this.doorBedroom2 ) ); }
        else if( this.areWeAtThisDoorH( door, this.doorBedroom3 ) )     { isBlockAccess = ( !this.openDoor( this.doorBedroom3 ) ); }
        else if( this.areWeAtThisDoorH( door, this.doorGarageExit ) )   { isBlockAccess = ( !this.openDoor( this.doorGarageExit ) ); }
        else if( this.areWeAtThisDoorH( door, this.doorFrontExit ) )    { isBlockAccess = ( !this.openDoor( this.doorFrontExit ) ); }


        //if( !this.layerCollisionObjs.dirty ) { this.checkDoorH( door, this.doorBedroom2 ); }

        return isBlockAccess;

    }, // obstacleDoorHTest

    //----------------------------------------------------------------
    // areWeAtThisDoorH
    //
    // Description: Checks the door that has been triggered with our known horizontal door(s) to check in doorToCheck to see if we are at this door
    //              returns true if doorToCheck is the door we are at
    //----------------------------------------------------------------
    areWeAtThisDoorH: function( door, 
                                doorToCheck )
    {
        var isAtThisDoor    = false;
        var doorSize        = doorToCheck.X.length;

        if( ( door.y == doorToCheck.Y[0] ) && 
            ( door.x >= doorToCheck.X[0] ) && ( door.x <= doorToCheck.X[ doorSize-1 ] ) )
        {
            isAtThisDoor = true;
        }

        return isAtThisDoor;

    }, // areWeAtThisDoorH

    //----------------------------------------------------------------
    //----------------------------------------------------------------
    //----------------------------------------------------------------
    // obstacleDoorVTest
    //
    // Description: Callback function for Vertical doors
    //----------------------------------------------------------------

    obstacleDoorVTest: function( player, 
                                 door )
    {
        var isBlockAccess = true;

        // check all the horizontal doors 
        //
        if( this.areWeAtThisDoorV( door, this.doorBathroom1 ) )             { isBlockAccess = ( !this.openDoor( this.doorBathroom1 ) ); }
        else if( this.areWeAtThisDoorV( door, this.doorHouseToGarage ) )    { isBlockAccess = ( !this.openDoor( this.doorHouseToGarage ) ); }
        else if( this.areWeAtThisDoorV( door, this.doorWalkinWardrobe ) )   { isBlockAccess = ( !this.openDoor( this.doorWalkinWardrobe ) ); }
        else if( this.areWeAtThisDoorV( door, this.doorEnsuite ) )          { isBlockAccess = ( !this.openDoor( this.doorEnsuite ) ); }
        else if( this.areWeAtThisDoorV( door, this.doorEnsuiteToilet ) )    { isBlockAccess = ( !this.openDoor( this.doorEnsuiteToilet ) ); }

        //if( !this.layerCollisionObjs.dirty ) { this.checkDoorH( door, this.doorBedroom2 ); }

        return isBlockAccess;

    }, // obstacleDoorVTest

    //----------------------------------------------------------------
    // areWeAtThisDoorV
    //
    // Description: Checks the door that has been triggered with our known vertical door(s) to check in doorToCheck to see if we are at this door
    //              returns true if doorToCheck is the door we are at
    //----------------------------------------------------------------
    areWeAtThisDoorV: function( door, 
                                doorToCheck )
    {
        var isAtThisDoor    = false;
        var doorSize        = doorToCheck.Y.length;

        if( ( door.x == doorToCheck.X[0] ) && 
            ( door.y >= doorToCheck.Y[0] ) && ( door.y <= doorToCheck.Y[ doorSize-1 ] ) )
        {
            isAtThisDoor = true;
        }

        return isAtThisDoor;

    }, // areWeAtThisDoorV

    //----------------------------------------------------------------
    openDoor: function( doorToOpen )
    {
        if( !doorToOpen.isDoorOpen ) 
        {
            // ask the fire safety questions for door
            openFireSafetyQuestionDoor();


            // open door
            doorToOpen.isDoorOpen = true;
            for( i in doorToOpen.Tiles ) { doorToOpen.Tiles[i].alpha = 0.0; }

            this.layerCollisionObjs.dirty = true;
        }

        return doorToOpen.isDoorOpen;

    }, // openDoor

    //----------------------------------------------------------------
    // Callback functions
    //----------------------------------------------------------------
    obstacleWindow: function(   player,
                                window )
    {
        openFireSafetyQuestionWindow( !this.hasAskedWindowQuestion );
        this.hasAskedWindowQuestion = true;
        return true;

    }, // obstacleWindow


    //----------------------------------------------------------------
    // Callback functions
    //----------------------------------------------------------------
    hidePlayer: function( player,
                          wardrobe )
    {
        // if not already hiding - throw question
        //
        if( !this.isPlayerHiding )
        {
            openFireSafetyQuestionHiding( !this.hasAskedHidingQuestion );
            displayTheWarning("Warning: Hiding = Dangerous for health (Losing Points)");
            this.hasAskedHidingQuestion = true;
        }

        this.isPlayerHiding = true;
        player.alpha        = 0.2;

    }, // hidePlayer

    //----------------------------------------------------------------
    unhidePlayer: function( player,
                            wardrobe )
    {
        this.isPlayerHiding = false;
        player.alpha        = 1;
        removeTheWarning();

        if( this.isPlayerCoughing )
        {
            this.isPlayerCoughing = false;
            this.coughing.pause(); // got out of the smoke
        }

    }, // unhidePlayer

    //----------------------------------------------------------------
    // Callback functions
    //----------------------------------------------------------------
    //----------------------------------------------------------------
    // smokePlayer
    //----------------------------------------------------------------
    smokePlayer: function( player,
                           smoke )
    {
        player.alpha = 0.6;     // semi-hide player under the smoke

        // ask smoke question once
        //
        if( !this.hasAskedSmokeQuestion )
        {
            this.hasAskedSmokeQuestion = true;
            openFireSafetyQuestionSmoke();
        }

        // coughing for player 
        //
        if( this.isPlayerCrawling )
        {
            this.isPlayerCoughing = false;
            this.coughing.pause();
        }
        else if( !this.isPlayerCoughing )
        {
            this.isPlayerCoughing = true;
            this.coughing.play();
        }

    }, // smokePlayer

    //----------------------------------------------------------------
    // Callback functions
    //----------------------------------------------------------------
    obstacleFlames: function(   player,
                                flames )
    {
        var timeBurningElapsed = this.game.time.totalElapsedSeconds();
        if( 1.0 <= ( timeBurningElapsed - this.timePreviousBurning ) )
        {
            this.timePreviousBurning = timeBurningElapsed;
            dropHealth( 10 ); 
        }

        if( !this.screaming.isPlaying )
        {
            this.screaming.play();
        }

    }, // obstacleFlames

    //----------------------------------------------------------------
    // Callback functions
    //----------------------------------------------------------------
    exitPlayer: function(   player,
                            flames )
    {
        player.alpha = 1;
        this.hasPlayerExitedSuccessfully = true;

    }, // exitPlayer

    //----------------------------------------------------------------
    //----------------------------------------------------------------
    displayGameOverMessage: function()
    {
        var message; 
        var color;
    
        if( health > 0 ) 
        {
            message = "Congratulations<br>You have successfully escaped the burning house<br>Remember to go to the neighbours and Dial 000";
            color   = "#74BF43";
        }
        else
        {
            message = "Game Over<br>You have Died";
            color   = "#FAD160";
        }

        $('#gameOverMessage').html( message );
        $('#gameOverMessage').css( { 'display' : 'block', 
                                     'color' : color } ); 

    }, // displayGameOverMessage

    //----------------------------------------------------------------
    removeGameOverMessage: function()
    {
        $('#gameOverMessage').css( 'display', 'none' ); 

    }, // removeGameOverMessage

    //----------------------------------------------------------------
    gameReset: function()
    {
        this.removeGameOverMessage(); // remove game over message from the last game

        resetScoreAndHealth();

        this.toggledPlayPosition            = '';
        this.currentPlayPosition            = '';

        this.isPlayerCrawling               = false;
        this.isPlayerHiding                 = false;
        this.isPlayerCoughing               = false;

        this.isSoundOn                      = true;
    
        this.hasAskedSmokeQuestion          = false;
        this.hasAskedWindowQuestion         = false;

        this.hasPlayerExitedSuccessfully    = false;


        this.isGameOver                     = false;
        this.isGameOverChangeState          = false;

        // doors----------------------
        //
        // horizontal doors
        this.doorBedroom1 = new doorClass();
        this.doorBedroom1.Y.push( 56 );
        this.doorBedroom1.X.splice( 0, 0, 23, 24, 25, 26 );

        this.doorBedroom2 = new doorClass();
        this.doorBedroom2.Y.push( 57 );
        this.doorBedroom2.X.splice( 0, 0, 71, 72, 73, 74 );

        this.doorBedroom3 = new doorClass();
        this.doorBedroom3.Y.push( 46 );
        this.doorBedroom3.X.splice( 0, 0, 66, 67, 68, 69 );

        this.doorGarageExit = new doorClass();
        this.doorGarageExit.Y.push( 29 );
        this.doorGarageExit.X.splice( 0, 0, 110, 111, 112, 113 );

        this.doorFrontExit = new doorClass();
        this.doorFrontExit.Y.push( 68 );
        this.doorFrontExit.X.splice( 0, 0, 56, 57, 58, 59, 60, 61, 62, 63 );


        // vertical doors
        this.doorBathroom1 = new doorClass();
        this.doorBathroom1.X.push( 21 );
        this.doorBathroom1.Y.splice( 0, 0, 49, 50, 51, 52 );

        this.doorHouseToGarage = new doorClass();
        this.doorHouseToGarage.X.push( 88 );
        this.doorHouseToGarage.Y.splice( 0, 0, 52, 53, 54, 55 );

        this.doorWalkinWardrobe = new doorClass();
        this.doorWalkinWardrobe.X.push( 71 );
        this.doorWalkinWardrobe.Y.splice( 0, 0, 39, 40, 41, 42 );

        this.doorEnsuite = new doorClass();
        this.doorEnsuite.X.push( 88 );
        this.doorEnsuite.Y.splice( 0, 0, 16, 17, 18, 19 );

        this.doorEnsuiteToilet = new doorClass();
        this.doorEnsuiteToilet.X.push( 94 );
        this.doorEnsuiteToilet.Y.splice( 0, 0, 24, 25, 26, 27 );



        this.timePrevious = 0.0;
        this.timePreviousBurning = 0.0;
        this.timeGameOver = 0.0; // game over time marker to check if 3 seconds has passed after game ends before changing state



    } //gameReset

}; // theGame.prototype 

//==================================================================
// Game Over
//==================================================================

var gameOver = function( game ) 
{
    this.game = game;
    this.closingMusic;
    this.timeToAskQuestion = 0.0;
    this.hasAskedQuestion = false;
}

gameOver.prototype =
{
    preload: function()
    {
        // reset the variables
        this.timeToAskQuestion = 0.0;
        this.hasAskedQuestion = false;

        // load the sounds
        this.game.load.audio( 'applause',   'assets/audio/Auditorium Applause-SoundBible.com-280911206.mp3' ); //  sound is royalty free and taken from http://soundbible.com/tags-alarm.html
        this.game.load.audio( 'ambulance',  'assets/audio/Ambulance-SoundBible.com-1013640058.mp3' ); //  sound is royalty free and taken from http://soundbible.com/tags-alarm.html
    },

    create: function()
    {
        if( health > 0 )    { this.closingMusic = this.add.audio( 'applause', 1, false ); }
        else                { this.closingMusic = this.add.audio( 'ambulance', 1, false ); }

        this.closingMusic.play();
    },

    update: function()
    {

        if( !this.hasAskedQuestion )
        {
            this.timeToAskQuestion = ( this.timeToAskQuestion == 0.0 )? this.game.time.totalElapsedSeconds() : this.timeToAskQuestion;
            var timeElapsed = this.game.time.totalElapsedSeconds();
            if( 8.0 <= ( timeElapsed - this.timeToAskQuestion ) )
            {
                if( confirm("Play again? Otherwise just hit <F5> if you change your mind after clicking 'Cancel'") )
                {
                    this.game.state.start( "TheGame" );
                }
                this.hasAskedQuestion = true;
            }
        }
    } // update

} // preload.prototype


