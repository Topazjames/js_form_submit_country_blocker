<script>

  var blocked_countries = ["Russia", "China", "Ukraine", "Iran"];
  
  $('form').on('submit', function(e){
        e.preventDefault();
        
        fetch('https://ipapi.co/json/')
          .then(function(response) {
            return response.json();
          })
          .then(function(data) {
              var country = data.country_name;
              
              if (jQuery.inArray(country, blocked_countries) !== -1) {
                  // BLOCKED
                  
              } else {
                  // NOT BLOCKED
                  e.currentTarget.submit();
              }
          });
    });
  
</script>
