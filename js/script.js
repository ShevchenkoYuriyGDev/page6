document.getElementById("fetchData").addEventListener("click", () => {
    fetch("https://randomuser.me/api/?results=5")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Помилка завантаження даних!");
        }
        return response.json();
      })
      .then((data) => {
        const users = data.results;
        const userContainer = document.getElementById("userContainer");
        userContainer.innerHTML = "";
  
        users.forEach((user) => {
          const userCard = document.createElement("div");
          userCard.classList.add("user-card");
  
          const userImage = document.createElement("img");
          userImage.src = user.picture.large;
          userImage.alt = `${user.name.first} ${user.name.last}`;
          userCard.appendChild(userImage);
  
          const userInfo = document.createElement("div");
          userInfo.innerHTML = `
            <p><strong>Ім'я:</strong> ${user.name.first} ${user.name.last}</p>
            <p><strong>Місто:</strong> ${user.location.city}</p>
            <p><strong>Мобільний:</strong> ${user.cell}</p>
            <p><strong>Телефон:</strong> ${user.phone}</p>
          `;
          userCard.appendChild(userInfo);
  
          userContainer.appendChild(userCard);
        });
      })
      .catch((error) => {
        console.error("Сталася помилка:", error);
        alert("Не вдалося завантажити дані. Спробуйте ще раз.");
      });
  });