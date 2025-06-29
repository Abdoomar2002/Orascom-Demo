jQuery( document ).ready(function() {
  jQuery.each(jQuery('.chosen-single').parent().prev().find('.sf-option-active'), function(i, el){
    let original = jQuery(el).html().split("-").pop();
    jQuery(el).parent().next().find('.chosen-single').html(original);
  })
  // let original = jQuery('.chosen-single').html().split("-").pop();
  // jQuery('.chosen-single').html(original);
});

jQuery('.sf-input-select').on('chosen:showing_dropdown', function(evt, params) {
  jQuery.each(jQuery('.chosen-results').find('li'), function(i, el){
    let original = jQuery(el).html().split("-").pop();
    jQuery(el).html(original);
  })
});

jQuery('.sf-input-select').on('change', function(evt, params) {
  if(params.selected != ""){
    let original = params.selected.split("-").pop();
    jQuery(evt.target).next().find('.chosen-single').html(original);
  }
  else{
    jQuery(evt.target).next().find('.chosen-single').html(jQuery(jQuery('.chosen-results').find('li')[0]).html());
  }
});
