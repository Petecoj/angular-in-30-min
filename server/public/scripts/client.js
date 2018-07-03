console.log('js is working');

let foodApp = angular.module('foodApp',[]);
foodApp.controller('WelcomeController', [function(){
    let self = this;
    self.favFoods =  ['pizza', 'Sushi', 'Gyros', 'CAKE'];

}])