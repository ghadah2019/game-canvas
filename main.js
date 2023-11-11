// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');

// const ingredientWidth = 50;
// const ingredientHeight = 50;
// const swingDistance = 100;
// const swingSpeed = 0.02;
// const moveSpeed = 2;

// const ingredients = [
//   { name: 'bread', color: 'brown' },
//   { name: 'beef', color: 'brown' },
//   { name: 'lettuce', color: 'green' },
//   { name: 'pickle', color: 'green' },
//   { name: 'cheese', color: 'yellow' },
//   { name: 'mayonnaise', color: 'white' }
// ];

// let score = 0;
// let currentIngredient = null;

// function createIngredient(name, color, x, y) {
//   return {
//     name,
//     color,
//     x,
//     y,
//     swingDirection: 1,
//     placed: false
//   };
// }

// function drawIngredient(ingredient) {
//   ctx.fillStyle = ingredient.color;
//   ctx.fillRect(ingredient.x, ingredient.y, ingredientWidth, ingredientHeight);
// }

// function placeIngredient(e) {
//   if (!currentIngredient) return;

//   const middleX = canvas.width / 2;

//   if (e.key === 'ArrowDown') { // Down arrow key
//     const middleY = currentIngredient.y + ingredientHeight / 2;

//     if (Math.abs(middleX - middleY) <= 10) {
//       score++;
//       currentIngredient.placed = true;
//     } else {
//       score--;
//     }

//     currentIngredient = null;
//   }
// }

// function animate() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   ingredients.forEach(ingredient => {
//     if (!ingredient.placed) {
//       ingredient.x += ingredient.swingDirection * swingSpeed;
//       ingredient.y += moveSpeed;

//       if (ingredient.x > canvas.width - ingredientWidth || ingredient.x < 0) {
//         ingredient.swingDirection *= -1;
//       }

//       if (ingredient.y > canvas.height) {
//         ingredient.x = Math.random() * (canvas.width - ingredientWidth);
//         ingredient.y = -ingredientHeight;
//       }
//     }

//     drawIngredient(ingredient);
//   });

//   requestAnimationFrame(animate);
// }

// function initGame() {
//   document.addEventListener('keydown', placeIngredient);

//   ingredients.forEach((ingredient, index) => {
//     ingredient.x = Math.random() * (canvas.width - ingredientWidth);
//     ingredient.y = -ingredientHeight;
//   });

//   animate();
// }

// initGame();