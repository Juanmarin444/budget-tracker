const budgetData = {
    user: {
      name: "Juan Marin",
      email: "juanitomarin424@gmail.com",
    },
    overview: {
      totalIncome: 5000,
      totalExpenses: 3000,
      savings: 1000,
      cashFlow: 2000,
    },
    income: [
      { id: 1, source: "Tory Burch Wage", amount: 2000, date: "2024-07-05" },
      { id: 2, source: "Freelance", amount: 1000, date: "2024-07-12" },
      { id: 3, source: "Tory Burch Wage", amount: 1980, date: "2024-07-19" },
      { id: 4, source: "Scam", amount: 1, date: "2024-07-11" },
    ],
    expenses: [
      { id: 1, category: "Groceries", amount: 500, date: "2024-07-02" },
      { id: 2, category: "Aquarium Plants", amount: 120, date: "2024-07-03" },
      { id: 3, category: "Bet w/ Francine", amount: 4, date: "2024-07-12" }
    ],
    budgets: [
      { id: 1, category: "Groceries", planned: 600, actual: 500 },
      { id: 2, category: "Utilities", planned: 300, actual: 300 },
      { id: 3, category: "Entertainment", planned: 250, actual: 300 },
    ],
    cashFlow: {
      currentMonth: {
        totalIncome: 5000,
        totalExpenses: 3000,
        netCashFlow: 2000,
      },
      history: [
        { month: "2024-06", totalIncome: 4000, totalExpenses: 2200, netCashFlow: 1800 },
        { month: "2024-05", totalIncome: 4500, totalExpenses: 3000, netCashFlow: 1500 },
        { month: "2024-04", totalIncome: 3900, totalExpenses: 2850, netCashFlow: 1050 },
      ],
    },
    savingsGoals: [
      { id: 1, goal: "Emergency Fund", amount: 5000, progress: 1000, targetDate: "2024-12-31" },
      { id: 2, goal: "RTX 4080 Noctua Ed", amount: 1749.99, progress: 200, targetDate: "2024-09-20" },
      { id: 3, goal: "Vacation", amount: 3000, progress: 1500, targetDate: "2024-08-15" },
    ],
    debts: [
      { id: 1, type: "Credit Card", amount: 500, dueDate: "2024-07-20" },
      { id: 2, type: "Car Loan", amount: 249, dueDate: "2024-07-24" },
    ],
    bills: [
      { id: 1, type: "Rent", amount: 2000, dueDate: "2024-07-10" },
      { id: 2, type: "Wi-Fi", amount: 60, dueDate: "2024-07-10" },
      { id: 3, type: "PG&E", amount: 391, dueDate: "2024-07-10" },
      { id: 4, type: "City Utilities", amount: 140, dueDate: "2024-07-10" },
    ],
};
  
const customers = [
    {
        id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
        name: 'Evil Rabbit',
        email: 'evil@rabbit.com',
        image_url: '/customers/evil-rabbit.png',
        startingBalance: 3700,
        income: 3000,
        savings: 0,
        bills: 1600,
        debt: 500,
        expenses: 410

    },
    {
        id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
        name: 'Delba de Oliveira',
        email: 'delba@oliveira.com',
        image_url: '/customers/delba-de-oliveira.png',
        startingBalance: 2700
    },
    {
        id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
        name: 'Lee Robinson',
        email: 'lee@robinson.com',
        image_url: '/customers/lee-robinson.png',
        startingBalance: 2700
    },
    {
        id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
        name: 'Michael Novotny',
        email: 'michael@novotny.com',
        image_url: '/customers/michael-novotny.png',
        startingBalance: 2700
    },
    {
        id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
        name: 'Amy Burns',
        email: 'amy@burns.com',
        image_url: '/customers/amy-burns.png',
        startingBalance: 2700
    },
    {
        id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
        name: 'Balazs Orban',
        email: 'balazs@orban.com',
        image_url: '/customers/balazs-orban.png',
        startingBalance: 2700
    },
];


export { budgetData, customers };