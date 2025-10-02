'use client'

// Third-party Imports
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

// Use a deterministic PRNG to keep SSR/CSR output identical and avoid hydration mismatch.
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] as const

function createSeededRandom(seed: number) {
  let s = seed % 2147483647
  if (s <= 0) s += 2147483646
  return () => {
    s = (s * 16807) % 2147483647
    return s / 2147483647
  }
}

const seeded = createSeededRandom(123456)
const data = months.map(name => ({ name, total: Math.floor(seeded() * 5000) + 1000 }))

export function Overview() {
  return (
    <ResponsiveContainer width='100%' height={350}>
      <BarChart data={data}>
        <XAxis dataKey='name' stroke='#888888' fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke='#888888' fontSize={12} tickLine={false} axisLine={false} tickFormatter={value => `$${value}`} />
        <Bar dataKey='total' fill='currentColor' radius={[4, 4, 0, 0]} className='fill-chart-1' />
      </BarChart>
    </ResponsiveContainer>
  )
}
