var INITIALIZED = false;

var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        var sprite = new cc.Sprite.create(res.frogNormal_png);
        sprite.setAnchorPoint(cc.p(0.5,0.5));
        sprite.setPosition(cc.p(size.width/4, size.height /3.5));
       // this.addChild(sprite, 0);

 
        cc.eventManager.addListener(
            {
                event:cc.EventListener.MOUSE,
        
                onMouseDown: function (event)
                {
                    var n = Math.floor(event.getLocationX());
                    var m = Math.floor(event.getLocationY());
                    console.log(n,m);
                    if (n >= 191 && n <= 304 && m >= 40 && m <= 270){
                    cc.log ("ikeh");    
                    sprite.setVisible (false);
                    }
                }
            }, this);



        var sprite2 = new cc.Sprite.create(res.frogNormal_png);
        sprite2.setAnchorPoint(cc.p(0.5,0.5));
        sprite2.setPosition(cc.p(size.width/1.85, size.height /3.5));
       // this.addChild(sprite2, 0);

        var sprite3 = new cc.Sprite.create(res.frogNormal_png);
        sprite3.setAnchorPoint(cc.p(0.5,0.5));
        sprite3.setPosition(cc.p(size.width/1.2, size.height /3.5));
       // this.addChild(sprite3, 0);

        cc.audioEngine.playMusic(res.Main_Music, false);

       this.scheduleOnce(StopMusic, 8);
       this.scheduleOnce(PauseMusic, 5);
       this.scheduleOnce(ResumeMusic, 10);

  /*     if ( cc.sys.capabilities.hasOwnProperty( 'touches'))
       {
           cc.eventManager.addListener(
               {
                   event: cc.EventListener,TOUCH_ONE_BY_ONE,

                   onTouchBegan:function(touch, event)
                   {
                       cc.log("Touch Began: " + touch.getLocationX());
                       return true;
                   },
                   onTouchMoved:function(touch, event)
                   {
                       cc.log("Touch moved: " + touch.getLocationX());
                   },
                   onTouchEnded:function(touch, event)
                   {
                       cc.log("Touch Ended: " + touch.getLocationX());
                   },
                   onTouchCancelled:function(touch, event)
                   {
                       cc.log("Touch cancelled: " + touch.getLocationX());
                   }
               }, this);
       }*/

       if (cc.sys.capabilities.hasOwnProperty('mouse'))
       {
           cc.eventManager.addListener(
               {
                   event: cc.EventListener.MOUSE,
               
                 onMouseDown: function(event)
                {
                     if (event.getButton() == cc.EventMouse.BUTTON_LEFT)
                     {
                        cc.log("Left mouse button pressed at " + event.getLocationX());
                        // var sprite_action = cc.FadeOut.create(2);
                        // sprite.runAction(sprite_action);
                     }
                },
                
                onMouseUp: function(event)
                {
                     if (event.getButton() == cc.EventMouse.BUTTON_LEFT)
                     {
                         cc.log("Left mouse button released at " + event.getLocationX());
                     }
                },
                
                onMouseMove: function(event)
                {
                    cc.log("Mouse Moved: " + event.getLocationX());
                },
                onMouseScroll: function(event)
                {
                    cc.log("Scroll: " + event.getLocationX());
                }
           }, this);
       }

        if (cc.sys.capabilities.hasOwnProperty('keyboard'))
        {
            cc.eventManager.addListener(
                {
                    event: cc.EventListener.KEYBOARD,

                    onKeyPressed: function(key, event)
                    {
                        cc.log("Key Pressed: " + key.toString());
                    }
                }, this);
        }

      /*  if (cc.sys.capabilities.hasOwnProperty('accelerometer'))
        {
            cc.inputManager.setAccelerometerInterval( 1/10 );
            cc.inputManager.setAccelerometerEnabled(true);

            cc.eventManager.addListener(
                {
                    event: cc.EventListener.ACCELERATION,

                    callback: function(accelEvent, event)
                    {
                        cc.log('Accel X: ' + accelEvent.x + ' Y: ' + accelEvent.y + ' z: ' + accelEvent.z);
                    }
                }, this);
        }*/
       
        var menuItem1 = new cc.MenuItemFont("Play", play);
        var menuItem2 = new cc.MenuItemFont("Highscores", highscores);
        var menuItem3 = new cc.MenuItemFont("Settings", settings);
        var menuItem4 = new cc.MenuItemImage(res.CloseN_png, res.CloseS_png, imageFunc);

        var menu = new cc.Menu(menuItem1, menuItem2, menuItem3, menuItem4);
        menu.alignItemsVerticallyWithPadding(50);
        this.addChild(menu);


        return true;
    }
});

var play = function()
{
    var scene = new HelloWorldScene2();
    cc.director.pushScene(scene);
     cc.log("Play Game");
    // Fade Transition
    //cc.director.runScene(new cc.TransitionFade(3.0, scene));
    // Jump and zoom Transition 
    //cc.director.runScene(new cc.TransitionJumpZoom(3.0, scene));
    //Zoom and Flip Transition
    cc.director.runScene(new cc.TransitionZoomFlipY(3.0, scene));


};
var highscores = function()
{
    cc.log("Highscores");
};
var settings = function()
{
    cc.log("Go To Setting");
};
var imageFunc = function()
{
    cc.log("Go To Setting");
};

var StopMusic = function()
{
    cc.audioEngine.stopMusic();
};

var PauseMusic = function()
{
    cc.audioEngine.pauseMusic();
};
var ResumeMusic = function()
{
    cc.audioEngine.resumeMusic();
};
var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        if (INITIALIZED == false)
        {
            INITIALIZED = true;

            var layer = new HelloWorldLayer();
           this.addChild(layer);
        }
    }
});

