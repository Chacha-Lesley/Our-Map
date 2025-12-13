let memories = [
    {
        name: "The Matrix",
        lat: -1.236364,
        lng: 36.71907,
        date: "2022, The Oaks",
        memory: "In our origin story, we will always say that we met, watched The Matrix, and nothing happened. But you know what? We have never finished the Matrix.",
        photo: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800",
        audio: "", // Add your Vocaroo link here: "https://vocaroo.com/xyz.mp3"
        isGolden: false
    },
    {
        name: "I Swear, Not Stalking",
        lat: -1.239254,
        lng: 36.739417, 
        date: "2022, Lower Kabete Campus, NTBIV",
        memory: "I saw you first before you saw me, and if I may ask, were you in a rush to meet me?",
        photo: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800",
        audio: "",
        isGolden: false
    },
    {
        name: "Our Not-Date Date",
        lat: -1.238610,
        lng: 36.728083,
        date: "2023, La Paz",
        memory: "The ONE day I came late that you never let me see the end of!",
        photo: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800",
        audio: "",
        isGolden: false
    },
    {
        name: "Makeshift Washrooms",
        lat: -1.237537,
        lng: 36.739131,
        date: "2023, Kapenguria, LKC",
        memory: "What you did in those cups is inexcusable, but what can I say? I love me an innovator and quick thinker.",
        photo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
        audio: "",
        isGolden: false
    },
    {
        name: "Your Friend's House",
        lat: -1.227728,
        lng: 36.701198,
        date: "2023, Wangige's Friend's House",
        memory: "Who knew you wanted to show me off to your friends?",
        photo: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800",
        audio: "",
        isGolden: false
    },
    {
        name: "Home",
        lat: -1.349779,
        lng: 36.661349,
        date: "Forever, Zambia, Ngong",
        memory: "Home is wherever I'm with you. This is where our story continues, every single day. We also happen to pay rent here.",
        photo: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800",
        audio: "", // Add "I love you" voice note here for extra feels
        isGolden: true // This makes it golden instead of red
    },
    {
        name: "Your Other Friend's House",
        lat: -1.31871,
        lng: 36.79080,
        date: "2023, Langata, Nine's House",
        memory: "Meeting me was soo good you had to show me off to your other friend and her kid",
        photo: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800",
        audio: "",
        isGolden: false
    }, 
    {
        name: "On Top Of The World",
        lat: -1.28801,
        lng: 36.82318,
        date: "2022, KICC",
        memory: "I finally got to physically feel how I feel when I think of you; always like I am on top of the world. I wanted to be on top of you but that was not appropriate.",
        photo: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800",
        audio: "",
        isGolden: false
    },  
    {
        name: "The Plot Getting Thika",
        lat: -1.02323,
        lng: 37.06861,
        date: "2023, Thika",
        memory: "We saw a waterfall, kissed under the rainbow, and made the tour guide uncomfortable as hell!",
        photo: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800",
        audio: "",
        isGolden: false
    },     
    {
        name: "Savouring The Taste",
        lat: -1.20187,
        lng: 36.91857,
        date: "2023, Thika Road",
        memory: "I still think about THAT van ride back; I'd do it all over again.",
        photo: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800",
        audio: "",
        isGolden: false
    },
    {
        name: "In Front of God, Men, and Women",
        lat: -1.31044,
        lng: 36.74940,
        date: "Every Weekend, CVC Church",
        memory: "Who knew you wanted to show me off to your spiritual friends?",
        photo: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800",
        audio: "",
        isGolden: false
    },
    {
        name: "Trixy",
        lat: -1.31037,
        lng: 36.74955,
        date: "2024, Ngong Road Forest",
        memory: "We took 'kupanda miti' a little too literally.",
        photo: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800",
        audio: "",
        isGolden: false
    },
    {
        name: "Bak Bandika Bak Bandua",
        lat: -1.31179,
        lng: 36.74968,
        date: "2024, Ngong Road Forest",
        memory: "I count it as our first hike, and boy, I like seeing you walk ahead of me.",
        photo: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800",
        audio: "",
        isGolden: false
    },
    {
        name: "A Masterpiece On Display",
        lat: -1.31353,
        lng: 36.85424,
        date: "2024, Baraza Media Lab",
        memory: "We went to see art but I am so glad I walked in with THE MASTERPIECE. When the time to leave came, I was harrased ati 'you can't leave with the art'.",
        photo: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800",
        audio: "",
        isGolden: false
    },
    {
        name: "Arms Akimbo For The Vetting",
        lat: -1.14934,
        lng: 36.96604,
        date: "2023, Mex's House",
        memory: "I now had to charm the final boss, Mexine!",
        photo: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800",
        audio: "",
        isGolden: false
    },
    {
        //Missing Restaurant Name
        name: "Graduator-in-Chief!",
        lat: -1.22307,
        lng: 36.83831,
        date: "2023, Graduation Party Place",
        memory: "I was so proud of you! And a by-product of that was meeting YOUR FATHER!",
        photo: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800",
        audio: "",
        isGolden: false
    },
    {
        name: "Graduator-Elect",
        lat: -1.27596,
        lng: 36.81169,
        date: "2023, UON Graduation Square",
        memory: "When beauty with brains got certified and given the power to read, write, and drive me even crazier!",
        photo: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800",
        audio: "",
        isGolden: false
    },
    {
        name: "Corporate Condom & Liquor Dispensary",
        lat: -1.26805,
        lng: 36.76427,
        date: "2024, Saracen Offices",
        memory: "We got them, but never used them; much like we were at the same place but on different times.",
        photo: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800",
        audio: "",
        isGolden: false
    },
    {
        name: "Corporate Baddie",
        lat: -1.31778,
        lng: 36.71846,
        date: "Every Month, CSRI, Kabwagi",
        memory: "Who said you cannot chase the bag while helping people not kill themselves? I am yet to pick up my Rubik's Cube though!",
        photo: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800",
        audio: "",
        isGolden: false
    },
    {
        name: "The OG Lunch Walk",
        lat: -1.31981,
        lng: 36.71765,
        date: "2024, Karen Triangle",
        memory: "When you got bored and we walked to the 'other side'.",
        photo: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800",
        audio: "",
        isGolden: false
    },
    {
        name: "Tao Mbao Mbao Kwa App",
        lat: -1.28444,
        lng: 36.82280,
        date: "2023, Sarova",
        memory: "Charmed the hell out of your friend she had to introduce us to her coworkers. I couldn't believe mayaiiiiiiissss!",
        photo: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800",
        audio: "",
        isGolden: false
    },
    {
        name: "Burger Of The Day",
        lat: -1.28386,
        lng: 36.82480,
        date: "Every Couple Of Weeks, Lazarus",
        memory: "What a way to get out of town, but through the culture; a burger for our troubles.",
        photo: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800",
        audio: "",
        isGolden: false
    },
    {
        name: "It Hurt To See You Go",
        lat: -1.28637,
        lng: 36.82958,
        date: "Every Month, Greenline Buses",
        memory: "Parting was such sweet sorrow, and I used to dread these days FYI.",
        photo: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800",
        audio: "",
        isGolden: false
    },
    {
        name: "More Money, Less Problems",
        lat: -1.28477,
        lng: 36.82023,
        date: "2024, I & M Bank HQ",
        memory: "When we decided we SHALL not joke when it comes to planning the future.",
        photo: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800",
        audio: "",
        isGolden: false
    },
    {
        name: "Carpet Mbao Mbao",
        lat: -1.28463,
        lng: 36.83247,
        date: "2023, Kamukunji",
        memory: "Another errand? Count me in! I'd go around town with you for the love of the game while you were in your 'Minister For Transport' bag.",
        photo: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800",
        audio: "",
        isGolden: false
    },
    {
        name: "Birthday Webs",
        lat: -1.29201,
        lng: 36.79033,
        date: "2024, Anko Retail",
        memory: "It was a well-kept surprise that I did not see coming and I am still grateful for. Quick question, how did you get everyone to shut up about it?",
        photo: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800",
        audio: "",
        isGolden: false
    },
        {
        name: "Kukaribia Murima",
        lat: 0.02988,
        lng: 37.05598,
        date: "2024, Nanyuki",
        memory: "Our first official unofficial Church trip, though I wanted to do unspeakable things in the eyes of God and men to you.",
        photo: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800",
        audio: "",
        isGolden: false
    },
        {
        name: "Slicing The World Kama Mkate",
        lat: 0.00000,
        lng: 37.07020,
        date: "2024, Nanyuki",
        memory: "We went to see the equator, but all I could think about was how you slice through my heart every time you smile at me.",
        photo: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800",
        audio: "",
        isGolden: false
    },
        {
        name: "Mufasa And A Whole Lot Of Giraffes",
        lat: -1.39055,
        lng: 36.86244,
        date: "2024, Nairobi National Park",
        memory: "You finally showed me off to wild animals in the park!",
        photo: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800",
        audio: "",
        isGolden: false
    },
    {
        name: "All The Sweet Things In Life",
        lat: -1.30042,
        lng: 36.78708,
        date: "Every Month, Prestige",
        memory: "Because my darling deserved all the sweet nothings every month. I'm pretty sure the baker knows me by name!",
        photo: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800",
        audio: "",
        isGolden: false
    },
    {
        name: "Nyama Choma Bila Toothpicks",
        lat: -1.35049,
        lng: 36.66002,
        date: "2024, Uptown Mall",
        memory: "Nyama Choma on the rocks after a particularly hard day.",
        photo: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800",
        audio: "",
        isGolden: false
    },
    {
        name: "Burgers On The House",
        lat: -1.25037,
        lng: 36.78981,
        date: "2024, Baobox",
        memory: "There's no price for a full meal and a whole ass date night! We vowed never to speak of our MPesa balances the next day.",
        photo: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800",
        audio: "",
        isGolden: false
    },
    {
        name: "Your Other Other Friend's House",
        lat: -1.04164,
        lng: 37.07746,
        date: "2023, Thika",
        memory: "Yet another showoff to Linda. I wonder how she is doing. I hope still blasting traditional songs.",
        photo: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800",
        audio: "",
        isGolden: false
    },
    {
        name: "The 9/10 That Dentists Prefer",
        lat: -1.36015,
        lng: 36.65676,
        date: "Every Weekend, Ngong Dentist",
        memory: "I know that smile is worth millions, that's why we had to take care of it.",
        photo: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800",
        audio: "",
        isGolden: false
    },
    {
        name: "Nyanya Za Mbao",
        lat: -1.35974,
        lng: 36.65677,
        date: "Every Weekend, Ngong Market",
        memory: "All I needed to do is give you the cash and watch you haggle.",
        photo: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800",
        audio: "",
        isGolden: false
    },
    {
        name: "Drunk People Looking For More Alcohol",
        lat: -1.35675,
        lng: 36.65672,
        date: "2024, Ngong Road",
        memory: "Hazikuwa Zimeshika vizuri, so we had to do some top-up in the rain.",
        photo: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800",
        audio: "",
        isGolden: false
    },
    {
        name: "Sex And The City",
        lat: -1.26610,
        lng: 36.74871,
        date: "2023, Marie Stopes Kangemi",
        memory: "Ah, yes. We went to certify that we did NOT want to be pregnant.",
        photo: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800",
        audio: "",
        isGolden: false
    },
        {
        name: "Two Horny People Looking For a Hotel Room",
        lat: -1.27256,
        lng: 36.81927,
        date: "2022, Stima Plaza, Ngara",
        memory: "Guess what? We didn't find one!",
        photo: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800",
        audio: "",
        isGolden: false
    },
    {
        name: "Two Horny People Looking For Chips",
        lat: -1.27376,
        lng: 36.81943,
        date: "2022, Ngara",
        memory: "Guess what? We found one!",
        photo: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800",
        audio: "",
        isGolden: false
    },
    {
        name: "Two Horny People Looking For Clothes",
        lat: -1.27489,
        lng: 36.81857,
        date: "2022, Think Twice, Ngara",
        memory: "Guess what? We found a lot of them!",
        photo: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800",
        audio: "",
        isGolden: false
    },
    {
        name: "Us Making Purple",
        lat: -1.32852,
        lng: 36.80131,
        date: "2024, Carnivore Grounds",
        memory: "Local man had a huge sugar rush from all the cotton candy, and guess who he had a huge sugar crush on?",
        photo: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800",
        audio: "",
        isGolden: false
    },
    {
        name: "The 'Mon Dieu' Before Adieu",
        lat: -1.23418,
        lng: 36.81059,
        date: "2024, US Embassy",
        memory: "When the clock was ticking...",
        photo: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800",
        audio: "",
        isGolden: false
    },
    {
        name: "Window Shopper Pro Max",
        lat: -1.22897,
        lng: 36.80515,
        date: "2024, Village Market",
        memory: "A contingency plan to lessen the blow of either results from the Embassy.",
        photo: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800",
        audio: "",
        isGolden: false
    },
    {
        name: "The UN At My Feet",
        lat: -1.22993,
        lng: 36.81023,
        date: "2024, UN Road",
        memory: "Passing time while you were at the Embassy.",
        photo: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800",
        audio: "",
        isGolden: false
    },
    {
        name: "So High In The Skies!",
        lat: -1.33117,
        lng: 36.92394,
        date: "2024, JKIA Local Flights",
        memory: "As it was concluded, planes are way faster than Ubers; but I want a rematch!",
        photo: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800",
        audio: "",
        isGolden: false
    },
    {
        name: "One Last Goodbye",
        lat: -1.32953,
        lng: 36.92600,
        date: "2024, JKIA International Flights",
        memory: "Go forth to the world and conquer!",
        photo: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800",
        audio: "",
        isGolden: false
    },
    {
        name: "Could You Be Pregnant?",
        lat: -1.26053,
        lng: 36.80193,
        date: "2023, Sarit Center",
        memory: "We just had to entertain the thought.",
        photo: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800",
        audio: "",
        isGolden: false
    },
    {
        name: "A Book A Day Keeps The Tablet Away",
        lat: -1.26072,
        lng: 36.80154,
        date: "2023, Sarit",
        memory: "When we made a 'quick stop' and left with a SHIZU book.",
        photo: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800",
        audio: "",
        isGolden: false
    },
    {
        name: "Munchies",
        lat: -1.26035,
        lng: 36.80174,
        date: "2023, Sarit Center",
        memory: "Who's idea was it to watch a film when high? We ended up savouring some wings and Sprite that tasted like Heaven!",
        photo: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800",
        audio: "",
        isGolden: false
    },
    {
        name: "Homa Ya Kumaliza Watu",
        lat: -1.32800,
        lng: 36.68312,
        date: "2024, Kerarapon",
        memory: "Apparently where you saw the Late sneezing and snorting.",
        photo: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800",
        audio: "",
        isGolden: false
    },
];

// ========================================
// HOW TO GET COORDINATES:
// 1. Go to Google Maps
// 2. Right-click on any location
// 3. Click the coordinates at the top (e.g., 18.9441, 72.8232)
// 4. Copy and paste as lat/lng
//
// Or use: https://www.latlong.net/
// ========================================

// ========================================
// HOW TO ADD PHOTOS:
// 1. Upload to imgur.com (free, no account needed)
// 2. Click "Copy Link" → Choose "Direct Link"
// 3. Paste as photo URL
//
// Example: "https://i.imgur.com/abc123.jpg"
// ========================================

// ========================================
// HOW TO ADD VOICE NOTES:
// 1. Record on your phone (10-20 seconds)
// 2. Go to vocaroo.com
// 3. Upload your recording
// 4. Copy the link
// 5. Paste as audio URL
//
// Example: "https://vocaroo.com/1a2b3c4d.mp3"
// ======================================== 