"use client"
// components/CashFlowGraph.js
// import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function CashFlowGraph({ history }) {
    console.log(`LINE CHART: ${LineChart}`);
  return (
    <div>
        <LineChart
        width={500}
        height={300}
        data={history}
        margin={{
            top: 5, right: 30, left: 20, bottom: 5,
        }}
        >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="netCashFlow" stroke="#8884d8" />
        <Line type="monotone" dataKey="totalIncome" stroke="#82ca9d" />
        <Line type="monotone" dataKey="totalExpenses" stroke="#ff7300" />
        </LineChart>
    </div>
  );
};