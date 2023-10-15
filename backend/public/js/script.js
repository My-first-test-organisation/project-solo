const list = document.querySelector('.channel-list'); // div с классом channel-list

list.addEventListener('click', async (event) => {
  if (event.target.classList.contains('btn-add')) {
    const channel = event.target.closest('.card');
    const { id, userid } = channel.dataset;
    if (userid) {
      try {
        const result = await fetch(`/api/subscribe/channels/${id}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(),
        });

        const jsonResult = await result.json();
        if (jsonResult.message === 'success') {
          const newDiv = document.createElement('div');
          newDiv.innerText = 'Подписалсь';
          event.target.closest('div').append(newDiv); // найти div и добавить в него элемент
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      window.location.assign('/login');
    }
  }

  if (event.target.classList.contains('btn-delete')) {
    const channel = event.target.closest('.card');
    const { id, userid } = channel.dataset;
    if (userid) {
      try {
        const result = await fetch(`/api/subscribe/channels/${id}`, {
          method: 'DELETE',
        });
        const jsonResult = await result.json();
        if (jsonResult.message === 'success') {
          event.target.closest('.card').remove(); // найти className card и удалить
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  if (event.target.classList.contains('like')) {
    const like = event.target.closest('.card');
    const { id } = like.dataset;
    try {
      const result = await fetch(`/api/likes/${id}`, {
        method: 'PUT',
      });

      const jsonResult = await result.json();

      if (jsonResult.message === 'like') {
        const count = event.target.closest('div');
        count.lastElementChild.innerText = +count.lastElementChild.innerText + 1;
        event.target.setAttribute('src', 'img/like-full.png');
      }
      if (jsonResult.message === 'dislike') {
        const count = event.target.closest('div');
        count.lastElementChild.innerText = +count.lastElementChild.innerText - 1;
        event.target.setAttribute('src', 'img/like-empty.png');
      }
    } catch (error) {
      console.log(error);
    }
  }
});
