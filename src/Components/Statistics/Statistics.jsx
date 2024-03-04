import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import { getDataFromLocalStorage } from '../../JavaScriptFunction/localStorage';




const Statistics = () => {

    const donationArray = getDataFromLocalStorage();
    const donationLength = donationArray.length;

    const data = [
        { name: 'Your ', value: donationLength },
        { name: 'Remaining', value: 12 - donationLength }
    ];
    const data2 = [
        { name: 'Total ', value: 12 }
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent}) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(2)}%`}
            </text>
        );
    };

    // Set initial values for inner and outer radius
    let outerRadius1 = 180;
    let outerRadius2 = 140;
    let innerRadius1 = 160;
    let pieSquare = 500;

    //Adjust inner and outer radius based on screen width
    if (window.innerWidth <= 600) {
        outerRadius1 = 100;
        outerRadius2 = 70;
        innerRadius1 = 85;
        pieSquare = 300;
    }

    return (
        <div className='mb-16'>
            <div>
                {
                    donationLength === 0 && <h2 className="text-xl">Your donation Statistics will be illustrated below</h2>
                }
            </div>
            <div className='flex justify-center'>

                <PieChart width={pieSquare} height={pieSquare}>
                    <Pie
                        data={data}
                        cx='50%'
                        cy='50%'
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={outerRadius2}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Pie data={data2} dataKey="value" cx="50%" cy="50%" innerRadius={innerRadius1} outerRadius={outerRadius1} label={renderCustomizedLabel} labelLine={false} fill="#82ca9d" />
                    <Legend />
                    <Tooltip></Tooltip>
                </PieChart>

            </div>

        </div>
    );
};

export default Statistics;