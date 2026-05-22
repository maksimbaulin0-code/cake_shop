const fs = require('fs');

function processFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Database tables and columns
  content = content.replace(/flowers_catalog/g, 'cakes_catalog');
  content = content.replace(/flowers_orders/g, 'cakes_orders');
  content = content.replace(/flower_type/g, 'cake_type');
  content = content.replace(/flower_name/g, 'cake_name');

  // UI Texts
  content = content.replace(/Renerie Ciel/g, 'Sweet Moments');
  content = content.replace(/Floral Boutique/g, 'Cake Boutique');
  content = content.replace(/Цветы/g, 'Торты');
  content = content.replace(/букета/g, 'торта');
  content = content.replace(/букет/g, 'торт');
  content = content.replace(/Букет/g, 'Торт');
  content = content.replace(/цветов/g, 'тортов');
  content = content.replace(/цветы/g, 'торты');
  content = content.replace(/Цвет торта/g, 'Вкус торта');
  
  // Replace categories (colors -> flavors)
  content = content.replace(/value="red">Красный/g, 'value="red">Шоколадный');
  content = content.replace(/value="pink">Розовый/g, 'value="pink">Ванильный');
  content = content.replace(/value="white">Белый/g, 'value="white">Сливочный');
  content = content.replace(/value="yellow">Желтый/g, 'value="yellow">Карамельный');
  content = content.replace(/value="purple">Фиолетовый/g, 'value="purple">Ягодный');
  content = content.replace(/value="orange">Оранжевый/g, 'value="orange">Морковный');
  content = content.replace(/value="mixed">Микс/g, 'value="mixed">Ассорти');

  // Replace types (flowers -> cakes)
  content = content.replace(/value="roses">Розы/g, 'value="roses">Бисквитные');
  content = content.replace(/value="peonies">Пионы/g, 'value="peonies">Муссовые');
  content = content.replace(/value="tulips">Тюльпаны/g, 'value="tulips">Чизкейки');
  content = content.replace(/value="chrysanthemums">Хризантемы/g, 'value="chrysanthemums">Наполеон');
  content = content.replace(/value="lilies">Лилии/g, 'value="lilies">Медовик');
  content = content.replace(/value="orchids">Орхидеи/g, 'value="orchids">Веганские');
  content = content.replace(/value="other">Другое/g, 'value="other">Капкейки');

  // Replace Icons
  content = content.replace(/&#10047;/g, '&#127856;'); // ✿ -> 🍰

  fs.writeFileSync(filePath, content);
  console.log('Processed', filePath);
}

processFile('init_db.js');
processFile('server.js');
processFile('frontend/index.html');
processFile('frontend/index2.html');
