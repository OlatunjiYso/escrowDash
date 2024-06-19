import { promises as fs } from 'fs';

const users = [
  {
    id: "1a2b3c4d",
    firstname: "Dwayne",
    lastname: "Heibroch",
    email: "dwayne@payproff.com",
    password: "password",
    imageUrl: "/dwayne.png",
  },
  {
    id: "5e6f7g8h",
    firstname: "John",
    lastname: "Smith",
    email: "john@payproff.com",
    password: "password",
    imageUrl: "/johnsmith.jpg",
  },
];

const customers = [
  {
    id: "1a2b3c4d",
    firstname: "John",
    lastname: "Doe",
    email: "john.doe@example.com",
    imageUrl: "https://example.com/images/johndoe.jpg",
  },
  {
    id: "5e6f7g8h",
    firstname: "Jane",
    lastname: "Smith",
    email: "jane.smith@example.com",
    imageUrl: "https://example.com/images/janesmith.jpg",
  },
  {
    id: "9i0j1k2l",
    firstname: "Michael",
    lastname: "Johnson",
    email: "michael.johnson@example.com",
    imageUrl: "https://example.com/images/michaeljohnson.jpg",
  },
  {
    id: "3m4n5o6p",
    firstname: "Emily",
    lastname: "Davis",
    email: "emily.davis@example.com",
    imageUrl: "https://example.com/images/emilydavis.jpg",
  },
  {
    id: "7q8r9s0t",
    firstname: "Chris",
    lastname: "Brown",
    email: "chris.brown@example.com",
    imageUrl: "https://example.com/images/chrisbrown.jpg",
  },
  {
    id: "1u2v3w4x",
    firstname: "Sarah",
    lastname: "Wilson",
    email: "sarah.wilson@example.com",
    imageUrl: "https://example.com/images/sarahwilson.jpg",
  },
  {
    id: "5y6z7a8b",
    firstname: "David",
    lastname: "Martinez",
    email: "david.martinez@example.com",
    imageUrl: "https://example.com/images/davidmartinez.jpg",
  },
  {
    id: "9c0d1e2f",
    firstname: "Laura",
    lastname: "Garcia",
    email: "laura.garcia@example.com",
    imageUrl: "https://example.com/images/lauragarcia.jpg",
  },
  {
    id: "3g4h5i6j",
    firstname: "James",
    lastname: "Rodriguez",
    email: "james.rodriguez@example.com",
    imageUrl: "https://example.com/images/jamesrodriguez.jpg",
  },
  {
    id: "7k8l9m0n",
    firstname: "Olivia",
    lastname: "Hernandez",
    email: "olivia.hernandez@example.com",
    imageUrl: "https://example.com/images/oliviahernandez.jpg",
  },
  {
    id: "1p2q3r4s",
    firstname: "William",
    lastname: "Clark",
    email: "william.clark@example.com",
    imageUrl: "https://example.com/images/williamclark.jpg",
  },
  {
    id: "5t6u7v8w",
    firstname: "Sophia",
    lastname: "Lewis",
    email: "sophia.lewis@example.com",
    imageUrl: "https://example.com/images/sophialewis.jpg",
  },
  {
    id: "9x0y1z2a",
    firstname: "Benjamin",
    lastname: "Walker",
    email: "benjamin.walker@example.com",
    imageUrl: "https://example.com/images/benjaminwalker.jpg",
  },
  {
    id: "3b4c5d6e",
    firstname: "Ava",
    lastname: "Hall",
    email: "ava.hall@example.com",
    imageUrl: "https://example.com/images/avahall.jpg",
  },
  {
    id: "7f8g9h0i",
    firstname: "Liam",
    lastname: "Allen",
    email: "liam.allen@example.com",
    imageUrl: "https://example.com/images/liamallen.jpg",
  },
  {
    id: "1j2k3l4m",
    firstname: "Mia",
    lastname: "Young",
    email: "mia.young@example.com",
    imageUrl: "https://example.com/images/miayoung.jpg",
  },
  {
    id: "5n6o7p8q",
    firstname: "Noah",
    lastname: "King",
    email: "noah.king@example.com",
    imageUrl: "https://example.com/images/noahking.jpg",
  },
  {
    id: "9r0s1t2u",
    firstname: "Isabella",
    lastname: "Scott",
    email: "isabella.scott@example.com",
    imageUrl: "https://example.com/images/isabellascott.jpg",
  },
  {
    id: "3v4w5x6y",
    firstname: "Lucas",
    lastname: "Green",
    email: "lucas.green@example.com",
    imageUrl: "https://example.com/images/lucasgreen.jpg",
  },
  {
    id: "7z8a9b0c",
    firstname: "Amelia",
    lastname: "Adams",
    email: "amelia.adams@example.com",
    imageUrl: "https://example.com/images/ameliaadams.jpg",
  },
  {
    id: "1d2e3f4g",
    firstname: "Mason",
    lastname: "Baker",
    email: "mason.baker@example.com",
    imageUrl: "https://example.com/images/masonbaker.jpg",
  },
  {
    id: "5h6i7j8k",
    firstname: "Harper",
    lastname: "Nelson",
    email: "harper.nelson@example.com",
    imageUrl: "https://example.com/images/harpernelson.jpg",
  },
  {
    id: "9l0m1n2o",
    firstname: "Ethan",
    lastname: "Carter",
    email: "ethan.carter@example.com",
    imageUrl: "https://example.com/images/ethancarter.jpg",
  },
  {
    id: "3p4q5r6s",
    firstname: "Evelyn",
    lastname: "Mitchell",
    email: "evelyn.mitchell@example.com",
    imageUrl: "https://example.com/images/evelynmitchell.jpg",
  },
  {
    id: "7t8u9v0w",
    firstname: "Logan",
    lastname: "Perez",
    email: "logan.perez@example.com",
    imageUrl: "https://example.com/images/loganperez.jpg",
  },
  {
    id: "1x2y3z4a",
    firstname: "Abigail",
    lastname: "Roberts",
    email: "abigail.roberts@example.com",
    imageUrl: "https://example.com/images/abigailroberts.jpg",
  },
  {
    id: "5b6c7d8e",
    firstname: "Alexander",
    lastname: "Turner",
    email: "alexander.turner@example.com",
    imageUrl: "https://example.com/images/alexanderturner.jpg",
  },
  {
    id: "9f0g1h2i",
    firstname: "Charlotte",
    lastname: "Phillips",
    email: "charlotte.phillips@example.com",
    imageUrl: "https://example.com/images/charlottephillips.jpg",
  },
  {
    id: "3j4k5l6m",
    firstname: "Daniel",
    lastname: "Campbell",
    email: "daniel.campbell@example.com",
    imageUrl: "https://example.com/images/danielcampbell.jpg",
  },
  {
    id: "7n8o9p0q",
    firstname: "Sofia",
    lastname: "Parker",
    email: "sofia.parker@example.com",
    imageUrl: "https://example.com/images/sofiaparker.jpg",
  },
  {
    id: "1r2s3t4u",
    firstname: "Henry",
    lastname: "Evans",
    email: "henry.evans@example.com",
    imageUrl: "https://example.com/images/henryevans.jpg",
  },
  {
    id: "5v6w7x8y",
    firstname: "Avery",
    lastname: "Edwards",
    email: "avery.edwards@example.com",
    imageUrl: "https://example.com/images/averyedwards.jpg",
  },
  {
    id: "9z0a1b2c",
    firstname: "Sebastian",
    lastname: "Collins",
    email: "sebastian.collins@example.com",
    imageUrl: "https://example.com/images/sebastiancollins.jpg",
  },
  {
    id: "3d4e5f6g",
    firstname: "Ella",
    lastname: "Stewart",
    email: "ella.stewart@example.com",
    imageUrl: "https://example.com/images/ellastewart.jpg",
  },
  {
    id: "7h8i9j0k",
    firstname: "Jack",
    lastname: "Sanchez",
    email: "jack.sanchez@example.com",
    imageUrl: "https://example.com/images/jacksanchez.jpg",
  },
  {
    id: "1l2m3n4o",
    firstname: "Grace",
    lastname: "Morris",
    email: "grace.morris@example.com",
    imageUrl: "https://example.com/images/gracemorris.jpg",
  },
  {
    id: "5p6q7r8s",
    firstname: "Oliver",
    lastname: "Murphy",
    email: "oliver.murphy@example.com",
    imageUrl: "https://example.com/images/olivermurphy.jpg",
  },
  {
    id: "9t0u1v2w",
    firstname: "Scarlett",
    lastname: "Cook",
    email: "scarlett.cook@example.com",
    imageUrl: "https://example.com/images/scarlettcook.jpg",
  },
  {
    id: "3x4y5z6a",
    firstname: "Elijah",
    lastname: "Rogers",
    email: "elijah.rogers@example.com",
    imageUrl: "https://example.com/images/elijahrogers.jpg",
  },
  {
    id: "7b8c9d0e",
    firstname: "Chloe",
    lastname: "Reed",
    email: "chloe.reed@example.com",
    imageUrl: "https://example.com/images/chloereed.jpg",
  },
  {
    id: "1f2g3h4i",
    firstname: "Jacob",
    lastname: "Morgan",
    email: "jacob.morgan@example.com",
    imageUrl: "https://example.com/images/jacobmorgan.jpg",
  },
  {
    id: "5j6k7l8m",
    firstname: "Lily",
    lastname: "Bell",
    email: "lily.bell@example.com",
    imageUrl: "https://example.com/images/lilybell.jpg",
  },
  {
    id: "9n0o1p2q",
    firstname: "Samuel",
    lastname: "Bailey",
    email: "samuel.bailey@example.com",
    imageUrl: "https://example.com/images/samuelbailey.jpg",
  },
  {
    id: "3r4s5t6u",
    firstname: "Hannah",
    lastname: "Rivera",
    email: "hannah.rivera@example.com",
    imageUrl: "https://example.com/images/hannahrivera.jpg",
  },
  {
    id: "7v8w9x0y",
    firstname: "Matthew",
    lastname: "Cooper",
    email: "matthew.cooper@example.com",
    imageUrl: "https://example.com/images/matthewcooper.jpg",
  },
  {
    id: "1z2a3b4c",
    firstname: "Aria",
    lastname: "Richardson",
    email: "aria.richardson@example.com",
    imageUrl: "https://example.com/images/ariarichardson.jpg",
  },
  {
    id: "5d6e7f8g",
    firstname: "Anthony",
    lastname: "Cox",
    email: "anthony.cox@example.com",
    imageUrl: "https://example.com/images/anthonycox.jpg",
  },
  {
    id: "9h0i1j2k",
    firstname: "Ella",
    lastname: "Howard",
    email: "ella.howard@example.com",
    imageUrl: "https://example.com/images/ellahoward.jpg",
  },
  {
    id: "3l4m5n6o",
    firstname: "Ryan",
    lastname: "Ward",
    email: "ryan.ward@example.com",
    imageUrl: "https://example.com/images/ryanward.jpg",
  },
  {
    id: "7p8q9r0s",
    firstname: "Zoe",
    lastname: "Torres",
    email: "zoe.torres@example.com",
    imageUrl: "https://example.com/images/zoetorres.jpg",
  },
  {
    id: "1t2u3v4w",
    firstname: "Andrew",
    lastname: "Peterson",
    email: "andrew.peterson@example.com",
    imageUrl: "https://example.com/images/andrewpeterson.jpg",
  },
  {
    id: "5x6y7z8a",
    firstname: "Madison",
    lastname: "Gray",
    email: "madison.gray@example.com",
    imageUrl: "https://example.com/images/madisongray.jpg",
  },
];

const revenue = [
  { month: "Jan", revenue: 2000 },
  { month: "Feb", revenue: 1800 },
  { month: "Mar", revenue: 2200 },
  { month: "Apr", revenue: 2500 },
  { month: "May", revenue: 2300 },
  { month: "Jun", revenue: 3200 },
  { month: "Jul", revenue: 3500 },
  { month: "Aug", revenue: 3700 },
  { month: "Sep", revenue: 2500 },
  { month: "Oct", revenue: 2800 },
  { month: "Nov", revenue: 2800 },
  { month: "Dec", revenue: 4800 },
];

const file = await fs.readFile(process.cwd() + '/app/lib/database.json', 'utf8');
const payments = JSON.parse(file);


const db = {
  users,
  customers,
  payments,
  revenue,
};

export default db;