axios.get('https://jsonplaceholder.typicode.com/users')
  .then(function (response) {
    const users = response.data; 
    const container = document.querySelector('.users-list');
    let html = '';

    users.forEach(function (user) {
      html += `
        <div class="user-card">
          <h3>${user.name}</h3>
          <p>📧 ${user.email}</p>
          <p>📱 ${user.phone}</p>
        </div>
      `;
    });

    container.innerHTML = html;
  })
  .catch(function (error) {
    console.log('Ошибка:', error);
  });
