Classes.Spot = function(params){
    
        var spot = {
        
            initialize: function(){ 
                this.color = Tools.color.randcolor();
                this.size = Tools.mathsAndRandom.rfi(Tools.general.min,Tools.general.max);
                this.referenceFrame;
                this.sortedPos = [0,0];
                this.sortedSize = (Tools.general.min+Tools.general.max)/2;
                this.acceleration = [0,3];
                this.speed = [0,0];
                this.center = [Tools.mathsAndRandom.rfi((this.size/2),Tools.general.w()-(this.size/2)), Tools.mathsAndRandom.rfi((this.size/2),Tools.general.h()-(this.size/2))];
                this.hpos = this.center[0] + (this.size/2);
                this.vpos = this.center[1] + (this.size/2);
                this.opacity = Tools.mathsAndRandom.rfi(2,9);
                this.moving = false;
                this.randomness = 0;
            },
            
            getRandomness: function(){
                return this.randomness;
            },
            
            createADot: function(n, colo, mt, ml, op, si){
                
                var spot = document.createElement("div");
                
                spot.id = "ci"+n;
                spot.className = "circle";
                spot.style.backgroundColor = colo;
                spot.style.marginTop = mt+"px";
                spot.style.marginLeft = ml+"px";
                spot.style.opacity = "0."+op;
                spot.style.height = si+"px";
                spot.style.width = si+"px";
                //spot.onmouseover = function(){over("ci"+numb, 1);};
                //spot.onmouseout = function(){over("ci"+numb, 0);};
                
                return spot;
            },
            
            create: function(){
                this.element = this.createADot(this.number, this.color, this.vpos, this.hpos, this.opacity, this.size);
                this.findSortedPlace();
                return this;
            },
            
            addToDom: function(container){
                $(container).append(this.element);
                return this;
            },
            
            moveToSortedPlace: function(){
                var that = this;
                this.findSortedPlace();
                $(this.element).animate({marginLeft:this.sortedPos[0]+"px", marginTop:this.sortedPos[1]+"px", width:this.sortedSize+"px", height:this.sortedSize+"px"},1000).promise().done(function(){
                    that.hpos = that.sortedPos[0];
                    that.vpos = that.sortedPos[1];
                    that.randomness = 0;
                });
            },
            
            findSortedPlace: function(){
                var gr = Tools.color.getgreen(this.element);
                this.sortedPos[0] = ( ((Tools.general.w()-Tools.general.max)/255)*parseInt(gr[1]) );
                this.sortedPos[1] = ( ((Tools.general.h()-Tools.general.max)/255)*parseInt(gr[0]) );
                this.sortedSize = ( ((Tools.general.max-Tools.general.min)/2)*(parseInt(gr[2])/127) )+Tools.general.min;
            },
            
            sendSomewhere: function(){
                /*
                var taw = Tools.mathsAndRandom.rfi(0,w-max);
                var tah = Tools.mathsAndRandom.rfi(0,h-max);
                this.hpos = taw;
                this.vpos = tah;
                $(this.element).animate({marginLeft:taw+"px", marginTop:tah+"px"},1000);
                */
            },
            
            drop: function(){
                //$(this.element).animate({marginTop: ((h-this.size)+"px")}, (((h-this.vpos)/h)*2000));
                //this.vpos = h-this.size;
                this.acceleration = [0,3];
                if (!this.moving) {this.move();}
            },
            
            updatePos: function(){
                if (this.hpos <= 0 || (this.hpos+this.size) >= Tools.general.w()) {this.speed[0] *= -0.98;} else {this.speed[0] += this.acceleration[0];}
                if (this.vpos <= 0) {this.speed[1] *= -0.98;} else if ((this.vpos+this.size) >= Tools.general.h()) {this.vpos = (Tools.general.h()-this.size); this.speed[1] *= -0.96;} else {this.speed[1] += this.acceleration[1];}
                //if (this.vpos <= 0 || (this.vpos+this.size) >= Tools.general.h()) {this.speed[1] *= -0.98;} else {this.speed[1] += this.acceleration[1];}
                
                this.hpos += this.speed[0];
                this.vpos += this.speed[1];
                this.center = [(this.hpos-(this.size/2)), (this.vpos-(this.size/2))];
                this.randomness = Math.sqrt(((this.hpos-this.sortedPos[0])*(this.hpos-this.sortedPos[0]))+((this.vpos-this.sortedPos[1])*(this.vpos-this.sortedPos[1])));
            },
            
            move: function(){
                this.moving = true;
                var that = this;
                this.timer = setInterval(function(){
                    that.updatePos();
                    that.element.style.marginTop = (that.vpos+"px");
                    that.element.style.marginLeft = (that.hpos+"px");
                    //$(that.element).css({"margin-top" : (that.vpos+"px"), "margin-left" : (that.hpos+"px")});
                },40);
            },
            
            stop: function(){
                this.moving = false;
                clearInterval(this.timer);
            }
            
        };
        spot.initialize();
        for (p in params) {spot[p] = params[p];}
        return spot;
    
    };