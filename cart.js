$(document).ready(function () {
  const cart = JSON.parse(localStorage.getItem("cart"));
  cart.forEach((e, i) => {
    $("#myBody").append(`<tr>
        <th scope="row">3</th>
        <td>${e}</td>
      </tr>`);
  });
});
