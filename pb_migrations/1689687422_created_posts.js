migrate((db) => {
  const collection = new Collection({
    "id": "eql5gu78lirgrys",
    "created": "2023-07-18 13:37:02.051Z",
    "updated": "2023-07-18 13:37:02.051Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "0stnj2nk",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("eql5gu78lirgrys");

  return dao.deleteCollection(collection);
})
