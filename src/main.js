const myComponent = require('./App.marko');

myComponent.renderSync({ name:'Marko' }).appendTo(document.body);
