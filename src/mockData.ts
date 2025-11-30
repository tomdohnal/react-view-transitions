export type Review = {
  name: string;
  avatarInitials: string;
  date: string;
  text: string;
};

export const reviews: Review[] = [
  {
    name: "Alice Johnson",
    avatarInitials: "AJ",
    date: "2024-01-15",
    text: "Fantastic quality! The build feels premium and exceeded my expectations.",
  },
  {
    name: "Bob Smith",
    avatarInitials: "BS",
    date: "2024-01-15",
    text: "Fast shipping and the product works exactly as advertised.",
  },
  {
    name: "Carol Lee",
    avatarInitials: "CL",
    date: "2024-01-15",
    text: "Great value for the price. I would definitely buy again.",
  },
];

export const images = [
  {
    src: "https://picsum.photos/seed/product1/600/400",
    alt: "Product photo 1",
  },
  {
    src: "https://picsum.photos/seed/product2/600/400",
    alt: "Product photo 2",
  },
  {
    src: "https://picsum.photos/seed/product3/600/400",
    alt: "Product photo 3",
  },
];

export type Profile = {
  name: string;
  initials: string;
  avatarColor: string;
  email: string;
  location: string;
  bio: string;
};

export const profileData: Record<string, Profile> = {
  alice: {
    name: "Alice Johnson",
    initials: "AJ",
    avatarColor: "bg-blue-600",
    email: "alice.johnson@example.com",
    location: "New York, USA",
    bio: "Tech enthusiast and product reviewer. Always looking for the next great innovation.",
  },
  bob: {
    name: "Bob Smith",
    initials: "BS",
    avatarColor: "bg-green-600",
    email: "bob.smith@example.com",
    location: "London, UK",
    bio: "Experienced consumer advocate with a passion for quality products.",
  },
  carol: {
    name: "Carol Lee",
    initials: "CL",
    avatarColor: "bg-purple-600",
    email: "carol.lee@example.com",
    location: "San Francisco, USA",
    bio: "Lifestyle blogger and early adopter of new technologies.",
  },
  dave: {
    name: "Dave Patel",
    initials: "DP",
    avatarColor: "bg-rose-600",
    email: "dave.patel@example.com",
    location: "Toronto, Canada",
    bio: "Product designer and reviewer focused on user experience.",
  },
  emma: {
    name: "Emma Wong",
    initials: "EW",
    avatarColor: "bg-amber-600",
    email: "emma.wong@example.com",
    location: "Sydney, Australia",
    bio: "Tech writer and reviewer specializing in consumer electronics.",
  },
};
