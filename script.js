function pizzaCart() {
    return {
        smallCount: 0,
        mediumCount: 0,
        largeCount: 0,
        smallPrice: 31.99,
        mediumPrice: 58.99,
        largePrice: 87.99,
        paymentAmount: 0,
        message: '',
        checkoutClicked: false,

        addPizza(size) {
            if (size === 'small') this.smallCount++;
            if (size === 'medium') this.mediumCount++;
            if (size === 'large') this.largeCount++;
        },

        removePizza(size) {
            if (size === 'small' && this.smallCount > 0) this.smallCount--;
            if (size === 'medium' && this.mediumCount > 0) this.mediumCount--;
            if (size === 'large' && this.largeCount > 0) this.largeCount--;
        },

        get totalCost() {
            return (
                this.smallCount * this.smallPrice +
                this.mediumCount * this.mediumPrice +
                this.largeCount * this.largePrice
            ).toFixed(2);
        },

        checkout() {
            this.checkoutClicked = true;
        },

        pay() {
            let total = Number(this.totalCost);
            let amount = Number(this.paymentAmount);

            if (amount >= total) {
                let change = amount - total;
                this.message = `Payment successful. Enjoy your pizzas! Your change is R${change.toFixed(2)}.`;
                // Show the success message for 5 seconds before resetting fields
                setTimeout(() => {
                    this.smallCount = 0;
                    this.mediumCount = 0;
                    this.largeCount = 0;
                    this.paymentAmount = 0;
                    this.checkoutClicked = false;
                    this.message = '';
                }, 5000);
            } else {
                this.message = "Sorry, insufficient funds!";
                // Hide the insufficient funds message after 5 seconds
                setTimeout(() => {
                    this.message = '';
                }, 5000);
            }
        }
    };
}