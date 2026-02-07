export interface SubscriptionPlan {
  id: string;
  title: string;
  subtitle: string;
  originalPrice: string;
  price: string;
  minPrice: number;
  maxPrice: number;
  period: string;
  ribbon: string;
  features: string[];
}

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: "plan-3-month",
    title: "3-Month",
    subtitle: "Subscription",
    originalPrice: "",
    price: "$600-900",
    minPrice: 600,
    maxPrice: 900,
    period: "Billed Every 3 Months",
    ribbon: "",
    features: [
      "One (1) Bag of Protein",
      "Three (3) Bag of SAUMRS",
      "Item Total = 4 Bags of Product",
      "Scheduled = Every Three (3) MO",
      "Deliveries = One (1)",
      "Total = 1 Bag of Protein",
      "Total = 3 Bags of SAUMRS",
    ],
  },
  {
    id: "plan-bi-annual",
    title: "Bi-Annually",
    subtitle: "Subscription",
    originalPrice: "$1800",
    price: "$1,100-1,650",
    minPrice: 1100,
    maxPrice: 1650,
    period: "Billed Every 6 Months",
    ribbon: "10% Off",
    features: [
      "One (1) Bag of Protein",
      "Three (3) Bag of SAUMRS",
      "Item Total = 4 Bags of Product",
      "Scheduled = Every Three (3) MO",
      "Deliveries = Two (2)",
      "Total = 2 Bags of Protein",
      "Total = 6 Bags of SAUMRS",
    ],
  },
  {
    id: "plan-yearly",
    title: "Yearly",
    subtitle: "Subscription",
    originalPrice: "$3600",
    price: "$2,000-3,000",
    minPrice: 2000,
    maxPrice: 3000,
    period: "Billed Every Year",
    ribbon: "15% Off",
    features: [
      "One (1) Bag of Protein",
      "Three (3) Bag of SAUMRS",
      "Item Total = 4 Bags of Product",
      "Scheduled = Every Three (3) MO",
      "Deliveries = Four (4)",
      "Total = 4 Bags of Protein",
      "Total = 12 Bags of SAUMRS",
    ],
  },
];
