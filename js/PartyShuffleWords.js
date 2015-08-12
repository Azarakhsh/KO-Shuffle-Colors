
(function($, window, document, undefined) {

    function AppViewModel() {
        this.inputText = ko.observable("this is my awesome text");
        this.initialRGB = ko.observable("100,100,100");
        this.initialFactor = ko.observable(10);

        this.createSpectrums = function() {
            self = this;
            self.words = self.inputText().split(' ');
            self.rgbBase = self.initialRGB().split(',');
            
                
        };
    }

    // Activates knockout.js
    ko.applyBindings(new AppViewModel());

})(jQuery, window, document);