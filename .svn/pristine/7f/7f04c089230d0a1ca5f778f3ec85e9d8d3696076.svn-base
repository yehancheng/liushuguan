/**
 * Created with JetBrains WebStorm.
 * User: ifish
 * Date: 13-8-27
 * Time: 下午3:41
 * To change this template use File | Settings | File Templates.
 */
;(function($) {
    $.fn.fishrte = function(options) {
        var editors = new Array();
        this.each( function() {
            var textarea = $(this);
            var editorEl, editor;
            // enable design mode
            function enableDesignMode() {
                var content = textarea.val();
                editorEl = document.createElement('div');
                editorEl.contenteditable = true;
                editorEl.className = 'fish-editor';

                if($.trim(content) == '') {
                    //content = '<br>';
                }
                textarea.after(editorEl);
                editor = $(editorEl);
                editor.attr('contenteditable', true);
                if(textarea.attr('class')) {
                    editor.addClass(textarea.attr('class'));
                }
                editor.html(content);

                textarea.hide();
                editor.sync = function() {
                	var html = $.trim(editor.html());
                	if(editor.isEmpty()) {
                		html = '';
                	}
                    textarea.val(html);
                }
                editor.isEmpty = function() {
					return $.trim(editor.text().replace(/\r\n|\n|\r/, '')) === '';
				}
            }
            enableDesignMode();
            editors.push(editor);
        });
        return editors;
    }
})(jQuery);