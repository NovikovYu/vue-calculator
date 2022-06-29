"use strict";

var _Vue = Vue,
    createApp = _Vue.createApp;
createApp({
  data: function data() {
    return {
      result: '',
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      operations: ['+', '-', '*', '/', '(', ')'],
      input: function input(_char) {
        this.result = this.result.toString();
        this.result += _char;
      },
      reset: function reset() {
        this.result = '';
      },
      calc: function calc() {
        this.result = eval(this.result);
      }
    };
  }
}).mount('#app');