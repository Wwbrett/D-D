$(document).ready(function () {
    var table = $('#example').DataTable({
        order: [[1, 'asc']],
        drawCallback: function (settings) {
            var api = this.api();

            $('.editable', api.table().body())
                .editable()
                .off('hidden')
                .on('hidden', function (e, reason) {
                    if (reason === 'save') {
                        $(this).closest('td').attr('data-order', $(this).text());
                        table.row($(this).closest('tr')).invalidate().draw(false);
                    }
                });
        }
    });

});