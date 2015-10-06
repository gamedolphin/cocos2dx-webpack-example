webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var resources = __webpack_require__(1);
	var HelloWorldScene = __webpack_require__(2);
	var _ = __webpack_require__(3);

	var g_resources = [];
	_.each(resources,function(item) {
	    g_resources.push(item);
	});

	window.cits = {};

	window.cits.start = function() {
	    if(!cc.sys.isNative && document.getElementById("cocosLoading")) //If referenced loading.js, please remove it
	        document.body.removeChild(document.getElementById("cocosLoading"));

	    // Pass true to enable retina display, disabled by default to improve performance
	    cc.view.enableRetina(false);
	    // Adjust viewport meta
	    cc.view.adjustViewPort(true);
	    // Setup the resolution policy and design resolution size
	    cc.view.setDesignResolutionSize(450, 800, cc.ResolutionPolicy.SHOW_ALL);
	    // The game will be resized when browser size change
	    cc.view.resizeWithBrowserSize(true);
	    //load resources
	    cc.LoaderScene.preload(g_resources, function () {
	        cc.director.runScene(new HelloWorldScene());
	    }, this);
	};


/***/ },
/* 1 */
/***/ function(module, exports) {

	var res = {
	    HelloWorld_png : "res/HelloWorld.png",
	};
	module.exports = res;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var res = __webpack_require__(1);

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

	        /////////////////////////////
	        // 3. add your codes below...
	        // add a label shows "Hello World"
	        // create and initialize a label
	        var helloLabel = new cc.LabelTTF("Hello World", "Arial", 38);
	        // position the label on the center of the screen
	        helloLabel.x = size.width / 2;
	        helloLabel.y = size.height / 2 + 200;
	        // add the label as a child to this layer
	        this.addChild(helloLabel, 5);

	        // add "HelloWorld" splash screen"
	        this.sprite = new cc.Sprite(res.HelloWorld_png);
	        this.sprite.attr({
	            x: size.width / 2,
	            y: size.height / 2
	        });
	        this.addChild(this.sprite, 0);

	        return true;
	    }
	});

	var HelloWorldScene = cc.Scene.extend({
	    onEnter:function () {
	        this._super();
	        var layer = new HelloWorldLayer();
	        this.addChild(layer);
	    }
	});

	module.exports = HelloWorldScene;


/***/ }
]);