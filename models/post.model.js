const fs = require("fs")

// const resolve = require("path")
// const promise = require("v8")


const getNewId = (array) => {
    if (array.length > 0) {
        return array[array.length - 1].id + 1
    } else {
        return 1
    }
}

const newDate = () => new Date().toString()

const mustBeInArray = (array, id) => {
    new Promise((resolve, reject) => {
        const obj = array.find(r => r.id === id)
        if (!obj) {
            reject({
                message: "Element not found",
                status: 404
            })
        }
        resolve(row)
    })
}