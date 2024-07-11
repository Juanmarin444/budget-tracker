export default function formatMoney(money) {
    const formattedMoney = Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(money);
    return formattedMoney;
}