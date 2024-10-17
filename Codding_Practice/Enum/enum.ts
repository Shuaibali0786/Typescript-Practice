// // Deffine a enum of days

// enum Days {
//     Sunday,
//     Monday,
//     Tuesday,
//     Wednesday,
//     Thursday,
//     Fridy,
//     Saturday,

//  }

//  let today: Days = Days.Sunday;
//  console.log(`Today is ${Days[today]}`);

//  // Fruites

//  enum Fruites {
//     Apple,    // it's index no will reamin same output:0
//     Mango,
//     Banana,
//     Orange,
//  }


//  console.log(Fruites[0]);
//  console.log(Fruites["Mango"]);
//  console.log(Fruites["Apple"]);
//  console.log(Fruites.Orange);



//  enum friendsName {
//     Shuaib,
//     Baat,
//     Karachi,
//     Pakistan,
//  }

// let Friendsname: friendsName = friendsName.Shuaib;
// console.log(`This is me ${friendsName[Friendsname]}`);




// enum function if else

enum Auth {  // Auth ka matlab hota he 
   Facebook,
   Google,
   Pasword

}

function login(authType: Auth) {
   if(authType == Auth.Facebook) {
      console.log(`Login facebook`)
   }
}

login(Auth.Facebook)