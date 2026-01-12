import { Truck, ShieldCheck, Leaf, Smile } from "lucide-react";

const benefits = [
    {
        icon: Truck,
        title: "Free shipping",
        description: "On orders over ₹500",
    },
    {
        icon: ShieldCheck,
        title: "Secure payment",
        description: "Safe and secure checkout",
    },
    {
        icon: Leaf,
        title: "Natural ingredients",
        description: "100% organic and healthy",
    },
    {
        icon: Smile,
        title: "Customer satisfaction",
        description: "Loved by thousands",
    },
];

export function BenefitsSection() {
    return (
        <section className="py-12 bg-white dark:bg-black">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 text-center group hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-300"
                        >
                            <div className="mb-4 p-3 bg-white dark:bg-zinc-800 rounded-full shadow-sm group-hover:scale-110 transition-transform duration-300 border border-zinc-100 dark:border-zinc-700">
                                <benefit.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" strokeWidth={1.5} />
                            </div>
                            <h3 className="font-heading text-lg font-bold text-zinc-900 dark:text-white mb-2">
                                {benefit.title}
                            </h3>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400 font-medium">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
