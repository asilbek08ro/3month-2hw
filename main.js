function getData() {
    const id = document.getElementById('userIdInput').value;

    if (id < 1 || id > 10) {
      alert('Введите число от 1 до 10');
      return;
    }

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Username:</strong> ${data.username}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
        `;
      })
      .catch(error => {
        console.error('Произошла ошибка:', error);
      });
  }