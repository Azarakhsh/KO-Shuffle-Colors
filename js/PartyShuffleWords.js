
(function($, window, document, undefined) {

    function AppViewModel() {
        this.inputText = ko.observable("this is my awesome text");
        this.initialRGB = ko.observable("100,100,100");
        this.initialFactor = ko.observable(10);
        
        this.spectrum = ko.computed(function(){
            words = this.inputText().split(' ');
            rgbBase = this.initialRGB().split(',');

            var plusminus,
                factor,
                result = [];
            
  
            for (var i = 0; i < words.length; i++) {
                result[i] = [];
                factor = this.initialFactor();
                x = Math.random()
                if (0.5>x){ 
                    factor = -this.initialFactor();
                }
                plusminus = (Math.floor( Math.random() * words.length )+1)*factor;


                for (var j = 0; j < 3; j++) {
                    if ( (+rgbBase[j] + plusminus)>= 255 || (+rgbBase[j] + plusminus)<= 0 ) {
                    
                        j=Math.min(j-1,0);//?
                        factor = -factor;
                        plusminus = (Math.floor( Math.random() * words.length )+1)*factor;
                    }else{
                        result[i][j] = (+rgbBase[j] + plusminus);
                    }

                };
            };
            return result;
            console.log(result);  
        }, this);
    }

    // Activates knockout.js
    ko.applyBindings(new AppViewModel());

})(jQuery, window, document);