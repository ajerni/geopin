const user = {
    _id: "1",
    name: "Andi",
    email: "andi@andierni.ch",
    picture: "https://cloudinary.com/asdf"

}

module.exports = {
    Query : {
        me: () => user
    }
}