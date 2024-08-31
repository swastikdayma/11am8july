const _ = require('lodash')
// object copy
// const student = {
//     name:'swastik',
//     std: '12'
// }


// let student2 = student

// student2.name = 'rahul'

// console.log(student)
// console.log(student2)
// ------------------------
// shallow copy

// const student = {
//          name:'swastik',
//          std: '12',
//          dob: {
//             year: 1998,
//             month:'august',
//             date:17
//          }
//      }

//      let student2 = {...student}

    // let student2 = Object.assign({}, student)

    // student2.dob.year = 2000
    // student2.name = 'rahul'

    // console.log(student)
    // console.log(student2)
    
// -----------------------------


// deep copy


const student = {
    name:'swastik',
    std: '12',
    dob: {
       year: 1998,
       month:'august',
       date:17,
       fulldate: function(){
        return this.year + this.date + this.month
       }
    }
}

// let student2 = JSON.parse(JSON.stringify(student))


// student2.name = 'rahul'
// student2.dob.date = 19




let student2 = _.cloneDeep(student)

console.log(student)
console.log(student2)
