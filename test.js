$(document).ready(function(){console.log("Document is ready");var e=$("#coop-select").selectize({valueField:"id",labelField:"Name",searchField:"Name",create:!1,load:function(e,i){if(console.log("Loading data with query:",e),!e.length)return i();$.ajax({url:"https://xc2y-vol9-ivwv.n7d.xano.io/api:CFIFmuHv/organizations",type:"GET",error:function(){console.log("Error loading data"),i()},success:function(e){console.log("Data loaded successfully:",e),i(e)}})},onChange:function(e){console.log("Selected value changed:",e);var i=$("#hidden-coop");i.val(e).trigger("input"),console.log("Hidden field value set to:",i.val());var a=new Event("change",{bubbles:!0});i[0].dispatchEvent(a),console.log("Change event dispatched on hidden field"),window.Wized=window.Wized||[],window.Wized.push(i=>{i.data.v.create_project_coop_id=e,console.log("Wized variable create_project_coop_id set to:",i.data.v.create_project_coop_id)})}})[0].selectize;console.log("Triggering initial load"),e.load(function(e){$.ajax({url:"https://xc2y-vol9-ivwv.n7d.xano.io/api:CFIFmuHv/organizations",type:"GET",error:function(){console.log("Error loading initial data"),e()},success:function(i){console.log("Initial data loaded successfully:",i),e(i)}})}),$("#hidden-coop").on("input",function(){console.log("Hidden field input event triggered with value:",$(this).val())})});
