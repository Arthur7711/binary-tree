// https://jrsinclair.com/articles/12019/functional-js-traversing-trees-with-recursive-reduce/

const menu = {
  parentID: 0,
  id: 1,
  type: "title",
  text: "Menu",
  children: [
    { parentID: 1, id: 11, type: "title", text: "Works of George Macdonald" },
    {
      parentID: 1,
      id: 12,
      type: "link",
      href: "/books",
      text: "Books",
      children: [
        {
          parentID: 12,
          id: 101,
          type: "link",
          href: "/books/sir-gibbie",
          text: "Sir Gibbie",
        },
        {
          parentID: 12,
          id: 102,
          type: "link",
          href: "/books/at-the-back-of-the-north-wind",
          text: "At the Back of the North Wind",
        },
        {
          parentID: 12,
          id: 103,
          type: "link",
          href: "/books/the-princess-and-the-goblin",
          text: "The Princess and the Goblin",
        },
      ],
    },
    { parentID: 1, id: 13, type: "link", href: "/poetry", text: "Poems" },
    {
      parentID: 1,
      id: 14,
      type: "link",
      href: "/essays",
      text: "Essays",
      children: [
        {
          parentID: 14,
          id: 201,
          type: "link",
          href: "/essays/the-fantastic-imagination",
          text: "The Fantastic Imagination",
        },
        {
          parentID: 14,
          id: 202,
          type: "link",
          href: "/essays/the-new-name",
          text: "The New Name",
        },
      ],
    },
    { parentID: 1, id: 15, type: "title", text: "Our Community" },
    {
      parentID: 1,
      id: 16,
      type: "link",
      href: "/about",
      text: "About us",
      children: [
        {
          parentID: 16,
          id: 301,
          type: "link",
          href: "/about/membership",
          text: "Community membership",
        },
        {
          parentID: 16,
          id: 302,
          type: "title",
          href: "/about/sponsorship",
          text: "Community sponsorship",
          children: [
            {
              parentID: 302,
              id: 3001,
              type: "link",
              href: "/about/sponsorship/patreon",
              text: "Our Patreon",
            },
            {
              parentID: 302,
              id: 3002,
              type: "link",
              href: "/about/sponsorship/endowments",
              text: "Endowments",
            },
          ],
        },
      ],
    },
    { parentID: 1, id: 17, type: "link", href: "/forum", text: "Forum" },
    {
      parentID: 1,
      id: 18,
      type: "link",
      href: "https://www.facebook.com/groups/GeorgeMacDonaldCommunity/",
      text: "Facebook Group",
    },
  ],
};

const addingMenus = document.querySelector(".addHere");
let newUL = document.createElement("ul");
let newSpan = document.createElement("span");
let newli = document.createElement("li");
let newText = document.createTextNode("shshshshshshs");
// newli.appendChild(newText);
// newUL.appendChild(newli);
// addingMenus.appendChild(newUL);
const ulS = {};
const liS = [];
function binaryTree(obj) {
  console.log(obj.children);
  if (obj.parentID > 0) {
    let ulCh = document.createElement("ul");
    let liCH = document.createElement("li");
    liCH.innerText = obj.text;
    ulCh.appendChild(liCH);
    if (obj.children && obj.children.length > 0) {
      let ul = document.createElement("ul");
      liCH.appendChild(ul);
      ulS[obj.id] = liCH;
    }
    ulS[obj.parentID].appendChild(ulCh);
  } else {
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    li.innerText = obj.text;
    ul.appendChild(li);
    ulS[obj.id] = li;
  }
  // if (
  //   (obj.type === "title" && obj.children) ||
  //   (obj.type === "link" && obj.children)
  // ) {
  //   console.log(`UL ${obj.text}`);
  //   // ulS.push({ ulTX: obj.text, id: obj.id, parentID: obj.parentID });
  //   newSpan.appendChild(document.createTextNode(obj.text));
  //   newUL.appendChild(newSpan);
  //   addingMenus.appendChild(newUL);
  // }
  // if (obj.type === "link" && !obj.children) {
  //   console.log(`LI ${obj.text}`);
  //   liS.push({ liTX: obj.text, id: obj.id, parentID: obj.parentID });
  //   // newli.appendChild(document.createTextNode(obj.text));
  //   // newUL.appendChild(newli);
  // }
  obj.children &&
    obj.children.forEach((child) => {
      return binaryTree(child);
    });
}

binaryTree(menu);
// console.log(ulS);
// ulS.map((el) => {
//   let elem = newUL.appendChild(document.createTextNode(el.ulTX));
//   addingMenus.appendChild(elem);
// });

console.log(ulS);
// function checkingArrs(arrUl, arrLi) {}
// checkingArrs(ulS, liS);
