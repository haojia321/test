const posts = [
	{
		version: "v2",
		title: "Music Miracles Helps Me with Stage Fright",
		dateLabel: "August 16, 2025",
		author: "Sonja Wilson",
		cover: "/images/gallery/08162025/IMG_5842.jpeg",
		postPath: "/data/posts/08162025.js",
		description: `Each performance makes me better and more confident. Now, I look forward to our concerts because I can play with my friends 
		and share music.`
	},
	{
		version: "v2",
		title: "I Love Music Miracles",
		dateLabel: "August 02, 2025",
		author: "Sonja Wilson",
		cover: "/images/gallery/08022025/IMG_5598.jpeg",
		postPath: "/data/posts/08022025.js",
		description: `Hi, my name is Sonja, and I’m going to tell you about Music Miracles!  It gathers children who would like to play instruments, 
		sing, or dance for the seniors that live in the senior center.`
	},
	{
		version: "v2",
		title: "Visit to Waltonwood at Ashburn",
		dateLabel: "July 26, 2025",
		author: "Yuxin Jia and Jason Jia",
		cover: "/images/gallery/07262025/IMG_5471.jpeg",
		postPath: "/data/posts/07262025.js",
		description: `Moments from our visit to Waltonwood at Ashburn`
	},
	{
		version: "v2",
		title: "Visit to Brightview Great Falls",
		dateLabel: "July 19, 2025",
		author: "Yuxin Jia and Jason Jia",
		cover: "/images/gallery/07192025/IMG_5351.jpeg",
		postPath: "/data/posts/07192025.js",
		description: `Highlights from our visit to Brightview Great Falls`
	},
	{
		version: "v2",
		title: "Beautifying Nature: Our Visit to Meadowlark Botanical Gardens",
		dateLabel: "April 19, 2025",
		author: "Yuxin Jia and Jason Jia",
		cover: "/images/gallery/04192025g/IMG_3727.jpeg",
		postPath: "/data/posts/04192025.js",
		description: `Our visit to Meadowlark Botanical Gardens was not only a fun outing but also a meaningful way to help the environment. 
		We spent the day picking up trash and removing sticks and branches that could interfere with mowing the grass. Everyone had a great time working together in the fresh air!`
	},
	{
		version: "v2",
		title: "Harmony for the Heart: A Music Miracles Concert",
		dateLabel: "April 05, 2025",
		author: "Yuxin Jia and Jason Jia",
		cover: "/images/gallery/04052025/IMG_3298.jpeg",
		postPath: "/data/posts/04052025.js",
		description: `The Music Miracles concert was a wonderful chance for performers of all ages to share their passion 
		for music through piano, violin, and singing at a senior community center. This program was to perform to the seniors 
		to bring them joy and peace`
	},
	{
		title: "A Time of Surprises and Talents",
		dateLabel: "Mar 22, 2025",
		author: "Anne Tang",
		cover: "/images/gallery/03222025/18.jpg",
		postUrl: "/posts/03222025.html",
		description: `The Music Miracles Concert on March 22 had much more variety
than our other concerts. This time, we had two sing-alongs: Ryan and
Shannon, plus Me, Michelle, and Yuxin. We also had a Guzheng
performance played by Erica Zheng, a new piano duet from Yuxin and
Jason and a new separate vocal sang by Aiden.`
	},
	{
		title: "Survey Results of March 22, 2025 Concert",
		dateLabel: "Mar 22, 2025",
		author: "Anne Tang",
		cover: "/images/survey_results.jpg",
		postUrl: "/posts/03222025_survey.html",
		description: `A total of 10 attendees completed the survey regarding their experience at the Music Miracles
concert held at Brightview Great Falls today. Below is a detailed summary of the survey results:`
	},
	{
		title: "Highlights from Music Miracles Concert",
		dateLabel: "Mar 01, 2025",
		author: "Anne Tang",
		cover: "/images/gallery/03012025/1.jpg",
		postUrl: "/posts/03012025.html",
		description: `First, I would like to introduce “Little Red Crowned Crane.” The dancer’s name is Elena and has
		studied hard under Mrs. Xuejuan, a dance teacher.`
	},
	{
		title: "Survey Results of March 01, 2025 Concert",
		dateLabel: "Mar 01, 2025",
		author: "Anne Tang",
		cover: "/images/survey_results.jpg",
		postUrl: "/posts/03012025_survey.html",
		description: `The Music Miracles Concert survey collected 18 responses, providing detailed insights into the 
		attendees&#39; experiences and preferences. Below is a comprehensive summary of the findings:`
	},
	{
		title: "Melodies of Care. Rhythms of Love!",
		dateLabel: "Feb 22, 2025",
		author: "Yuxin Jia",
		cover: "/images/gallery/02222025/yuxin_host.jpg",
		postUrl: "/posts/02222025.html",
		description: `The Music Miracles concert was a wonderful chance for performers of all ages to share their passion 
		for music and movement through piano, violin, and a special kungfu demonstration at a senior community center. This program was to perform to the seniors to bring them joy and peace.`
	}
];
const postTemplate = `
	<article class="flex max-w-xl flex-col items-start justify-between rounded-xl bg-white shadow-md">
		<div>
			<img src="{{cover}}" class="aspect-4/3 size-full rounded-t-xl object-cover w-full">
		</div>
		<div class="px-4 py-5">
			<div class="group relative">
			  <h3 class="text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
				<a href="{{postUrl}}">
					<span class="absolute inset-0"></span>
					{{title}}
					<div class="flex items-center gap-x-4 text-xs ">
					  <time datetime="{{dateLabel}}" class="text-gray-500">{{dateLabel}}</time>
					  <a class="relative z-10 rounded-full bg-gray-50 font-medium text-gray-600 hover:bg-gray-100">By {{author}}</a>
					</div>
				</a>
			  </h3>
			  <p class="mt-4 line-clamp-3 text-sm/6 text-gray-600">{{description}}</p>
			</div>
		</div>
	</article>
`;