import Wallet from "../controllers/wallet";

export function route(app) {
    app.route('/wallet')
        .get(async (request, response) => {
            response.send(await Wallet.information())
        })
}
