export interface Destination {
  id: string;
  name: string;
  image: string;
  description: string;
  highlights: {
    adventure: string;
    food: string;
    culture: string;
  };
  details: {
    bestTime: string;
    visaHack: string;
    vegSurvival: string;
    topAdventures: string[];
    proTip: string;
  };
}

export const destinations: Destination[] = [
  // ─── Countries with my own photos (first) ───────────────────────
  {
    id: "turkey",
    name: "Turkey",
    image: "/Turkey/IMG_9172.jpg",
    description: "Where East meets West, rich in history and dramatic landscapes.",
    highlights: {
      adventure: "Hot air ballooning over the surreal chimneys of Cappadocia.",
      food: "Lavish vegetarian Mezze platters, warm pita, and Baklava.",
      culture: "The Hagia Sophia and wandering the Grand Bazaar."
    },
    details: {
      bestTime: "April to May and September to October",
      visaHack: "Indians with a valid US, UK, or Schengen visa get an instant Turkish e-Visa online.",
      vegSurvival: "Turkish cuisine is surprisingly veg-friendly. Load up on 'Meze', hummus, lentil soup (Mercimek Çorbası), and stuffed grape leaves. Specify 'Etsiz' (without meat).",
      topAdventures: ["Hot Air Ballooning in Cappadocia", "Paragliding in Ölüdeniz", "Windsurfing in Alaçatı"],
      proTip: "Haggling and bargaining in the Grand Bazaar is expected. Start your bid at 50% of their asking price."
    }
  },
  {
    id: "switzerland",
    name: "Switzerland",
    image: "/Switzerland/IMG_1476.jpg",
    description: "Postcard-perfect alpine scenery and precision engineering.",
    highlights: {
      adventure: "World-class skiing and paragliding in the Swiss Alps.",
      food: "Indulgent warm Swiss Cheese Fondue and luxury chocolates.",
      culture: "Scenic glacial train rides and picturesque chalets."
    },
    details: {
      bestTime: "June to August (hiking), December to March (skiing)",
      visaHack: "Schengen Visa. Swiss embassy is usually prompt but strict; provide full train and hotel bookings.",
      vegSurvival: "A bit pricey, but Cheese fondue, Rösti (potato pancake), and raclette are rich and fulfilling.",
      topAdventures: ["Paragliding in Interlaken", "Skiing in Zermatt near the Matterhorn", "Bungee Jumping like James Bond in Ticino"],
      proTip: "Buy a Swiss Travel Pass—it covers trains, buses, boats, and up to 500 museums seamlessly."
    }
  },
  {
    id: "norway",
    name: "Norway",
    image: "/Norway/IMG_7317.jpg",
    description: "Unmatched natural beauty with deep fjords and northern lights.",
    highlights: {
      adventure: "Steep fjord hiking and sea kayaking in freezing waters.",
      food: "Hearty root vegetable dishes and Nordic-style baked goods.",
      culture: "Fascinating Viking heritage and minimalist lifestyle."
    },
    details: {
      bestTime: "June to August (Midnight Sun), October to March (Northern Lights)",
      visaHack: "Schengen visa required. Norway is expensive, bank statement requirements are high.",
      vegSurvival: "Can be tough. Mostly root vegetables, potatoes, and bread. However, supermarkets sell excellent frozen plant-based patties.",
      topAdventures: ["Hiking Trolltunga", "Chasing the Northern Lights in Tromsø", "Backcountry skiing"],
      proTip: "Download 'Vy' for trains. Buy your alcohol in duty-free before entering the country as domestic prices are astronomical."
    }
  },
  {
    id: "italy",
    name: "Italy",
    image: "/Italy/IMG_6247.jpg",
    description: "The heart of art, renaissance, and globally loved cuisine.",
    highlights: {
      adventure: "Cycling through Tuscany and hiking the Cinque Terre.",
      food: "Authentic Margherita pizzas and fresh vegetarian pastas everywhere.",
      culture: "Renaissance art in Florence and the ruins of Rome."
    },
    details: {
      bestTime: "April to June or September to October",
      visaHack: "Schengen Visa required. Provide a comprehensive itinerary and strong financial proof when applying from India.",
      vegSurvival: "A vegetarian paradise! Authentic wood-fired Margherita pizza, pasta aglio e olio, and endless gelato. Ask for 'senza carne' (without meat).",
      topAdventures: ["Hiking the Dolomites", "Cycling the Chianti wine region", "Skiing in the Italian Alps"],
      proTip: "Never ask for pineapple on your pizza, and Italians don't drink cappuccinos after 11 AM!"
    }
  },
  {
    id: "maldives",
    name: "Maldives",
    image: "/Maldives/IMG_0393.JPG",
    description: "A tropical paradise featuring overwater bungalows and clear reefs.",
    highlights: {
      adventure: "Unreal snorkeling and scuba diving with manta rays.",
      food: "Lavish resort buffets accommodating every vegetarian request.",
      culture: "Relaxed island life and pristine coral conservation."
    },
    details: {
      bestTime: "November to April",
      visaHack: "Free 30-day Visa on Arrival for Indians. Just fill out the IMUGA traveler declaration online before flying.",
      vegSurvival: "Resorts cater heavily to Indian tourists, so Indian chefs and massive vegetarian buffet spreads are standard.",
      topAdventures: ["Scuba Diving with Manta Rays & Whale Sharks", "Flyboarding", "Night Snorkeling"],
      proTip: "Save money by staying on a 'Local Island' (like Maafushi) rather than a luxury resort island."
    }
  },
  {
    id: "usa",
    name: "USA",
    image: "/USA/IMG_3390.jpg",
    description: "The classic American road trip destination with endless variety.",
    highlights: {
      adventure: "Hiking the Grand Canyon and watching live NBA/NFL games.",
      food: "Next-level plant-based burgers and diverse food truck culture.",
      culture: "Iconic museums in NY and the entertainment magic of Hollywood."
    },
    details: {
      bestTime: "May to September (varies heavily by state)",
      visaHack: "B1/B2 tourist visa appointments in India have long wait times; book a slot a year in advance if possible.",
      vegSurvival: "Every restaurant offers an 'Impossible' or 'Beyond' veg burger. Mexican spots (Taco Bell, Chipotle) are the absolute lifesaver for vegetarians.",
      topAdventures: ["Hiking Half Dome in Yosemite", "Skydiving in Hawaii", "Attending an authentic NBA/NFL game live"],
      proTip: "Tipping 18-20% is mandatory in restaurants."
    }
  },
  {
    id: "uk",
    name: "United Kingdom",
    image: "/UK/IMG_20180706_185852.jpg",
    description: "A blend of rich royal history and cutting-edge diverse culture.",
    highlights: {
      adventure: "Catching a high-octane Premier League football match.",
      food: "Some of the best Indian vegetarian restaurants outside of India.",
      culture: "Touring ancient castles and the bustling streets of London."
    },
    details: {
      bestTime: "May to September",
      visaHack: "UK Standard Visitor Visa processing takes about 3 weeks; it's separate from Schengen.",
      vegSurvival: "Almost impossible to find better Desi food. Head to Southall or Wembley in London, or the Curry Mile in Manchester. Everywhere has clearly labeled 'V' options.",
      topAdventures: ["Hiking the Scottish Highlands", "Watching a live Premier League game", "Coasteering in Wales"],
      proTip: "If you want to catch a football match, buy tickets on the club's official website months in advance."
    }
  },
  {
    id: "vietnam",
    name: "Vietnam",
    image: "/Vietnam/IMG_4263.jpg",
    description: "A dynamic country with dramatic landscapes and bustling scooters.",
    highlights: {
      adventure: "Caving in Phong Nha and motorbike tours through the mountains.",
      food: "Flavorful Vegetarian Pho and crispy tofu Banh Mi.",
      culture: "The historic Cu Chi Tunnels and lantern-lit Hoi An."
    },
    details: {
      bestTime: "March to April (Spring) or Autumn",
      visaHack: "Easy online e-Visa for Indians, usually processed within 3-4 working days.",
      vegSurvival: "Look for the word 'Chay' (Vegetarian). Buddhist vegetarian restaurants (Quán Chay) are cheap and incredibly tasty.",
      topAdventures: ["Motorbike riding the Ha Giang Loop", "Exploring the world's largest caves in Phong Nha", "Kitesurfing in Mui Ne"],
      proTip: "To cross the street in Hanoi or HCMC, walk slowly and steadily. The scooters will drive around you!"
    }
  },
  {
    id: "south-africa",
    name: "South Africa",
    image: "/South Africa/IMG_20171023_130727.jpg",
    description: "Diverse landscapes ranging from safaris to rugged coastlines.",
    highlights: {
      adventure: "Kruger National Park safaris and shark cage diving.",
      food: "Vegetarian Bunny Chow and localized plant-based Braai options.",
      culture: "Deep dive into Zulu heritage and the history of Nelson Mandela."
    },
    details: {
      bestTime: "May to September (best for wildlife viewing)",
      visaHack: "Apply for the e-Visa early; processing can take time. Ensure you carry your yellow fever certificate if transiting through parts of Africa.",
      vegSurvival: "A large Indian diaspora in Durban means amazing Indian veg food. You MUST try a Veg 'Bunny Chow' (hollowed out bread filled with curry).",
      topAdventures: ["Shark Cage Diving in Gansbaai", "Bungee Jumping at Bloukrans Bridge", "Surfing in Cape Town"],
      proTip: "Never walk alone at night in major cities; always take an Uber, even for short distances."
    }
  },
  {
    id: "france",
    name: "France",
    image: "/France/IMG_2432.jpg",
    description: "Synonymous with romance, refined tastes, and monumental history.",
    highlights: {
      adventure: "Snowboarding in Chamonix and cycling the country roads.",
      food: "Decadent vegetarian crepes, fresh baguettes, and fine cheeses.",
      culture: "The vast halls of the Louvre and monumental Eiffel Tower."
    },
    details: {
      bestTime: "April to June, September to November",
      visaHack: "France is usually the most efficient Schengen embassy in India; VFS slots open regularly.",
      vegSurvival: "Stick to bakeries (Boulangeries) for fresh baguettes and cheese. Veg crepes in Brittany are world-class. Say 'Je suis végétarien(ne)'.",
      topAdventures: ["Snowboarding in the French Alps (Chamonix)", "Surfing in Biarritz", "Cycling the Tour de France routes"],
      proTip: "Always greet shopkeepers with a polite 'Bonjour' when entering. It's culturally essential."
    }
  },
  {
    id: "greece",
    name: "Greece",
    image: "/Greece/IMG_2476.jpg",
    description: "Sun-drenched islands with iconic architecture and ancient myths.",
    highlights: {
      adventure: "Windsurfing in the Aegean and sailing endless island routes.",
      food: "Fresh Greek salads, Spanakopita, and savory olive oils.",
      culture: "Exploring the Acropolis and the origins of the Olympics."
    },
    details: {
      bestTime: "April to June and September to October (avoids the heavy summer crowds)",
      visaHack: "Requires a Schengen Visa. Apply via the Greek embassy as it's sometimes faster than France or Germany.",
      vegSurvival: "Mediterranean diet is perfect for vegetarians. Greek salad (Horiatiki), tzatziki, feta, and spinach pies (Spanakopita) will keep you very happy.",
      topAdventures: ["Kitesurfing in Naxos", "Deep water soloing in Kalymnos", "Hiking the Samaria Gorge in Crete"],
      proTip: "Island hopping by ferry takes longer than you think. Pre-book your fast ferry tickets online."
    }
  },
  {
    id: "belgium",
    name: "Belgium",
    image: "/Belgium/IMG_2468.jpg",
    description: "A compact European gem famous for its medieval towns and sweets.",
    highlights: {
      adventure: "Urban cycling and exploring endless cobblestone trails.",
      food: "World-class chocolates and warm, sweet Belgian waffles.",
      culture: "The fairytale architecture of Bruges and Ghent."
    },
    details: {
      bestTime: "April to June, September to October",
      visaHack: "Schengen Visa applies. Often coupled with trips to France or Netherlands.",
      vegSurvival: "Fries (Frites)! But be careful, traditional Belgian fries are cooked in beef fat, so ask for 'frites végétaliennes'. Sweet waffles will be your best friend.",
      topAdventures: ["Urban cycling across Ghent and Antwerp", "Kayaking in the Ardennes", "Kite buggyling on the coast"],
      proTip: "Brussels has two main languages (French and Dutch), make sure you check the spelling of your train stations carefully."
    }
  },
  {
    id: "netherlands",
    name: "Netherlands",
    image: "/Netherlands/IMG_1919.jpg",
    description: "A picturesque land of canals, progressive thinking, and bicycles.",
    highlights: {
      adventure: "Biking along the endless canals of Amsterdam.",
      food: "Hot Stroopwafels and discovering incredible Surinamese veg food.",
      culture: "Van Gogh's masterpieces and historic Dutch windmills."
    },
    details: {
      bestTime: "Mid-April to early May for the Tulip season",
      visaHack: "Schengen visa required. Get an OV-chipkaart as soon as you land for seamless public transport.",
      vegSurvival: "Dutch love cheese (Gouda/Edam). You must try hot Stroopwafels from street markets. Also, explore Surinamese spots for great spicy veg roti.",
      topAdventures: ["Biking the Dutch countryside", "Ice skating on frozen canals (winter)", "Kitesurfing in Zandvoort"],
      proTip: "Bicycles rule the road. Never walk in the red bicycle lanes, you will get run over!"
    }
  },
  {
    id: "sweden",
    name: "Sweden",
    image: "/Sweden/IMG_2412.jpg",
    description: "The epitome of sleek design, deep forests, and archipelago living.",
    highlights: {
      adventure: "Wild ice skating and exploring massive archipelagos.",
      food: "Plant-based alternatives to classic Swedish meatballs.",
      culture: "Iconic Nordic design and the maritime Vasa Museum."
    },
    details: {
      bestTime: "June to August",
      visaHack: "Schengen visa required.",
      vegSurvival: "Swedes are highly progressive. Almost every restaurant has strong vegetarian and vegan options. Enjoy a sweet 'Fika' (coffee and cinnamon bun).",
      topAdventures: ["Wild Ice Skating in Stockholm", "Kayaking the Archipelago", "Snowmobiling in Swedish Lapland"],
      proTip: "Sweden is largely a cashless society. Your forex or international credit card will be used for absolutely everything."
    }
  },
  {
    id: "uae",
    name: "UAE",
    image: "/UAE/20230709_193958.jpg",
    description: "A desert oasis defined by futuristic skylines and luxury.",
    highlights: {
      adventure: "Dune bashing, indoor skiing, and skydiving over the Palm.",
      food: "Lavish vegetarian spreads and premium Indian dining in Dubai.",
      culture: "The colossal Burj Khalifa and beautiful Sheikh Zayed Mosque."
    },
    details: {
      bestTime: "November to March (pleasant desert winters)",
      visaHack: "Very easy e-Visa process. Indian passport holders with a valid US visa or green card can get a Visa on Arrival.",
      vegSurvival: "Incredible Indian vegetarian food everywhere. Karama and Bur Dubai are packed with authentic Gujarati Thali places.",
      topAdventures: ["Skydiving over Palm Jumeirah", "Desert dune bashing & sandboarding", "Scuba diving in Fujairah"],
      proTip: "Fridays are half days, and the weekend is Saturday and Sunday. Avoid public displays of affection."
    }
  },
  {
    id: "sri-lanka",
    name: "Sri Lanka",
    image: "/Sri Lanka/IMG_0746.jpg",
    description: "An island rich in biodiversity, rolling tea gardens, and surf.",
    highlights: {
      adventure: "Catching waves while surfing in Arugam Bay.",
      food: "Intensely flavored coconut and jackfruit vegetarian curries.",
      culture: "Ancient rock fortresses and majestic elephant sanctuaries."
    },
    details: {
      bestTime: "December to March (South/West), May to September (East Coast)",
      visaHack: "e-Visa is easily available and currently offers free or reduced fee promos for Indian tourists.",
      vegSurvival: "Superb. Spicy dal, coconut sambol, and jackfruit curry. The flavors are very close to South Indian but with unique twists.",
      topAdventures: ["Surfing in Arugam Bay or Weligama", "Hiking Adam's Peak at night", "Wildlife Safari in Yala"],
      proTip: "Take the Kandy to Ella train ride—it's considered one of the most scenic train journeys in the world."
    }
  },
  {
    id: "vatican",
    name: "Vatican",
    image: "/Vatican/IMG_2242.jpg",
    description: "The smallest state in the world, holding immense artistic wealth.",
    highlights: {
      adventure: "Endless walking tours discovering hidden historical details.",
      food: "Stepping just outside for classic Roman vegetarian pasta.",
      culture: "The breathtaking ceiling of the Sistine Chapel."
    },
    details: {
      bestTime: "April to June or September to October (same as Rome)",
      visaHack: "No physical border controls. You enter from Rome, Italy, so your Italian Schengen Visa covers it.",
      vegSurvival: "You eat right outside in Rome. Vegetarian pizzas, Cacio e Pepe, and gelato.",
      topAdventures: ["Climbing up the dome of St. Peter's Basilica for epic views", "Exploring the Vatican Necropolis"],
      proTip: "To skip the multi-hour lines, book a 'Skip the Line' early morning pass months in advance."
    }
  },

  // ─── Countries without own photos ───────────────────────────────
  {
    id: "thailand",
    name: "Thailand",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=1200",
    description: "A perfect blend of vibrant street life, pristine beaches, and ancient spirituality.",
    highlights: {
      adventure: "Scuba diving in Koh Tao and Muay Thai boxing sessions.",
      food: "Incredible vegetarian Pad Thai and sweet mango sticky rice.",
      culture: "Grand temples in Chiang Mai and bustling floating markets."
    },
    details: {
      bestTime: "November to April (cool and dry season)",
      visaHack: "Indians usually get Visa on Arrival, but applying for an e-Visa beforehand saves 1-2 hours of airport queues.",
      vegSurvival: "Learn to say 'Mang sa wi rat' (Vegetarian) or 'Jay' (Strict Vegan/Jain-style). Indian restaurants are everywhere in Bangkok and Pattaya.",
      topAdventures: ["Scuba Diving in Koh Tao", "Rock Climbing at Railay Beach", "Muay Thai training in Phuket"],
      proTip: "Download the Grab app for safe, cheap taxis and food delivery."
    }
  },
  {
    id: "malaysia",
    name: "Malaysia",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&q=80&w=1200",
    description: "A multicultural hub boasting rainforests, high-tech cities, and deep heritage.",
    highlights: {
      adventure: "Trekking in Taman Negara and jungle canopy walks.",
      food: "Fantastic Indian-vegetarian spots in Little India and Penang.",
      culture: "Exploring the majestic Batu Caves and colonial Georgetown."
    },
    details: {
      bestTime: "March to early November (East coast), Year-round for West coast",
      visaHack: "Malaysia frequently offers visa-free entry for Indian passport holders (check current regulations) or an easy e-Visa.",
      vegSurvival: "Head straight to 'Little India' in Brickfields, Kuala Lumpur, or Penang. Pure veg South/North Indian food is cheap and plentiful.",
      topAdventures: ["Hiking up Mount Kinabalu", "Skydiving in Langkawi", "White water rafting in Selangor"],
      proTip: "Use the KTM Komuter and LRT in KL. It connects almost everywhere seamlessly."
    }
  },
  {
    id: "singapore",
    name: "Singapore",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=1200",
    description: "An ultra-modern garden city that constantly pushes the boundaries of innovation.",
    highlights: {
      adventure: "Night Safari and thrilling rides at Universal Studios.",
      food: "Endless vegetarian hawker center options and mock-meat delicacies.",
      culture: "Futuristic Gardens by the Bay and vibrant ethnic enclaves."
    },
    details: {
      bestTime: "February to April (slightly less rainfall)",
      visaHack: "e-Visa must be applied through an authorized visa agent in India securely.",
      vegSurvival: "Finding pure veg food is a breeze. Check out 'Komala Vilas' in Little India or the vegetarian stalls at Maxwell Food Centre.",
      topAdventures: ["Indoor Skydiving at iFly", "Night cycling around Marina Bay", "Wakeboarding at East Coast Park"],
      proTip: "Tap your contactless credit/debit card on the MRT and buses. No need to buy separate transit cards."
    }
  },
  {
    id: "canada",
    name: "Canada",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&q=80&w=1200",
    description: "Vast wilderness, friendly locals, and stunning alpine lakes.",
    highlights: {
      adventure: "Skiing in Banff and hiking the wild Rockies.",
      food: "Vegetarian Poutine with mushroom gravy and maple treats.",
      culture: "Inclusive metro areas and beautiful First Nations art."
    },
    details: {
      bestTime: "June to September (for hiking), December to March (for skiing)",
      visaHack: "If you hold a valid US visitor visa, you might be eligible for a quick eTA (Electronic Travel Authorization) instead of a full visa.",
      vegSurvival: "Major cities (Toronto, Vancouver) have fantastic vegan/vegetarian scenes. Ask for veg gravy for your Poutine, as traditional gravy contains meat.",
      topAdventures: ["Snowboarding in Whistler", "Kayaking with Orcas in Vancouver Island", "Hiking the Icefields Parkway"],
      proTip: "Distances are massive. Domestic flights are expensive, so plan road trips carefully."
    }
  },
  {
    id: "qatar",
    name: "Qatar",
    image: "https://images.unsplash.com/photo-1573108037329-37aa135a142e?auto=format&fit=crop&q=80&w=1200",
    description: "A fast-growing cultural powerhouse mixing tradition and modernity.",
    highlights: {
      adventure: "Desert safaris and reliving the energy of the World Cup.",
      food: "Rich Middle Eastern mezze, hummus, and falafel feasts.",
      culture: "The awe-inspiring Museum of Islamic Art in Doha."
    },
    details: {
      bestTime: "November to Early April",
      visaHack: "Visa-free entry or Visa on Arrival for Indian citizens (check the Hayya portal rules).",
      vegSurvival: "Fantastic Middle Eastern vegetarian food - Hummus, Mutabal, Falafel. There are also many Indian restaurants serving pure veg.",
      topAdventures: ["Kite surfing at Fuwairit", "Inland Sea desert safari", "Jet skiing the Doha skyline"],
      proTip: "Dress modestly in public areas (shoulders and knees covered) out of respect for local laws."
    }
  },
  {
    id: "nepal",
    name: "Nepal",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=1200",
    description: "The ultimate Himalayan kingdom for trekkers and spiritual seekers.",
    highlights: {
      adventure: "The supreme challenge of the Everest Base Camp trek.",
      food: "Nutritious and delicious vegetarian Dal Bhat.",
      culture: "Peaceful Buddhist monasteries and the streets of Kathmandu."
    },
    details: {
      bestTime: "October to November (clear skies), March to May (flowers blooming)",
      visaHack: "Indian citizens do NOT need a visa. Just carry your original Passport or Voter ID.",
      vegSurvival: "Extremely easy! 'Dal Bhat Power, 24 Hour'. Momos (dumplings) and lentil soups are staple vegetarian fare.",
      topAdventures: ["Everest Base Camp Trek", "White water rafting the Trishuli River", "Paragliding in Pokhara"],
      proTip: "ATMs in the mountains are unreliable. Carry enough cash from Kathmandu or Pokhara for your trekking days."
    }
  },
  {
    id: "germany",
    name: "Germany",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=1200",
    description: "A powerhouse of deep history, dense forests, and engineering.",
    highlights: {
      adventure: "Driving the Autobahn and intense Bundesliga football games.",
      food: "Giant pretzels and modern vegan/vegetarian Bratwurst spots.",
      culture: "The sobering history of the Berlin Wall and grand castles."
    },
    details: {
      bestTime: "May to September",
      visaHack: "Schengen visa required. Book appointments far in advance.",
      vegSurvival: "Berlin is officially the vegan capital of Europe. Elsewhere, ask for Kartoffelpuffer (potato pancakes) or huge Brezel (Pretzels).",
      topAdventures: ["Driving flat-out on the Autobahn", "Experiencing the Yellow Wall at a Dortmund game", "Hiking the Black Forest"],
      proTip: "Always carry some cash; many restaurants and small shops still refuse credit cards."
    }
  },
];
