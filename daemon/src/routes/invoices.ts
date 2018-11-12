import Invoices from "../controllers/invoices";
import Filter from "../models/filter";

export function route(app) {
    app.route('/invoices')
        .get((request, response) => {
            response.send(
                Invoices.list(new Filter(request.query))
            )
        })
        .post((request, response) => {
            response.send(
                Invoices.generate(
                    request.body.amount,
                    request.body.details,
                    request.body.currency,
                )
            )
        })
}
