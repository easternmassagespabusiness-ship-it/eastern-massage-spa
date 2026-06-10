1| export type ServiceItem = {
2|   name: string;
3|   price: string;
4| };
5| 
6| export type AddonItem = {
7|   name: string;
8|   price: string;
9|   description: string;
10| };
11| 
12| export type ServiceFaq = {
13|   question: string;
14|   answer: string;
15| };
16| 
17| export type ReviewTestimonial = {
18|   quote: string;
19|   author: string;
20|   source: string;
21| };
22| 
23| export type Service = {
24|   slug: string;
25|   category: string;
26|   subtitle?: string;
27|   seoTitle: string;
28|   metaDescription: string;
29|   bookingLabel: string;
30|   bookingUrlPlaceholder: string;
31|   primaryKeyword: string;
32|   description: string;
33|   intro: string;
34|   benefits: string[];
35|   bestFor: string[];
36|   whatToExpect: string[];
37|   beforeAppointment: string[];
38|   duringSession: string[];
39|   aftercare: string[];
40|   chooseDifferent: string;
41|   safetyNote: string;
42|   items: ServiceItem[];
43|   faqs: ServiceFaq[];
44| };
45| 
46| type SiteFaq = {
47|   question: string;
48|   answer: string;
49| };
50| 
51| export const site = {
52|   name: "Eastern Massage Spa",
53|   legalName: "Eastern Massage Spa",
54|   publicNamePlaceholder: "[OFFICIAL_BUSINESS_NAME]",
55|   url: "https://easternmassagespa.me",
56|   description:
57|     "Massage therapy in Issaquah, WA offering deep tissue massage, targeted therapeutic massage, relaxation massage, and cupping therapy near downtown Issaquah.",
58|   phone: "(206) 750-6868",
59|   phoneE164: "+12067506868",
60|   phoneHref: "tel:+12067506868",
61|   emailPlaceholder: "[OFFICIAL_EMAIL_IF_PUBLIC]",
62|   bookingUrl:
63|     "https://www.fresha.com/book-now/eastern-wellness-center-i9qpjgss/all-offer?share=true&pId=812456",
64|   genericBookingUrlPlaceholder: "[GENERIC_FRESHA_BOOKING_URL]",
65|   bookingCtaLabel: "Check Availability",
66|   giftCardUrlPlaceholder: "[FRESHA_GIFT_CARD_URL]",
67|   packageUrlPlaceholder: "[FRESHA_PACKAGE_URL]",
68|   mapUrl:
69|     "https://www.google.com/maps/dir//160+NW+Gilman+Blvd+Ste+216,+Issaquah,+WA+98027",
70|   mapEmbedUrlPlaceholder: "[GOOGLE_MAPS_EMBED_URL]",
71|   address: {
72|     streetAddress: "160 NW Gilman Blvd Ste 216",
73|     suitePlaceholder: "[OFFICIAL_SUITE_OR_UNIT]",
74|     addressLocality: "Issaquah",
75|     addressRegion: "WA",
76|     postalCode: "98027",
77|     addressCountry: "US",
78|   },
79|   geo: {
80|     latitude: 47.5390509,
81|     longitude: -122.0384037,
82|   },
83|   priceRange: "$$",
84|   images: {
85|     logo: "/logo/optimized/mainlogo-512.webp",
86|     hero: "/photos/optimized/hero-1000.webp",
87|     heroLarge: "/photos/optimized/hero-1600.webp",
88|     services: "/photos/optimized/services-1200.webp",
89|     location: "/photos/optimized/location-900.webp",
90|     og: "/photos/optimized/og-home.jpg",
91|     michelle: "/photos/optimized/michelle-picture.jpg",
92|   },
93|   hoursConfirmed: true,
94|   hoursText: "Open daily 10:30 AM - 9:30 PM",
95|   hoursNote: "Open daily. Online booking shows the most current appointment availability.",
96|   hours: [
97|     {
98|       label: "Monday",
99|       hours: "10:30 AM - 9:30 PM",
100|       days: ["Monday"],
101|       opens: "10:30",
102|       closes: "21:30",
103|     },
104|     {
105|       label: "Tuesday",
106|       hours: "10:30 AM - 9:30 PM",
107|       days: ["Tuesday"],
108|       opens: "10:30",
109|       closes: "21:30",
110|     },
111|     {
112|       label: "Wednesday",
113|       hours: "10:30 AM - 9:30 PM",
114|       days: ["Wednesday"],
115|       opens: "10:30",
116|       closes: "21:30",
117|     },
118|     {
119|       label: "Thursday",
120|       hours: "10:30 AM - 9:30 PM",
121|       days: ["Thursday"],
122|       opens: "10:30",
123|       closes: "21:30",
124|     },
125|     {
126|       label: "Friday",
127|       hours: "10:30 AM - 9:30 PM",
128|       days: ["Friday"],
129|       opens: "10:30",
130|       closes: "21:30",
131|     },
132|     {
133|       label: "Saturday",
134|       hours: "10:30 AM - 9:30 PM",
135|       days: ["Saturday"],
136|       opens: "10:30",
137|       closes: "21:30",
138|     },
139|     {
140|       label: "Sunday",
141|       days: ["Sunday"],
142|       hours: "10:30 AM - 9:30 PM",
143|       opens: "10:30",
144|       closes: "21:30",
145|     },
146|   ],
147|   practitioner: {
148|     firstName: "Michelle",
149|     fullName: "Michelle",
150|     title: "Licensed Massage Therapist",
151|     licenseNumber: "[MICHELLE_LICENSE_NUMBER_IF_PUBLIC]",
152|     yearsExperience: "[MICHELLE_YEARS_EXPERIENCE]",
153|     credentials: "Licensed Massage Therapist",
154|     specialties: "[MICHELLE_SPECIALTIES]",
155|     approach: "[MICHELLE_APPROACH]",
156|     shortBio:
157|       "Michelle is a licensed massage therapist and the primary practitioner at Eastern Massage Spa in Issaquah.",
158|     longBio:
159|       "Michelle is a licensed massage therapist serving clients at Eastern Massage Spa in Issaquah. Her massage work is focused, responsive, and centered on the areas clients want addressed durin[...]
160|     associations: "[PROFESSIONAL_ASSOCIATIONS]",
161|     languages: "[LANGUAGES_SPOKEN_IF_RELEVANT]",
162|     photoAlt: "Michelle, licensed massage therapist at Eastern Massage Spa",
163|   },
164|   reviews: {
165|     summary:
166|       "Reviewed by local clients on Google, Fresha, and Birdeye, including a 5.0 Fresha rating from 32 reviews.",
167|     sources: [
168|       {
169|         name: "Google",
170|         rating: "4.9",
171|         count: "55",
172|         url: "https://www.google.com/search?q=eastern+massage+spa+issaquah&rlz=1C5CHFA_enUS1011US1011&oq=eastern+massage+spa+issaquah&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyCAgCEAAYF[...
173|       },
174|       {
175|         name: "Fresha",
176|         rating: "5.0",
177|         count: "32",
178|         url: "https://www.fresha.com/book-now/eastern-wellness-center-i9qpjgss/all-offer?share=true&pId=812456",
179|       },
180|       {
181|         name: "Birdeye",
182|         rating: "4.8",
183|         count: "54",
184|         url: "https://reviews.birdeye.com/eastern-massage-spa-170070692127766",
185|       },
186|     ],
187|     testimonials: [
188|       {
189|         author: "Allison Lindelef",
190|         source: "Google",
191|         quote:
192|           "Highly recommend Eastern Massage and Michelle's work is excellent! She listened where my areas of focus were and really spent time on those areas. This was the best massage I've had in[...
193|       },
194|       {
195|         author: "Frank S",
196|         source: "Fresha",
197|         quote:
198|           "Such an amazing experience! Clean, spacious, well appointed rooms with top end massage tables. Experienced professionals that are polite, thoughtful, and caring. Fair pricing, excellen[...
199|       },
200|       {
201|         author: "KROenke Ficker",
202|         source: "Birdeye",
203|         quote:
204|           "The session was targeted and responsive. I left with real results and highly recommend Eastern Massage Spa for therapeutic work.",
205|       },
206|     ],
207|   },
208|   businessStats: [
209|     {
210|       label: "Appointments completed",
211|       value: "784",
212|     },
213|     {
214|       label: "Clients served",
215|       value: "549",
216|     },
217|   ],
218|   locationDetails: {
219|     parking: "[PARKING_INSTRUCTIONS]",
220|     buildingEntry: "[BUILDING_ENTRY_INSTRUCTIONS]",
221|     suiteDirections: "[SUITE_DIRECTIONS]",
222|     accessibility: "[ACCESSIBILITY_NOTES]",
223|     landmarks: "[NEARBY_LANDMARKS]",
224|     transit: "[TRANSIT_OR_PARKING_NOTES]",
225|     appointmentType: "[APPOINTMENT_ONLY_OR_WALK_IN]",
226|   },
227|   policies: {
228|     cancellation: "[CANCELLATION_POLICY]",
229|     lateArrival: "[LATE_ARRIVAL_POLICY]",
230|     noShow: "[NO_SHOW_POLICY]",
231|     refund: "[REFUND_POLICY]",
232|     giftCard: "[GIFT_CARD_POLICY]",
233|     package: "[PACKAGE_POLICY]",
234|     intake: "[INTAKE_POLICY]",
235|   },
236|   profiles: {
237|     googleBusiness: "[GOOGLE_BUSINESS_PROFILE_URL]",
238|     appleMaps: "[APPLE_MAPS_URL]",
239|     bingPlaces: "[BING_PLACES_URL]",
240|     yelp: "[YELP_URL]",
241|     birdeye: "https://reviews.birdeye.com/eastern-massage-spa-170070692127766",
242|     fresha:
243|       "https://www.fresha.com/book-now/eastern-wellness-center-i9qpjgss/all-offer?share=true&pId=812456",
244|     facebook: "[FACEBOOK_URL]",
245|     instagram: "[INSTAGRAM_URL]",
246|     linkedIn: "[LINKEDIN_URL_IF_ANY]",
247|     other: "[OTHER_OFFICIAL_PROFILE_URLS]",
248|   },
249|   services: [
250|     {
251|       slug: "deep-tissue-therapy",
252|       category: "Advanced Recovery Therapy",
253|       subtitle: "Deep tissue precision, dynamic cupping, and CBD therapy",
254|       seoTitle: "Advanced Recovery Therapy in Issaquah, WA",
255|       metaDescription: