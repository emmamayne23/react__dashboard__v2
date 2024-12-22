
import { Line } from "react-chartjs-2"

const LineChart = () => {
    const data = {
        labels: ["April", "May", "June", "July", "August", "September"],
        datasets: [
            {
                label: "Website Visitors",
                data: [50, 70, 40, 90, 85, 45],
                fill: false,
                borderColor: "rgba(54, 162, 235, 1)",
                tension: 0.1,
            }
        ]
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: "top",
            }
        }
    }

  return <Line data={data} options={options} />
}

export default LineChart