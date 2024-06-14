$(document).ready(function() {
    console.log('Document is ready');
    
    var $select = $('#coop-select').selectize({
        valueField: 'id',
        labelField: 'Name',
        searchField: 'Name',
        create: false,
        load: function(query, callback) {
            console.log('Loading data with query:', query);
            if (!query.length) return callback();
            $.ajax({
                url: 'https://xc2y-vol9-ivwv.n7d.xano.io/api:CFIFmuHv/organizations',
                type: 'GET',
                error: function() {
                    console.log('Error loading data');
                    callback();
                },
                success: function(res) {
                    console.log('Data loaded successfully:', res);
                    callback(res);
                }
            });
        },
        onChange: function(value) {
            console.log('Selected value changed:', value);
            // Update the hidden text field with the selected value
            var $hiddenField = $('#hidden-coop');
            $hiddenField.val(value).trigger('input');
            console.log('Hidden field value set to:', $hiddenField.val());

            // Simulate additional user input events
            var event = new Event('change', { bubbles: true });
            $hiddenField[0].dispatchEvent(event);
            console.log('Change event dispatched on hidden field');

            // Update the Wized variable
            window.Wized = window.Wized || [];
            window.Wized.push((Wized) => {
                Wized.data.v.create_project_coop_id = value;
                console.log('Wized variable create_project_coop_id set to:', Wized.data.v.create_project_coop_id);
            });
        }
    });

    // Trigger the initial load
    var selectize = $select[0].selectize;
    console.log('Triggering initial load');
    selectize.load(function(callback) {
        $.ajax({
            url: 'https://xc2y-vol9-ivwv.n7d.xano.io/api:CFIFmuHv/organizations',
            type: 'GET',
            error: function() {
                console.log('Error loading initial data');
                callback();
            },
            success: function(res) {
                console.log('Initial data loaded successfully:', res);
                callback(res);
            }
        });
    });

    // Log the current value of the hidden field when it changes
    $('#hidden-coop').on('input', function() {
        console.log('Hidden field input event triggered with value:', $(this).val());
    });
});
