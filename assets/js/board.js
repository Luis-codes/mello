class Card {
  constructor(text) {
    this.text = text;
    console.log(Card.lastId);
    this.id = ++Card.lastId;
    console.log(this);
  }
}

Card.lastId = 0;

console.log(Card.lastId);

class List {
  constructor(title) {
    this.title = title;
    this.id = ++List.lastId;
    this.cards = [];
    console.log(this);
  }

  addCard(text) {
    var card = new Card(text);
    this.cards.push(card);
  }

  findCard(cardId) {
    return this.cards.find(function(card) {
      if (cardId === card.id) {
        return card;
      }
    });
  }
}

List.lastId = 0;

class Board {
  constructor() {
    this.id = ++Board.lastId;
    this.lists = [];
  }

  addList(text) {
    var list = new List(text);
    this.lists.push(list);
  }

  findList(listId) {
    return this.lists.find(function(list) {
      return listId === list.id;
    });
  }

  editList(listId, newTitle) {
    var list = this.findList(listId);
    if (list) {
      list.title = newTitle;
    }
  }

  addCard(listId, cardText) {
    var list = this.findList(listId);
    if (list) {
      list.addCard(cardText);
      }
    }
  }

Board.lastId = 0;
