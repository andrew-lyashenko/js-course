(function (factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery", "jquery.validate"], factory)
  } else {
    factory(jQuery)
  }
}(function ($) {

  "use strict";

  function BetterForm(options) {
    this.options = $.extend({
      dispatchName: null,
      remote: true
    }, options);

    this.init();
  }

  BetterForm.prototype.init = function(){
    console.log('BetterForm:init');
  };

  BetterForm.prototype.reset = function(){

  };

  BetterForm.prototype.makeValidator = function(){

  };

  BetterForm.prototype.makeRemoteForm = function(){

  };

  BetterForm.prototype.focus = function(){

  };

  $.fn.betterForm = function(options){
    return this.each(function(){
      var $this    = $(this)
        , instance = $this.data('betterForm');

      if (!instance) {
        $this.data('betterForm', new BetterForm(options, this));
      }

      if (typeof options == 'string') {
        typeof instance[options] == 'function'
        ? instance[options].call(instance)
        : console.log('BetterForm unknow method: ' + options);
      }
    });
  };
}));
