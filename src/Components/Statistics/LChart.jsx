import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, } from 'recharts';

const LChart = () => {

    const students = [
        { "id": 1, "name": "Alice", "math_score": 75, "physics_score": 80, "chemistry_score": 72 },
        { "id": 2, "name": "Bob", "math_score": 92, "physics_score": 88, "chemistry_score": 90 },
        { "id": 3, "name": "Charlie", "math_score": 68, "physics_score": 75, "chemistry_score": 62 },
        { "id": 4, "name": "David", "math_score": 85, "physics_score": 78, "chemistry_score": 80 },
        { "id": 5, "name": "Eva", "math_score": 78, "physics_score": 92, "chemistry_score": 85 },
        { "id": 6, "name": "Frank", "math_score": 70, "physics_score": 65, "chemistry_score": 72 },
        { "id": 7, "name": "Grace", "math_score": 95, "physics_score": 96, "chemistry_score": 94 },
        { "id": 8, "name": "Henry", "math_score": 82, "physics_score": 89, "chemistry_score": 75 },
        { "id": 9, "name": "Ivy", "math_score": 88, "physics_score": 94, "chemistry_score": 92 },
        { "id": 10, "name": "Jack", "math_score": 64, "physics_score": 72, "chemistry_score": 68 }
    ]
    return (
        <div>
            <LineChart width={900} height={400} data={students}>
                <XAxis dataKey="name" type='category'/>
                <YAxis  type='number' />
                <CartesianGrid strokeDasharray="3 4" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="math_score" stroke="red" fill='red'/>
                <Line type="monotone" dataKey="physics_score" stroke="green" activeDot={{ r: 8 }}/>
                <Line type="monotone" dataKey="chemistry_score" stroke="white" />
            </LineChart>
        </div>
    );
};

export default LChart;