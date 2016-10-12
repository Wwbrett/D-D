var fixHelper = function (e, ui) {
    ui.children().each(function () {
        $(this).width($(this).width());
    });
    return ui;
};
$("#sort tbody").sortable({
    handle: ".point",
    helper: fixHelper
}).disableSelection();