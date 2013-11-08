module.exports = function(grunt) {
  'use strict';
  var pkg = grunt.file.readJSON('package.json');

  grunt.initConfig({
    libDir: "src",
    docDir: "doc",

    watch: {
      sample: {
        files: ['<%= sampleDir %>/*.jsx', '<%= libDir %>/*.jsx'],
        tasks: ['jsx:build']
      },
      test: {
        files: ['<%= testDir %>/*.jsx', '<%= libDir %>'],
        tasks: ['jsx:test']
      }
    },

    jsx: {
      buildnodesample: {
        src: ['samples/binary-support-sample.jsx'],
        add_search_path: ['<%= libDir %>'],
        dest: 'samples/',
        executable: 'node'
      },

      buildwebsample: {
        src: ['samples/binary-support-web-sample.jsx'],
        add_search_path: ['<%= libDir %>'],
        dest: 'samples/',
        executable: 'web'
      },

      doc: {
        src: ['<%= libDir %>/*.jsx'],
        add_search_path: ['<%= libDir %>'],
        dest: '<%= docDir %>',
        mode: 'doc'
      }
    }
  });

  for (var key in pkg.devDependencies) {
    if (/grunt-/.test(key)) {
      grunt.loadNpmTasks(key);
    }
  }

  grunt.registerTask('default', ['jsx']);
  grunt.registerTask('build', ['jsx:buildnodesample', 'jsx:buildwebsample']);
  grunt.registerTask('doc', ['jsx:doc']);
};
// vim: set expandtab tabstop=2 shiftwidth=2:
