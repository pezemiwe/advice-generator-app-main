let btn = document.querySelector(".advice__button");

btn.addEventListener("click", function () {
  fetch("	https://api.adviceslip.com/advice")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Something went wrong");
      }
    })
    .then((data) => {
      let advice = data.slip.advice;
      let adviceNo = data.slip.id;
      let adviceContainer = document.querySelector(".advice__text");
      let adviceNumber = document.querySelector(".advice__number");
      adviceContainer.innerHTML = advice;
      adviceNumber.innerHTML = adviceNo;
    })
    .catch((error) => {
      console.log(error);
    });
});
