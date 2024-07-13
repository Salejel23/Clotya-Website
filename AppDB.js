import { enableExperimentalWebImplementation } from "react-native-gesture-handler";
import Sqlite from 'react-native-sqlite-storage';

//open or create  a data in aseparate file 

const db=Sqlite.openDatabase({name:'product',location:'default'});


export function createProductsTable()
{
db.transaction((tx)=>{
    tx.executeSql(
        'CREATE TABLE IF NOT EXISTS products( id INTEGER PRIMARY KEY  AUTOINCREMENT, name TEXT ,price REAL)',
        [],
        (tx,result)=>{

        },
        (tx,error)=>{
            console.log('Error creating products table:',error);
        }
    );
    
});
}



export function selectCart()
{
    
}

export function addToCart(product)
{
    db.transaction((tx)=>{
        tx.executesql('INSERT INTO cart(name,price)VALUES(?,?)',
        [product.name,product.price]
        );
    });
  
};