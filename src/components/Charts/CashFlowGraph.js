"use client"
// components/CashFlowGraph.js
// import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function CashFlowGraph({ history }) {
  return (
    <div className="block w-fit p-6 rounded-lg shadow bg-gray-800 border-gray-700 hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Visual Data</h5>
        <LineChart
        width={500}
        height={300}
        data={history}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
        >
        <CartesianGrid stroke="#9ca3af" strokeDasharray="3 3" />
        <XAxis stroke="#9ca3af" dataKey="month" />
        <YAxis stroke="#9ca3af" />
        <Tooltip contentStyle={{ backgroundColor: "#1f2937", borderColor:"#374151", borderRadius:"8px", color:"#ffffff" }}/>
        <Legend />
        <Line type="monotone" dataKey="netCashFlow" stroke="#00ffec" />
        <Line type="monotone" dataKey="totalIncome" stroke="#3aff00" />
        <Line type="monotone" dataKey="totalExpenses" stroke="#ff7300" />
        </LineChart>
    </div>
  );
};