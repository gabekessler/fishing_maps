$(document).ready(function(){
    $('#get_current_location').click(function(event){
      event.preventDefault();
      window.mapControl.getCurrent();
    });

    $('#toggle_map').click(function(event){
      event.preventDefault();
      map = document.getElementById('map_area');
      console.log(map);
      if($(map).hasClass('hidden')){
        $(map).removeClass('hidden');
      }else{
        $(map).addClass('hidden');
      }
    });
});
