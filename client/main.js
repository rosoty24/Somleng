import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
Template.original.rendered = function(){
	//Google Analytics Content Experiment code 
          function utmx_section(){}function utmx(){}(function(){var
          k='121544381-9',d=document,l=d.location,c=d.cookie;
          if(l.search.indexOf('utm_expid='+k)>0)return;
          function f(n){if(c){var i=c.indexOf(n+'=');if(i>-1){var j=c.
          indexOf(';',i);return escape(c.substring(i+n.length+1,j<0?c.
          length:j))}}}var x=f('__utmx'),xx=f('__utmxx'),h=l.hash;d.write(
          '<sc'+'ript src="'+'http'+(l.protocol=='https:'?'s://ssl':
          '://www')+'.google-analytics.com/ga_exp.js?'+'utmxkey='+k+
          '&utmx='+(x?x:'')+'&utmxx='+(xx?xx:'')+'&utmxtime='+new Date().
          valueOf()+(h?'&utmxhash='+escape(h.substr(1)):'')+
          '" type="text/javascript" charset="utf-8"><\/sc'+'ript>')})();
          utmx('url','A/B');
    // End of Google Analytics Content Experiment code 
}
