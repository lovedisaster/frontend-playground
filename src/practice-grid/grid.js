/* 
<div class="container">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
*/

function renderGrids() {
    const container = document.createElement('div');
    container.classList.add('container');

    for (let i = 0; i < 6; i++) {
        const item = document.createElement('div');
        item.classList.add('item');
        container.appendChild(item);
    }

    document.body.appendChild(container);
}

renderGrids();