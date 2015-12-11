Classes.WelcomeView = Backbone.View.extend({
    
    initialize: function(){
        this.winh = window.innerHeight-70;
    },
    
    events: {
        "click .choicelang" : "chooseLang",
        "click .choicemagic" : "chooseMagic",
        "click .choicemagicreal" : "chooseMagicReal"
    },
    
    ballRandomness: 0,
    
    getBallRandomness: function(){
        var sum = 0;
        for (b in this.balls) {
            sum += this.balls[b].getRandomness();
        }
        this.ballRandomness = ((sum/this.balls.length)/((Tools.general.w()+Tools.general.h())/2))*100;
        return this.ballRandomness;
    },
    
    balls: [],
    
    ballparams: [],
    
    addBalls: function(container){
        var that = this;
        for (i=0;i<30;i++) {
            var hp = i%2==0 ? 2 : Tools.general.w()-Tools.general.max;
            var sp = i%2==0 ? Tools.mathsAndRandom.rfi(5,15) : Tools.mathsAndRandom.rfi(-15,-5);
            var params = {number:i, hpos:hp, vpos:2, speed: [sp, 0]};
            this.ballparams.push(params);
        }
        window.counter = 0;
        window.ballInterval = setInterval(function(){
            console.log(counter);
            var ball = new Classes.Spot(that.ballparams[counter]);
            that.balls.push(ball);
            ball.create().addToDom(container).move();
            if (++counter === 30) {
                window.clearInterval(window.ballInterval);
            }
        }, 200);
        setInterval(function(){
            $("#randomness").html(that.getBallRandomness().toFixed(0));
        },100);
    },
    
    moveBalls: function(){
        var that = this;
        for (a in this.balls) {
            this.balls[a].move();
        }              
    },
    
    dropBalls: function(){
        var that = this;
        for (a in this.balls) {
            this.balls[a].drop();
        }             
    },
    
    sortBalls: function(){
        var that = this;
        for (a in this.balls) {
            this.balls[a].stop();
            this.balls[a].moveToSortedPlace();
        }
    },
    
    render: function(container){
        if (container) {container.html($(this.el).html(this.template(this.model.toJSON())));}
        else {$(this.el).html(this.template(this.model.toJSON()));}
        return this;
    },
    
    curPhrase: "magic",
    
    curY: "yes",
    
    curN: "no",
    
    changeOwnLang: function(){
        var that = this;
        $("#welcome-one").animate({"opacity": 0}, 500).promise().done(function(){$("#welcome-one").html(that.model.attributes[that.curPhrase][Tools.general.getCurrentLanguage()]).animate({"opacity": 1}, 500);});
        $("#choices").animate({"opacity": 0}, 500).promise().done(function(){
            $("#choicea").html(that.model.attributes[that.curY][Tools.general.getCurrentLanguage()]);
            $("#choiceb").html(that.model.attributes[that.curN][Tools.general.getCurrentLanguage()]);
            if (that.curN != "a" && that.curY != "a") {$("#choices").animate({"opacity": 1}, 500);}
        });
    },
    
    chooseLang: function(event){
        //this.addBalls(document.getElementById("magicplace"));
        var langs = {"A": "FR", "B" : "EN"};
        Tools.general.setLanguage(langs[$(event.target).data("choice")]);
        Tools.general.changeLanguage();
        $(".choicelang").removeClass("choicelang").addClass("choicemagic");
    },
    
    chooseMagic: function(event){
        var that = this;
        var options = {
            "A": (function(){
                that.curPhrase = "enjoy";
                that.curY = "a";
                that.curN = "a";
                that.changeOwnLang();
            }), 
            "B": (function(){
                that.sortBalls(); 
                that.curPhrase = "sorted";
                that.curY = "ty";
                that.curN = "ohno";
                that.changeOwnLang();
            })
        };
        options[$(event.target).data("choice")]();
        $(".choicemagic").removeClass("choicemagic").addClass("choicemagicreal");
    },
    
    chooseMagicReal: function(event){
        var that = this;
        var options = {
            "A": (function(){
                that.curPhrase = "welcome";
                that.curY = "a";
                that.curN = "a";
                that.changeOwnLang();
            }), 
            "B": (function(){
                that.moveBalls(); 
                that.curPhrase = "magic";
                that.curY = "yes";
                that.curN = "no";
                that.changeOwnLang();
                $(".choicemagicreal").removeClass("choicemagicreal").addClass("choicemagic");
            })
        };
        options[$(event.target).data("choice")]();
    }
    
});