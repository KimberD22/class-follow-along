/*
 * first-route.component.ts
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-route',
  templateUrl: './first-route.component.html',
  styleUrls: ['./first-route.component.css']
})
export class FirstRouteComponent implements OnInit {
  wines = [
    {
      "id": 6314,
      "name": "CHATEAU DE SAINT COSME",
      "year": 2009,
      "grapes": "Grenache / Syrah",
      "country": "France",
      "region": "Southern Rhone",
      "description": "The aromas of fruit and spice give one a hint of the light drinkability of this lovely wine, which makes an excellent complement to fish dishes.",
      "picture": "http://s3-us-west-2.amazonaws.com/sandboxapi/saint_cosme.jpg",
      "price": 13,
      "instance_id": "00d2b0",
      "created_at": "2020-07-15T17:40:40.554Z",
      "updated_at": "2020-07-15T17:40:40.554Z"
    },
    {
      "id": 6315,
      "name": "LAN RIOJA CRIANZA",
      "year": 2006,
      "grapes": "Tempranillo",
      "country": "Spain",
      "region": "Rioja",
      "description": "A resurgence of interest in boutique vineyards has opened the door for this excellent foray into the dessert wine market. Light and bouncy, with a hint of black truffle, this wine will not fail to tickle the taste buds.",
      "picture": "http://s3-us-west-2.amazonaws.com/sandboxapi/lan_rioja.jpg",
      "price": 21,
      "instance_id": "00d2b0",
      "created_at": "2020-07-15T17:40:40.560Z",
      "updated_at": "2020-07-15T17:40:40.560Z"
    },
    {
      "id": 6316,
      "name": "MARGERUM SYBARITE",
      "year": 2010,
      "grapes": "Sauvignon Blanc",
      "country": "USA",
      "region": "California",
      "description": "The cache of a fine Cabernet in ones wine cellar can now be replaced with a childishly playful wine bubbling over with tempting tastes of black cherry and licorice. This is a taste sure to transport you back in time.",
      "picture": "http://s3-us-west-2.amazonaws.com/sandboxapi/margerum.jpg",
      "price": 25,
      "instance_id": "00d2b0",
      "created_at": "2020-07-15T17:40:40.566Z",
      "updated_at": "2020-07-15T17:40:40.566Z"
    },
    {
      "id": 6317,
      "name": "OWEN ROE \"EX UMBRIS\"",
      "year": 2009,
      "grapes": "Syrah",
      "country": "USA",
      "region": "Washington",
      "description": "A one-two punch of black pepper and jalapeno will send your senses reeling, as the orange essence snaps you back to reality. Dont miss this award-winning taste sensation.",
      "picture": "http://s3-us-west-2.amazonaws.com/sandboxapi/ex_umbris.jpg",
      "price": 15,
      "instance_id": "00d2b0",
      "created_at": "2020-07-15T17:40:40.572Z",
      "updated_at": "2020-07-15T17:40:40.572Z"
    },
    {
      "id": 6318,
      "name": "REX HILL",
      "year": 2009,
      "grapes": "Pinot Noir",
      "country": "USA",
      "region": "Oregon",
      "description": "One cannot doubt that this will be the wine served at the Hollywood award shows, because it has undeniable star power. Be the first to catch the debut that everyone will be talking about tomorrow.",
      "picture": "http://s3-us-west-2.amazonaws.com/sandboxapi/rex_hill.jpg",
      "price": 32,
      "instance_id": "00d2b0",
      "created_at": "2020-07-15T17:40:40.578Z",
      "updated_at": "2020-07-15T17:40:40.578Z"
    },
    {
      "id": 6319,
      "name": "VITICCIO CLASSICO RISERVA",
      "year": 2007,
      "grapes": "Sangiovese Merlot",
      "country": "Italy",
      "region": "Tuscany",
      "description": "Though soft and rounded in texture, the body of this wine is full and rich and oh-so-appealing. This delivery is even more impressive when one takes note of the tender tannins that leave the taste buds wholly satisfied.",
      "picture": "http://s3-us-west-2.amazonaws.com/sandboxapi/viticcio.jpg",
      "price": 45,
      "instance_id": "00d2b0",
      "created_at": "2020-07-15T17:40:40.584Z",
      "updated_at": "2020-07-15T17:40:40.584Z"
    },
    {
      "id": 6320,
      "name": "CHATEAU LE DOYENNE",
      "year": 2005,
      "grapes": "Merlot",
      "country": "France",
      "region": "Bordeaux",
      "description": "Though dense and chewy, this wine does not overpower with its finely balanced depth and structure. It is a truly luxurious experience for the senses.",
      "picture": "http://s3-us-west-2.amazonaws.com/sandboxapi/le_doyenne.jpg",
      "price": 12,
      "instance_id": "00d2b0",
      "created_at": "2020-07-15T17:40:40.591Z",
      "updated_at": "2020-07-15T17:40:40.591Z"
    },
    {
      "id": 6321,
      "name": "DOMAINE DU BOUSCAT",
      "year": 2009,
      "grapes": "Merlot",
      "country": "France",
      "region": "Bordeaux",
      "description": "The light golden color of this wine belies the bright flavor it holds. A true summer wine, it begs for a picnic lunch in a sun-soaked vineyard.",
      "picture": "http://s3-us-west-2.amazonaws.com/sandboxapi/bouscat.jpg",
      "price": 34,
      "instance_id": "00d2b0",
      "created_at": "2020-07-15T17:40:40.597Z",
      "updated_at": "2020-07-15T17:40:40.597Z"
    }
  ];

  randomVar = false;
  getCondition() {
    return 12 < 10;
  }

  runOnClickPlease(anyNameYouWant) {
    console.log(anyNameYouWant);
    console.log('you have pressed the element');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
