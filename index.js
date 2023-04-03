
//creando clase ProductManahger
class ProductManager {
    constructor() {
        this.products =[]
    }

    addProduct(product) {
        if(this.products.find(producto => producto.code == product.code)){
            console.log ("Producto existente")
            return "Producto existente"
        }
         else {
            this.products.push(product)
            //producto no existente
        } 
        
        


    }
  


    gerProducts() {
        return this.products
    }
    getProductsById (id) {
        const product = this.products.find(producto => producto.id == id)
        if (product){
            return product
        }
        return "Not found"
    }
}

//creando clase product
class Product {
    constructor (title = "", description = "", price = "", thubnail = "", code = "", stock = "") {
        this.title = title
        this.description = description
        this.price = price
        this.thubnail = thubnail
        this.code = code
        this.stock = stock
        this.id = Product.incrementID()

    }


    static incrementID() {
        if(this.idIncrement) {
            this.idIncrement++
        }else {
            this.incrementID = 1
        }
        return this.idIncrement
    }

}


//productos 
const Product = new Product1 (remera, roja, 1200, "". remeraRoja, 21)
const Product = new Product2 (bermuda, jean, 1500, "". bermudaJean, 12)
const Product = new Product3 (campera, polar, 3200, "". camperaPolar, 8)


console.log(Product1)
console.log(Product2)
console.log(Product3)


const productManager = new ProductManager()
ProductManager.addProduct(Product1)
ProductManager.addProduct(Product2)

console.log(productManager.addProduct(product1))
console.log(productManager.getProductsById(2))
console.log(productManager.getProductsById(5))
console.log(productManager.gerProducts())