fetch('data/players.json')
  .then(response => response.json())
  .then(players => {
    const tbody = document.querySelector('#leaderboard tbody');
    players.forEach(player => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${player.nickname}</td>
        <td>${player.kd.toFixed(2)}</td>
        <td>${player.headshot}%</td>
        <td>${player.mvp}</td>
        <td>${player.wins}</td>
        <td>${player.losses}</td>
      `;
      tbody.appendChild(tr);
    });
  })
  .catch(err => console.error('Ошибка загрузки данных игроков:', err));

