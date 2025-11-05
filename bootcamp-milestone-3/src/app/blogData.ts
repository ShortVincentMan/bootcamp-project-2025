export interface Blog{
    title: string; // self-explanatory
    date: string; //YYYY-MM-DD
    description: string; //short description
    image: string; //image e.g. /images/mantis-blades.jpg
    imageAlt: string; //Image description
    slug: string; //URL
    content: string;
}

const blogs: Blog[] = [
    {
        title: "Cal Poly State University",
        date: "2025-10-13",
        description: "Opinion Piece",
        image: "/images/cpslo.jpg",
        imageAlt: "CPSLO",
        slug: "cpslo",
        content: "Starting my first year as a Computer Engineering student at Cal Poly San Luis Obispo has been a mix of excitement, confusion, and small victories. I came here knowing I loved building things — from small electronics to weird side projects — but I wasn’t totally sure what being a “computer engineer” really meant in a university setting. The first few weeks hit fast. Suddenly, I was balancing lectures, labs, late-night problem sets, and a completely new environment. But even through the chaos, I’ve started to realize what makes Cal Poly’s Learn by Doing philosophy so special.",
    },
    {
        title: "Learning TypeScript",
        date: "2025-10-09",
        description: "Why I'm Learning TypeScript",
        image: "/images/ts.jpg",
        imageAlt: "Hackerman",
        slug: "typescript",
        content: "I’m completely new to coding, and I’ve been trying to understand how everything connects together. When I first started looking at programming languages, I saw TypeScript mentioned almost everywhere — especially in projects that use JavaScript. What caught my attention is that TypeScript isn’t a totally new language; it’s like an upgrade or safety net for JavaScript. People say it helps catch mistakes early and makes your code easier to understand. That sounded perfect for someone like me who’s still learning and tends to make a lot of small errors.",
    },
    {
        title: "I love my cat",
        date: "2025-10-09",
        description: "My cat is so awesome",
        image: "/images/moe-hero.jpeg",
        imageAlt: "my cat Moe lounging outside",
        slug: "my-cat",
        content: "Between late-night debugging and shipping tiny improvements, one constant keeps me sane: my cat, Moe. He’s equal parts roommate, study buddy, and QA engineer. If a build fails, he’ll walk across the keyboard to let me know it’s time for a break. Moe’s personality is a perfect mix of chill and curious. He’ll sunbathe like a professional, then suddenly sprint laps to remind me that context switching is real. When I’m stuck, taking two minutes to pet him often does more than staring at a stack trace.",
    },

];

// Export

export default blogs;