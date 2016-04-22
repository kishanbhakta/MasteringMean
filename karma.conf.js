//Define the Protractor configuration
module.exports = function(config) {
  config.set({
    //The test framework to use
    frameworks: ['jasmine'],
    //The files to load
    files: [
      'public/lib/angular/angular.js',
      'public/lib/angular-resource/angular-resource.js',
      'public/lib/angular-route/angular-route.js',
      'public/lib/angular-mocks/angular-mocks.js',
      'public/application.js',
      'public/*[!lib]*/*.js',
      'public/*[!lib]*/*[!tests]*/*.js',
      'public/*[!lib]*/tests/unit/*.js'
    ],
    //The reporter to use
    reporters: ['progress'],
    //The browers to run
    browsers: ['PhantomJS'],
    //Test timeout
    captureTimeout: 60000,
    //Should karma run once
    singleRun: true
  });
};