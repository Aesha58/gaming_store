const home = async (req, res) => {
    res.render("./home");
}

const aboutUs = async (req, res) => {
    res.render("./aboutUs");
}

const accessories = async (req, res) => {
    res.render("./accessories");
}

const consoles = async (req, res) => {
    res.render("./consoles");
}

const contact = async (req, res) => {
    res.render("./contact");
}

const games = async (req, res) => {
    res.render("./games");
}

module.exports = { home, aboutUs, accessories, consoles, contact, games };