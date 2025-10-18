// === SNOWFALL EFFECT ===
document.addEventListener("DOMContentLoaded", function () {
  const snowContainer = document.createElement("div");
  snowContainer.classList.add("snow-container");
  document.body.appendChild(snowContainer);

  for (let i = 0; i < 50; i++) {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.style.left = Math.random() * 100 + "vw";
    snowflake.style.animationDuration = 5 + Math.random() * 10 + "s";
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = 12 + Math.random() * 16 + "px";
    snowflake.innerText = "❄";
    snowContainer.appendChild(snowflake);
  }
});
