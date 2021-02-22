var INITIALIZED_2 = false;
var  flag = 0;
var HelloWorldLayer2 = cc.Layer.extend({
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

        var sprite0 = new cc.Sprite.create(res.gbackground_png);
        sprite0.setAnchorPoint(cc.p(0,0));
        // sprite0.scaleX=Size.width/scrSize.width;
        // sprite0.scaleY=Size.height/scrSize.height;
        this.addChild(sprite0, 0);
        

        var sprite = new cc.Sprite.create(res.frogNormal_png);
        sprite.setAnchorPoint(cc.p(0.5,0.5));
        sprite.setPosition(cc.p(size.width/4, size.height /3.5));
        this.addChild(sprite, 0);

        var sprite2 = new cc.Sprite.create(res.frogNormal_png);
        sprite2.setAnchorPoint(cc.p(0.5,0.5));
        sprite2.setPosition(cc.p(size.width/1.85, size.height /3.5));
        this.addChild(sprite2, 0);

        var sprite3 = new cc.Sprite.create(res.frogNormal_png);
        sprite3.setAnchorPoint(cc.p(0.5,0.5));
        sprite3.setPosition(cc.p(size.width/1.2, size.height /3.5));
        this.addChild(sprite3, 0);

        var sprite4 = new cc.Sprite.create(res.frogNormal_png);
        sprite4.setAnchorPoint(cc.p(0.5,1.9));
        sprite4.setPosition(cc.p(size.width/4, size.height /3.5));
        this.addChild(sprite4, 0);

        var sprite5 = new cc.Sprite.create(res.frogNormal_png);
        sprite5.setAnchorPoint(cc.p(0.5,1.9));
        sprite5.setPosition(cc.p(size.width/1.85, size.height /3.5));
        this.addChild(sprite5, 0);

        var sprite6 = new cc.Sprite.create(res.frogNormal_png);
        sprite6.setAnchorPoint(cc.p(0.5,1.9));
        sprite6.setPosition(cc.p(size.width/1.2, size.height /3.5));
        this.addChild(sprite6, 0);

        var spriteh = new cc.Sprite.create(res.frogh_png);
        spriteh.setAnchorPoint(cc.p(0.3,-0.1));
        spriteh.setPosition(cc.p(size.width/4, size.height /3.5));
        this.addChild(spriteh, 0);

        var sprite6h = new cc.Sprite.create(res.frogh_png);
        sprite6h.setAnchorPoint(cc.p(0.3,2.3));
        sprite6h.setPosition(cc.p(size.width/1.2, size.height /3.5));
        this.addChild(sprite6h, 0);

        var sprite2h = new cc.Sprite.create(res.frogh_png);
        sprite2h.setAnchorPoint(cc.p(0.3,-0.1));
        sprite2h.setPosition(cc.p(size.width/1.85, size.height /3.5));
        this.addChild(sprite2h, 0);

        
        cc.eventManager.addListener(
            {
                event:cc.EventListener.MOUSE,
        
                onMouseDown: function (event)
                {
                    
                    var n = Math.floor(event.getLocationX());
                    var m = Math.floor(event.getLocationY());
                    console.log(n,m);
                    flag++;

                    if (n >= 191 && n <= 300 && m >= 145 && m <= 248){
                       // cc.log ("ikeh");    
                        spriteh.setVisible (false);

                        cc.log(flag);
                        if(flag>=2){
                           sprite.setVisible (false);
                         
                             flag = 0;
                             cc.log(flag); 
                            }  
                        }
                    if (n >= 500 && n <= 607 && m >= 145 && m <= 218){
                        cc.log (n,m);    
                        sprite2h.setVisible (false);

                        if(flag>=2){
                            sprite2.setVisible (false);

                            flag = 0;
                          //  cc.log("1st if"); 
                             } 
                        }
                    if (n >= 800 && n <= 907 && m >= 145 && m <= 218){
                        cc.log (n,m);    
                         sprite3.setVisible (false);
                         flag = 0;
                         }

                     if (n >= 191 && n <= 300 && m >= 12 && m <= 86){
                        cc.log ("ikeh");    
                        sprite4.setVisible (false);
                        flag = 0;
                    }
                    if (n >= 500 && n <= 607 && m >= 12 && m <= 86){
                        cc.log (n,m);    
                        sprite5.setVisible (false);
                        flag = 0;
                        }
                    if (n >= 800 && n <= 907 && m >= 12 && m <= 86){
                        cc.log (n,m);    
                         sprite6h.setVisible (false);

                         if(flag>=2){
                            sprite6.setVisible (false);
                          //  cc.log("1st if"); 
                            flag = 0;
                             } 
                         }
                     
                    
                }
            }, this);

       
    


        // cc.audioEngine.playMusic(res.Main_Music, false);

        this.scheduleOnce(StopMusic, 0);
    //    this.scheduleOnce(PauseMusic, 5);
    //    this.scheduleOnce(ResumeMusic, 10);

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
                    //cc.log("Mouse Moved: " + event.getLocationX());
                },
                onMouseScroll: function(event)
                {
                    //cc.log("Scroll: " + event.getLocationX());
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
                        //cc.log("Key Pressed: " + key.toString());
                    }
                }, this);
        }

        if (cc.sys.capabilities.hasOwnProperty('accelerometer'))
        {
            cc.inputManager.setAccelerometerInterval( 1/10 );
            cc.inputManager.setAccelerometerEnabled(true);

            cc.eventManager.addListener(
                {
                    event: cc.EventListener.ACCELERATION,

                    callback: function(accelEvent, event)
                    {
                       // cc.log('Accel X: ' + accelEvent.x + ' Y: ' + accelEvent.y + ' z: ' + accelEvent.z);
                    }
                }, this);
        }

        var menuItem1 = new cc.MenuItemFont("Back", back);
        var menu = new cc.Menu(menuItem1);
        menu.alignItemsVerticallyWithPadding(50);
        menu.setAnchorPoint(cc.p(0.5,0.8));
        menu.setPosition(cc.p(size.width/4.8, size.height /1.1));
        this.addChild(menu);

        
        
        return true;
    }
});

var back = function()
{
    INITIALIZED_2 = false;
    cc.director.popScene();
};


var StopMusic = function()
{
    cc.audioEngine.stopMusic();
};

/*var PauseMusic = function()
{
    cc.audioEngine.pauseMusic();
};
var ResumeMusic = function()
{
    cc.audioEngine.resumeMusic();
};*/
var HelloWorldScene2 = cc.Scene.extend({
    onEnter:function () {
        this._super();
        if (INITIALIZED_2 == false)
        {
            INITIALIZED_2 = true;

            var layer = new HelloWorldLayer2();
           this.addChild(layer);
        }
    }
});

