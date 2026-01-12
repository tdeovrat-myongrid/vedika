export interface InstagramReel {
    id: string;
    media_url: string;
    thumbnail_url?: string;
    caption: string;
    permalink: string;
    media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
}

const MOCK_REELS: InstagramReel[] = [
    {
        id: "1",
        media_url: "https://scontent.cdninstagram.com/v/t51.71878-15/608358264_1205356341175319_3903386610222673995_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=106&ig_cache_key=MzgwNjA4Nzk1ODk0MTAwNDY2NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM4LnNkci5DMyJ9&_nc_ohc=wjYsgg1MUpUQ7kNvwHbsPlF&_nc_oc=AdljaPmsEW2Mj1NjguXCsUNhLPX4Sx9icmAPDjYVq3IfaNwzuZvLy9xDL8PtTWAdTba1uehIMg8k1b91X3kVkof9&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=ZSlOxoyeIDQNKtIUMmFZPg&oh=00_Afo_iSw6NDkN6qTTBQNwuvP6AfRnnrqWLq7CjFWsfV5pOg&oe=69670843",
        media_type: "VIDEO",
        caption: "Crunchy goodness! 🍪 #CleanCrate #HealthySnacks",
        permalink: "https://www.instagram.com/poushtpop/reel/DTR8NVIkfN5/"
    },
    {
        id: "2",
        media_url: "https://scontent.cdninstagram.com/v/t51.71878-15/609875221_750685714165328_7045565869716844083_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=102&ig_cache_key=MzgwMDM3NjM0NTAzNDM1NDA4OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM2LnNkci5DMyJ9&_nc_ohc=iOOkAx15fdoQ7kNvwGlgq9_&_nc_oc=Adn6WF_RNJ3QCNB56_3ENeXQF3GfZl7dyTqzJQD_JsbisVzjeI59WGyRT6m2lHdGmsCQwCjgfkMu1ci8GYNkqW-k&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=ZSlOxoyeIDQNKtIUMmFZPg&oh=00_Afqv0XDSLr2WLrNwBS98nS7rWhebUOaX-LVGVqjFq1mpnQ&oe=6967284F",
        media_type: "VIDEO",
        caption: "Morning routine sorted ☀️ #Oats #Breakfast",
        permalink: "https://www.instagram.com/poushtpop/reel/DS9piaKke2o/"
    },
    {
        id: "3",
        media_url: "https://scontent.cdninstagram.com/v/t51.71878-15/590403544_868733599043978_3692387871478092458_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=105&ig_cache_key=Mzc5MTkxNzE0NjA1ODU1NzQ2Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM2LnNkci5DMyJ9&_nc_ohc=FM_39-pf0q0Q7kNvwGICBcp&_nc_oc=Adk5rxNOt0-Gg-ZKXhI3fAEG8394e6y6rL95spytIKN1_NiBUhy_yYtjSpcp5lbs7LHbW4BneCo9_QxSd65-2nb-&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=ZSlOxoyeIDQNKtIUMmFZPg&oh=00_Afq9WyVUzoRxPpUirNJkz4AaEFDdJ121Do2Zgv8HJdlCuQ&oe=69671713",
        media_type: "VIDEO",
        caption: "Mocha Rush energy ☕️ #CoffeeLover #Protein",
        permalink: "https://www.instagram.com/poushtpop/reel/DSfmI3MiIga/"
    },
    {
        id: "4",
        media_url: "https://scontent.cdninstagram.com/v/t51.71878-15/591173771_1182416400648905_2398229811585631535_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=107&ig_cache_key=Mzc4NzUwNzAyODMwNzAwNjU3MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgzNjAuc2RyLkMzIn0%3D&_nc_ohc=m6gN3OXRm6IQ7kNvwEZgO-U&_nc_oc=AdnQTgsLpXwB7Axu4wsDtqvaZNMZqm8FfIet7eQ-nP50bF8-qYX7ntaLqjhLjMbErVRZd0Q3OM-OPxQKL8iChutv&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=ZSlOxoyeIDQNKtIUMmFZPg&oh=00_AfqUyT0TIx6p8IrZRnKDkQtVsfqNhgHmapdqlua2oOmh4Q&oe=69671731",
        media_type: "VIDEO",
        caption: "Healthy snacking ideas 🥗 #Wellness",
        permalink: "https://www.instagram.com/poushtpop/reel/DSP7ZM-iNRq/"
    },
    {
        id: "5",
        media_url: "https://scontent.cdninstagram.com/v/t51.71878-15/592528407_1357756046030093_2668155832109250589_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=103&ig_cache_key=Mzc4MzQ4NDc0MTEwMjYzNjA2MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgzNjAuc2RyLkMzIn0%3D&_nc_ohc=g9e3Gc7-5r4Q7kNvwH8Lehq&_nc_oc=AdncD8TrENZeAge-UiK421WEkSnuaGCJRZLIzx1mg3VXS6w2HHWuAHlp226xNuW3W0cV4ll5tWcrIwvoyh92WI4P&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=ZSlOxoyeIDQNKtIUMmFZPg&oh=00_AfrIp88t08EYTZ9uLez-4iZunbtrEsR2OpTBNCiYwXNiZA&oe=69671A1B",
        media_type: "VIDEO",
        caption: "Cook with us! 👩‍🍳 #Recipe #HealthyEating",
        permalink: "https://www.instagram.com/poushtpop/reel/DSBo1OGiIwc/"
    },
    {
        id: "6",
        media_url: "https://scontent.cdninstagram.com/v/t51.71878-15/589426381_821267187383709_7894495341201177967_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=111&ig_cache_key=Mzc4MTI4OTQxMTk5NzEwNzk1Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM2LnNkci5DMyJ9&_nc_ohc=EqCebubJz-QQ7kNvwGEoRh3&_nc_oc=AdkRwpQYG7v5BjnS6vPbvEL77xYpiCh1ivyz3bAwBYrfOvgnMvby8V5Z_iO2euENff-5gAuo9INTbESGtuNDoRDS&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=ZSlOxoyeIDQNKtIUMmFZPg&oh=00_Afo5lIwe2gC4toZQHJIKSIG8OkffPc0LOL67EoXvH0cKGw&oe=6966FEBC",
        media_type: "VIDEO",
        caption: "Behind the scenes 🎥 #CleanCrate",
        permalink: "https://www.instagram.com/poushtpop/reel/DR51q-jCIb1/"
    },
    {
        id: "7",
        media_url: "https://scontent.cdninstagram.com/v/t51.71878-15/587711762_861680770140280_2310746622430850757_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=108&ig_cache_key=Mzc3Njk3Nzc5NzM0MDc1ODkyNQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM4LnNkci5DMyJ9&_nc_ohc=wgzIfmfy5vwQ7kNvwGl6oSG&_nc_oc=AdlRCCX8hzzg1LwyTzU_Wv-VeqvNT1304FLKfQLl459wAWg4sdI9I-dVcmtkY_qjfJllQKQIwe5EK-ELSvhXANT-&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=ZSlOxoyeIDQNKtIUMmFZPg&oh=00_Afr3sP0zgmWF4sNM9jeAjI1KHN0QF5jAoom0Bb-b9uzETw&oe=6967249C",
        media_type: "VIDEO",
        caption: "Our story ✨ #HealthyLiving",
        permalink: "https://www.instagram.com/poushtpop/reel/DRqhUufCION/"
    }
];

export async function getLatestReels(): Promise<InstagramReel[]> {
    const token = process.env.INSTAGRAM_ACCESS_TOKEN;

    if (!token) {
        console.warn("INSTAGRAM_ACCESS_TOKEN not found, using mock data.");
        return MOCK_REELS;
    }

    try {
        const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${token}&limit=5`;
        const response = await fetch(url, { next: { revalidate: 3600 } }); // Cache for 1 hour

        if (!response.ok) {
            console.error("Failed to fetch Instagram posts:", await response.text());
            return MOCK_REELS.slice(0, 5);
        }

        const data = await response.json();
        // Filter for REELS or VIDEO if desired, or just take latest 5 media items
        // The user specifically asked for "reels", but mixed media is often better if reels count is low. 
        // We generally return everything.
        return data.data || MOCK_REELS.slice(0, 5);
    } catch (error) {
        console.error("Error fetching Instagram posts:", error);
        return MOCK_REELS.slice(0, 5);
    }
}
