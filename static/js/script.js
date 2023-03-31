let addBtn = document.getElementById("addBtn");
let productName = document.getElementById("productName");
let productPrice = document.getElementById("productPrice");

addBtn.addEventListener("click", async function () {
//   console.log("clicked");

//   if (productName.value == "" || productPrice.value == "")
//     return alert("Fill Values");

  const res = await fetch("/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: productName.value,
      price: productPrice.value,
    }),
  });
  console.log(await res.json());
});