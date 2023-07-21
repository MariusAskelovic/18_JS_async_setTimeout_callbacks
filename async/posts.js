'use strict';
console.log('posts.js file was loaded');

// taikomes
const appEl = document.getElementById('app');

const posts = [
  { title: 'Post One', body: 'This is post One body' },
  { title: 'Post Two', body: 'This is post Two body' },
];

// gauti postus imituojam kad truka 1.5sek juos gauti
function getPosts() {
  setTimeout(() => {
    console.log('Postai nupiesti');
    appEl.innerHTML = '';
    posts.forEach(({ title, body }) => {
      const pEl = document.createElement('p');
      pEl.textContent = `Title: ${title}. ${body}`;
      appEl.append(pEl);
    });
  }, 1500);
}

function printPostTitles() {
  posts.forEach((pObj) => {
    console.log('pObj.title ===', pObj.title);
  });
}

// create post funkcija kuti ideda nauja posta i pos masyva
function createPost(newPostObj, callback) {
  //   return new Promise((resolve, reject) => {
  setTimeout(() => {
    posts.push(newPostObj);
    console.log('created Post');
    callback();
  }, 2500);
  //   });
}
// debugger;
// 1 iskviesti getPosts tik po to kai sukurem posta su createPost su callback fn
const thirdPost = { title: 'Post Three', body: 'This is post Three body' };
createPost(thirdPost, getPosts);
createPost(thirdPost, printPostTitles);

// getPosts();

// 2 iskviesti getPosts tik po to kai sukurem posta su createPost su Promise
// createPost().getPosts();
