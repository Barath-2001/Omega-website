export const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
export const productData = [
    {
        id: 1,
        imageUrl: require("../Images/Product1.jpg"),
        name: "Lithium Inverter(Li-1550 SW)",
        price: "Rs 250000",
        description: "This inverter model is equipped with a powerful 100Ah Lithium-Ion Ferro Phosphate battery, contributing to a weight of 20 kg. It comes with a substantial warranty period of 4 years, ensuring long-term reliability. The 4-line digital display provides clear and comprehensive information about the inverter's status and performance.With a capacity of 1550 VA, this inverter is designed to handle a variety of electrical loads.The lithium- ion battery boasts a remarkable lifespan of more than 10 years, and the overall system requires zero maintenance.The inclusion of a Battery Management System(BMS) enhances the efficiency and safety of the battery, ensuring optimal performance over the years.This inverter is a robust and reliable solution for users seeking a long - lasting and hassle - free power backup system.",
    },
    {
        id: 2,
        imageUrl: require("../Images/product3.jpg"),
        name: "Lithium LI-2200",
        price: "Rs 20000",
        description:"This lithium inverter integrates advanced LiFePo4 lithium battery technology, ensuring a powerful and efficient energy storage solution. With a 3-phase design and solar compatibility, it caters to the specific needs of commercial settings, offering a seamless power supply with protection against overvoltage.Weighing 28 kg and featuring a tower model form factor, it provides ease of installation and flexibility.The Line Interactive UPS type ensures optimal performance, and the LED display offers real- time monitoring of critical parameters.Backed by a 4 - year warranty, the Omega Digital UPS Li 2200VA guarantees a reliable and durable power solution for commercial applications, providing up to 6 hours of backup time.Proudly made in India, it reflects the brand's commitment to local manufacturing and quality standards.",
    },
    {
        id: 3,
        imageUrl:require("../Images/Product-2.png"),
        name: "Lithium Inverter mini(Li-1050 SW)",
        price: "Rs 7000",
        description: "This Lithium Inverter is designed to provide reliable and efficient power with a significant 1050 VA capacity. The 75 Ah Lithium-Ion Ferro Phosphate battery ensures a long-lasting power supply, exceeding 10 years of battery life. The compact design, with a weight of 20 kg, makes it suitable for various applications.With a 4-year warranty, users can have confidence in the product's durability and performance. The 4-line digital display provides detailed information about the inverter's status and power parameters.Notably, the Lithium Inverter requires zero maintenance, and the built-in Battery Management System(BMS) ensures optimal performance and safety.This model is an excellent choice for those seeking a reliable and technologically advanced power inverter system for their residential or commercial needs.",
    },
    {
        id: 4,
        imageUrl:require("../Images/product4.png"),
        name: "Lead Acid Battery",
        price: "Rs 10000",
        description: "This lead-acid battery, with a capacity of 150Ah at a C20 discharge rate, is designed with a selenium alloy tubular construction. The nominal voltage of the battery is 12V, and its performance characteristics are specified at a temperature of 27 degrees Celsius. The use of selenium alloy in the tubular design enhances the battery's efficiency and overall durability.It's worth noting that the C20 rate is a standard measure used in the battery industry to denote the capacity of the battery over a 20-hour discharge period. In this case, the battery is designed to deliver a total capacity of 150 ampere-hours over the course of 20 hours. A Warranty of 5 years is provided",
    },
];