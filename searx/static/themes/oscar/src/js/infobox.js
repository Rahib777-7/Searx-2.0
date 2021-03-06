/**
 * @license
 * (C) Copyright Contributors to the SearXNG project.
 * (C) Copyright Contributors to the searx project (2014 - 2021).
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

window.addEventListener('load', function() {
    // Hide infobox toggle if shrunk size already fits all content.
    $('.infobox').each(function() {
        var infobox_body = $(this).find('.infobox_body');
        var total_height = infobox_body.prop('scrollHeight') + infobox_body.find('img.infobox_part').height();
        var max_height = infobox_body.css('max-height').replace('px', '');
        if (total_height <= max_height) {
            $(this).find('.infobox_toggle').hide();
        }
    });
});
