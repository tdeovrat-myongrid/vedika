"use client"

export function FeatureMarquee() {
    return (
        <>
            {/* Mobile View - Animated */}
            <div className="md:hidden border-y border-blue-800 bg-[#1e40af] dark:bg-[#1e40af] dark:border-blue-900 py-6 overflow-hidden relative">
                <style jsx>{`
            @keyframes scroll-text {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
            .animate-scroll-text {
              animation: scroll-text 30s linear infinite;
              display: flex;
              width: max-content;
            }
          `}</style>
                <div className="animate-scroll-text">
                    {/* First Copy */}
                    <div className="flex gap-16 whitespace-nowrap text-white/90 uppercase tracking-widest text-xs font-bold items-center px-8">
                        <span>High Protein</span>
                        <span className="h-1 w-1 bg-white/50 rounded-full"></span>
                        <span>Zero Added Sugar</span>
                        <span className="h-1 w-1 bg-white/50 rounded-full"></span>
                        <span>Gluten Free</span>
                        <span className="h-1 w-1 bg-white/50 rounded-full"></span>
                        <span>100% Natural</span>
                        <span className="h-1 w-1 bg-white/50 rounded-full"></span>
                        <span>Plant Based</span>
                        <span className="h-1 w-1 bg-white/50 rounded-full"></span>
                    </div>
                    {/* Second Copy for Loop */}
                    <div className="flex gap-16 whitespace-nowrap text-white/90 uppercase tracking-widest text-xs font-bold items-center px-8">
                        <span>High Protein</span>
                        <span className="h-1 w-1 bg-white/50 rounded-full"></span>
                        <span>Zero Added Sugar</span>
                        <span className="h-1 w-1 bg-white/50 rounded-full"></span>
                        <span>Gluten Free</span>
                        <span className="h-1 w-1 bg-white/50 rounded-full"></span>
                        <span>100% Natural</span>
                        <span className="h-1 w-1 bg-white/50 rounded-full"></span>
                        <span>Plant Based</span>
                        <span className="h-1 w-1 bg-white/50 rounded-full"></span>
                    </div>
                </div>
            </div>

            {/* Desktop View - Static */}
            <div className="hidden md:flex border-y border-blue-800 bg-[#1e40af] dark:bg-[#1e40af] dark:border-blue-900 py-6 justify-center overflow-hidden">
                <div className="flex gap-16 whitespace-nowrap text-white/90 uppercase tracking-widest text-xs font-bold items-center px-8">
                    <span>High Protein</span>
                    <span className="h-1 w-1 bg-white/50 rounded-full"></span>
                    <span>Zero Added Sugar</span>
                    <span className="h-1 w-1 bg-white/50 rounded-full"></span>
                    <span>Gluten Free</span>
                    <span className="h-1 w-1 bg-white/50 rounded-full"></span>
                    <span>100% Natural</span>
                    <span className="h-1 w-1 bg-white/50 rounded-full"></span>
                    <span>Plant Based</span>
                </div>
            </div>
        </>
    )
}
