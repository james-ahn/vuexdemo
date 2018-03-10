import Vue from 'vue'

Vue.filter('dateFormat', function (value) {
  return value.substring(0,4) + '-' + value.substring(4,5) + '-' + value.substring(5,6);
});

