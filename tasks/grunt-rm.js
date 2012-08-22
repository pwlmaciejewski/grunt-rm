// Removes files.
module.exports = function (grunt) {
  grunt.registerMultiTask('rm', 'Removes specified files', function () {
    var fs = require('fs');
    var path = require('path');

    grunt.log.subhead('Removing ' + this.target + '...');

    grunt.file.expandFiles(this.data).forEach(function (src) {
      if (!path.existsSync(src)) {
        return;
      }
      fs.unlinkSync(src);
      grunt.log.ok('File removed: ' + src);
    });
  });
};