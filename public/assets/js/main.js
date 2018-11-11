$(document).ready(function() {
    $('.btn-submit').click(function(){
      let burgerChoice = {
        burger_name: $('#burger-choice').val(),
        devoured: 0
      };

      $.ajax("/api/burgers", {
        type: "POST",
        data: burgerChoice
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        });
    });

    $('.devour-burger').click(function(){
      let id = $(this).data("id")
      let newBurgerState = {
        devoured: 1
      };

      console.log(newBurgerState);
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newBurgerState
      }).then(
        function() {
          console.log("changed devoured to", newBurgerState.devoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    $('.delete-burger').click(function(){
      let id = $(this).data("id");

      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
          type: "DELETE"
        }).then(
          function() {
            console.log("deleted burger", id);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
});
