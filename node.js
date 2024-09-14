// Install dependencies: npm install express stripe
const express = require('express');
const stripe = require('stripe')('your-secret-key-here'); // Secret key from Stripe
const app = express();

app.use(express.json());

app.post('/create-payment-intent', async (req, res) => {
    const { amount } = req.body;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount * 100, // Convert to cents
            currency: 'usd',
        });

        res.send({
            client_secret: paymentIntent.client_secret,
        });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));
