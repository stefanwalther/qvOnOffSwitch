/*global module*/
module.exports = function ( grunt ) {
    'use strict';

    grunt.loadNpmTasks('grunt-contrib-copy');
    return {
        to_dist: {
            expand: true,
            cwd: '../src/',
            src: [
                '**'
                ],
            dest: '../dist/',
            flatten: false
        },
        to_dist_basicfiles: {
            expand: true,
            cwd: '../',
            src: [
                'LICENSE.md',
                'CHANGELOG.md',
                'README.md'
                ],
            dest: '../dist/',
            options: {
                force: true
            }
        }
    };
};
