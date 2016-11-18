import { Injectable } from '@angular/core';



export class StringService {


    public stringToArray(string: String) {
     return string.split(" "); 
    }

    public stringReverseWordOrder(string: String) {
     return string.split(" ").reverse().join(" "); 
    }

    public stringReverseInPlace(string : String) {
     return string.split(' ').reverse().join(' ').split('').reverse().join('');
     }
     
     // Output object with properties from array (key) while the value is index in array. 
    public ArrayStringToObject(array) {
         let stringObj= {};
         
         for (let i =0 ; i<array.length; i++)
         {
             let word = array[i];
             if (!stringObj.hasOwnProperty(word)){
                stringObj[word]=[];
             }
             stringObj[word].push(i);
         }
         return stringObj;
     }

    public reconstructStringFromObj(stringObj) : String {
    let stringArray=[];
    let keys = Object.keys(stringObj);
    keys.forEach(key => {
        for (let i of stringObj[key]) {
            stringArray[i]= key;
        }
    });
    return stringArray.join(' ');
    }

    public changeObjectProperties(obj): Object {
        let modifiedObj = {};
        for (let prop in obj) {
            let newProp = this.wordChange(prop);
            modifiedObj[newProp]= obj[prop].slice();
        } 


        return modifiedObj;
    }
    
    public wordChange(string) {
        return string+'a';
    }
}