<script>
    import { loadScript } from '@paypal/paypal-js';

    const clientId = 'AWR0qNtqhumda4krctE9stYtkIVikYsgk5Kz3-Ip0-pAsUH7ZO6AlOLlWBnPikFDpn7KHubW_7ho-UoM';

    loadScript({clientId: clientId}).then(( paypal ) => {
        paypal 
            .Buttons({
                fundingSource: paypal.FUNDING.PAYPAL,
            })
            .render('#paypal-button-container')
            .catch((error) => {
                console.error('Error loading PayPal SDK:', error);
            });
    })
    .catch((error) => {
        console.error('Error loading PayPal SDK:', error);
    });
</script>

<div id="paypal-button-container"></div>