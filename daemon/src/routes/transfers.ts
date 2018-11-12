import {Transfers} from "../controllers/transfers"
import Filter from "../models/filter";

export function route(app) {
    app.route('/transfers')
        .get((request, response) => {
            response.send(
                Transfers.list(new Filter(request.query))
            )
        })
        .post(async (request, response) => {
            response.send(
                await Transfers.send(
                    request.body.recipient,
                    request.body.amount,
                )
            )
        })
}
