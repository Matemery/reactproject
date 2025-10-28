 const catalog=[
      {
        "_id": "1",
        "title": "Hammer",
        "price": 12.99,
        "category": "Hand Tools",
        image: "./img/hammer.jpeg", 
      },
      {
        "_id": "2",
        "title": "Screwdriver Set",
        "price": 19.99,
        "category": "Hand Tools",
        image: "./img/screwdriver.jpeg", 
      },
      {
        "_id": "3",
        "title": "Wrench Set",
        "price": 29.99,
        "category": "Hand Tools",
        image: "./img/wrench.jpeg", 
      },
      {
       "_id": "4",
        "title": "Power Drill",
        "price": 89.99,
        "category": "Power Tools",
        image: "./img/power drill.jpeg", 
      },
      {
        "_id": "5",
        "title": "Toolbox",
        "price": 10000.00,
        "category": "Storage",
        image: "./img/toolbox.jpeg", 
      },
    ];
  
  class DataService{
    getProducts() {
        return catalog;
    }
}


export default DataService;