// Click functionalities
$("nav #nav_bar_options #home").click(function () {
  $("html, body").animate({
    scrollTop: 0,
  });
});

$("nav #nav_bar_options #contact-us").click(function () {
  $("html, body").animate({
    scrollTop: 2800,
  });
});

$("nav img").click(function () {
  $("html, body").animate({
    scrollTop: 0,
  });
});

$("nav #nav_bar_options #menu").click(function () {
  $("html, body").animate({
    scrollTop: 750,
  });
});

$(
  "nav #nav_bar_options #cart, section#menu .cart-button-area .cart-button"
).click(function () {
  $("html, body").animate({
    scrollTop: 1520,
  });
});

$("nav #nav_bar_options #about-us").click(function () {
  $("html, body").animate({
    scrollTop: 2300,
  });
});

$("section#home #container button").click(function () {
  $("html, body").animate({
    scrollTop: 770,
  });
});

//hover functionalities
$(
  "nav #nav_bar_options .opts, section#home #container button , section#menu .cart-button-area .cart-button, section#cart .wrapper .order-now"
).mouseenter(function () {
  $(this).css({ transform: "scale(1.2)", "transition-duration": "300ms" });
});

$(
  "nav #nav_bar_options .opts, section#home #container button, section#menu .cart-button-area .cart-button, section#cart .wrapper .order-now"
).mouseleave(function () {
  $(this).css({ transform: "scale(1)", "transition-duration": "300ms" });
});

$(
  "section#menu .menu-container .item-box .reset-btn-area .reset-btn"
).mouseenter(function () {
  $(this).css({ transform: "scale(1.1)", "transition-duration": "300ms" });
});

$(
  "section#menu .menu-container .item-box .reset-btn-area .reset-btn"
).mouseleave(function () {
  $(this).css({ transform: "scale(1)", "transition-duration": "300ms" });
});

$("nav img").mouseenter(function () {
  $(this).css({ transform: "scale(1.1)", "transition-duration": "300ms" });
});

$("nav img").mouseleave(function () {
  $(this).css({ transform: "scale(1)", "transition-duration": "300ms" });
});

//navbar scroll
$(document).ready(function () {
  var scrolled = $(document).scrollTop();
  if (scrolled > 50) {
    $("nav").css({
      "background-color": "#494949",
      "transition-duration": "400ms",
    });
  }
  $(document).scroll(function () {
    scrolled = $(document).scrollTop();
    if (scrolled > 50) {
      $("nav").css({
        "background-color": "#494949",
        "transition-duration": "400ms",
      });
    } else {
      $("nav").css({
        "background-color": "transparent",
        "transition-duration": "400ms",
      });
    }
  });
});

// menu functionalities
$(".button-area").on("click", "button", function () {
  // Find the nearest 'value' element within the same .button-area
  var valueElement = $(this).siblings("h6.value");

  if ($(this).text() == "+") {
    // Increment the value when the 'plus' button is clicked
    var currentValue = parseInt(valueElement.text());
    valueElement.text(currentValue + 1);
  } else if ($(this).text() == "-") {
    // Decrement the value when the 'minus' button is clicked
    var currentValue = parseInt(valueElement.text());
    if (currentValue > 0) {
      valueElement.text(currentValue - 1);
    }
  }
});

//functionality to add items to cart
$(".button-area").on("click", "button", function () {
  var operation = $(this).text();
  var curritem = $(this).closest(".item");
  var currqty = curritem.find(".button-area h6").text();
  var currname = curritem.find(".item-name").text();
  var tempId = currname.split(" ")[0];
  var currprice = curritem.find(".price").text();

  //remove element from cart if qualtity is made 0
  if (currqty == 0) {
    $("#" + tempId + ".order-item").remove();
  } else if (currqty > 1 || operation == "-") {
    $("#" + tempId + ".order-item")
      .find(".qty")
      .text(currqty);
    $("#" + tempId + ".order-item")
      .find(".amount")
      .text(currqty * currprice);
  }

  //create a new element if it doesn't exist already
  else if (operation == "+") {
    var newitem = document.createElement("li");
    newitem.classList.add("order-item");
    newitem.classList.add("otheritems");

    var sno = document.createElement("div");
    sno.classList.add("s-no");
    newitem.appendChild(sno);

    var name = document.createElement("div");
    name.innerHTML = currname;
    name.classList.add("it-name");
    newitem.id = tempId;
    newitem.appendChild(name);

    var price = document.createElement("div");
    price.innerHTML = currprice;
    price.classList.add("it-price");
    newitem.appendChild(price);

    var itqty = document.createElement("div");
    itqty.innerHTML = currqty;
    itqty.classList.add("qty");
    newitem.appendChild(itqty);

    var amount = document.createElement("div");
    amount.innerHTML = currprice * currqty;
    amount.classList.add("amount");
    newitem.appendChild(amount);

    $("section#cart .container .order-items").append(newitem);
  }

  updatecart(); //function to opdate sno and totalamount
});

//function to update totalamount and serial no
function updatecart() {
  let fullList = $(".order-items .order-item");
  let totalAm = 0;
  //loop to set serial number and calculate total amount
  for (let i = 1; i < fullList.length; i++) {
    var temp = fullList[i];
    $(temp).find(".s-no").text(i);
    totalAm += parseFloat($(temp).find(".amount").text());
  }

  //set total amount value
  $("section#cart .wrapper .middle-container .totalAm-container .Sum").text(
    totalAm
  );
}

//click reset button
$(".item-box").on("click", ".reset-btn-area .reset-btn", function () {
  var tempEl = $(this).closest(".item-box").find(".items .button-area h6");
  tempEl.text(0);

  var tempVar = $(this).closest(".item-box").find(".items .item .item-name");

  for (let i = 0; i < tempVar.length; i++) {
    var tempN = tempVar[i].innerHTML.split(" ")[0];
    $(
      "section#cart .wrapper .middle-container .container .order-items .order-item#" +
        tempN
    ).remove();
  }
  updatecart();
});

//order placed alert
$("section#cart .wrapper .order-button .order-now").click(function () {
  var lengthvar = $(
    "section#cart .wrapper .middle-container .container .order-items .order-item"
  ).length;
  console.log(lengthvar);
  if (lengthvar == 1) {
    alert("Please select atleast 1 item to order");
  } else {
    alert("Your order has been placed");
    $(
      "section#cart .wrapper .middle-container .container .order-items .otheritems"
    ).remove();
    $("section#cart .wrapper .middle-container .totalAm-container .Sum").text(
      0
    );
    $(
      "section#menu .menu-container .item-box .items .item .button-area .value"
    ).text(0);
  }
});

$("nav #nav_bar_options #profile-button").click(function () {
  alert("This feature is coming soon");
});
