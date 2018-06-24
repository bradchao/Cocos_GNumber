var Brad01Layer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();

        this.scheduleUpdate()

        return true;
    },
    update: function () {
        console.log("OK");
    }
});

var Brad01Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Brad01Layer();
        this.addChild(layer);
    }
});

