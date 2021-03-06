const mongoose = require("mongoose");
const db = require("../database/models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/tempDB");

const Seed = [
  {
    name: "Mitchell Underwood",
    city: "Raleigh",
    county: "Wake",
    state: "NC",
    country: "USA",
    username: "mitchell@underwood.com",
    password: "$2a$10$ma0MBuyBvsrA0YRZKYQf6uaLJVSLITsQAKIlwQuhNs509OLV5zWe6",
    issues: [{ issue: "Bunnies", stance: 5, important: true }, { issue: "Kitties", stance: -5, important: true }],
    candidate: true,
    campaign: { level: "County", body: "School Board", office: "School Board Chair" }
  },
  {
    name: "Luke Evans",
    city: "Raleigh",
    county: "Wake",
    state: "NC",
    country: "USA",
    username: "luke@evans.com",
    password: "$2a$10$6hxNMqK/ITjkrfClBtH7TeV1lCwEcfRddO8.sBBDEogvuGh06qtRK",
    issues: [{ issue: "Fortnight", stance: 5, important: true }, { issue: "Tiger King", stance: -5, important: true }],
    candidate: false
  },
  {
    name: "Matthew Neal",
    city: "Raleigh",
    county: "Wake",
    state: "NC",
    country: "USA",
    username: "matthew@neal.com",
    password: "$2a$10$r0ldOGYNx555jgQUn.8.y.mWv/rZiNms7EDwuNpxH2khaSfx5V8pq",
    issues: [{ issue: "Cycling", stance: 5, important: true }, { issue: "Printing", stance: -5, important: true }],
    candidate: false
  },
  {
    name: "Victor Litzau",
    city: "Raleigh",
    county: "Wake",
    state: "NC",
    country: "USA",
    username: "victor@litzau.com",
    password: "$2a$10$5RmszFBpPRG0rLb18ngDy.K/sMoATHNpa25SHGdTGyPdpYG56gn9C",
    issues: [{ issue: "Airbrushing", stance: 5, important: true }, { issue: "Charleston", stance: -5, important: true }],
    candidate: false
  },
  {
    name: "Barack Obama",
    city: "Kalorama",
    county: "Northwest Quadrant",
    state: "DC",
    country: "USA",
    username: "Barack@Obama.com",
    password: "$2a$10$ZXfbrlDvYTsXGgcTxEypxOS0ePLMsGt/p7VaYAZNRVPLdCzVgwdU2",
    issues: [{ issue: "LGBT Rights", stance: 9, important: true }, { issue: "Government Mandates", stance: 10, important: true }, { issue: "First Amendment", stance: 0, important: true }, { issue: "Gun Control", stance: -5, important: true }, { issue: "Net Neutrality", stance: 9, important: true }, { issue: "Government Healthcare", stance: 10, important: true }],
    candidate: true,
    campaign: { level: "Federal", body: "Executive", office: "President" }
  },
  {
    name: "Cardi B",
    city: "Atlanta",
    county: "Fulton",
    state: "GA",
    country: "USA",
    username: "Cardi@B.com",
    password: "$2a$10$WgcAQIX0/8nqFVkmiA.ZQeh0U.P3T/w2FO7aDXcMftX6n29b9SUbO",
    issues: [{ issue: "LGBT Rights", stance: 7, important: true }, { issue: "Government Mandates", stance: 1, important: true }, { issue: "First Amendment", stance: 0, important: true }, { issue: "Gun Control", stance: 5, important: true }, { issue: "Net Neutrality", stance: 5, important: true }, { issue: "Government Healthcare", stance: 10, important: true }],
    candidate: true,
    campaign: { level: "Federal", body: "Executive", office: "President" }
  },
  {
    name: "Andrew Yang",
    city: "New Paltz",
    county: "Ulster",
    state: "NY",
    country: "USA",
    username: "Andrew@Yang.com",
    password: "$2a$10$BeewrYdSU8IOiNoZgcsld.LI.h8UKqIWGBE.PA7Iz7oS2BO5cW2Ry",
    issues: [{ issue: "LGBT Rights", stance: 7, important: true }, { issue: "Government Mandates", stance: 9, important: true }, { issue: "First Amendment", stance: 0, important: true }, { issue: "Gun Control", stance: 5, important: true }, { issue: "Net Neutrality", stance: 10, important: true }, { issue: "Government Healthcare", stance: 3, important: true }],
    candidate: true,
    campaign: { level: "Federal", body: "Congress", office: "US Senate" }
  },
  {
    name: "Hillary Clinton",
    city: "Chappaqua",
    county: "Westchester",
    state: "NY",
    country: "USA",
    username: "Hillary@Clinton.com",
    password: "$2a$10$E1DOQmQ1aZ31TOqgAUbq4OWygkE0nHLG1Ps0Ruir6Tak2ZlDwqMw6",
    issues: [{ issue: "LGBT Rights", stance: 9, important: true }, { issue: "Government Mandates", stance: 9, important: true }, { issue: "First Amendment", stance: 3, important: true }, { issue: "Gun Control", stance: 8, important: true }, { issue: "Net Neutrality", stance: 3, important: true }, { issue: "Government Healthcare", stance: 7, important: true }],
    candidate: true,
    campaign: { level: "Federal", body: "Congress", office: "US Senate" }
  },
  {
    name: "Kamala Harris",
    city: "Oakland",
    county: "Alameda",
    state: "CA",
    country: "USA",
    username: "Kamala@Harris.com",
    password: "$2a$10$Z7ukAQglMw/k7O2nrC0KEeQfeVQW9is.Qrqe3zjHE/tDxoWv/hpq6",
    issues: [{ issue: "LGBT Rights", stance: 9, important: true }, { issue: "Government Mandates", stance: 9, important: true }, { issue: "First Amendment", stance: 7, important: true }, { issue: "Gun Control", stance: 10, important: true }, { issue: "Net Neutrality", stance: 9, important: true }, { issue: "Government Healthcare", stance: 10, important: true }],
    candidate: true,
    campaign: { level: "Federal", body: "Congress", office: "US Senate" }
  },
  {
    name: "Ronald Reagan",
    city: "Dixon",
    county: "Lee",
    state: "IL",
    country: "USA",
    username: "Ronald@Reagan.com",
    password: "$2a$10$dbBD/ql5nDlBs707T5PHIecL/4UAknIMZ7EQKn63K1LueV98sfOQe",
    issues: [{ issue: "LGBT Rights", stance: -3, important: true }, { issue: "Government Mandates", stance: 9, important: true }, { issue: "First Amendment", stance: 8, important: true }, { issue: "Gun Control", stance: -3, important: true }, { issue: "Net Neutrality", stance: 9, important: true }, { issue: "Government Healthcare", stance: -9, important: true }],
    candidate: true,
    campaign: { level: "Federal", body: "House", office: "US House of Representatives District 2" }
  },
  {
    name: "Bill Clinton",
    city: "Chappaqua",
    county: "Westchester",
    state: "NY",
    country: "USA",
    username: "Bill@Clinton.com",
    password: "$2a$10$/a1RU7wP/sFB8Gx6sm1.pegcYawifLHH55A9irvD7klKrsBACC3.m",
    issues: [{ issue: "LGBT Rights", stance: 0, important: true }, { issue: "Government Mandates", stance: 5, important: true }, { issue: "First Amendment", stance: 5, important: true }, { issue: "Gun Control", stance: 0, important: true }, { issue: "Net Neutrality", stance: 5, important: true }, { issue: "Government Healthcare", stance: 6, important: true }],
    candidate: true,
    campaign: { level: "Federal", body: "House", office: "US House of Representatives District 2" }
  },
  {
    name: "Roy Cooper",
    city: "Nashville",
    county: "Nash",
    state: "NC",
    country: "USA",
    username: "Roy@Cooper.com",
    password: "$2a$10$gPcys7e73CYkIA/mv5BaSeqt5ihth3hmXM21xx9tvImaXUafdctX6",
    issues: [{ issue: "LGBT Rights", stance: 2, important: true }, { issue: "Government Mandates", stance: 5, important: true }, { issue: "First Amendment", stance: -2, important: true }, { issue: "Gun Control", stance: 6, important: true }, { issue: "Net Neutrality", stance: 6, important: true }, { issue: "Government Healthcare", stance: 6, important: true }],
    candidate: true,
    campaign: { level: "State", body: "Executive", office: "Governor" }
  },
  {
    name: "Dan Forest",
    city: "Harrisonburg",
    county: "Rockingham",
    state: "VA",
    country: "USA",
    username: "Dan@Forest.com",
    password: "$2a$10$y5d8uSPDpD94tQZJBhYNReT2CmxS0YNGw8zcmvH2gwkIIo2KGhJ8C",
    issues: [{ issue: "LGBT Rights", stance: -2, important: true }, { issue: "Government Mandates", stance: 7, important: true }, { issue: "First Amendment", stance: 10, important: true }, { issue: "Gun Control", stance: 9, important: true }, { issue: "Net Neutrality", stance: 10, important: true }, { issue: "Government Healthcare", stance: -10, important: true }],
    candidate: true,
    campaign: { level: "State", body: "Executive", office: "Governor" }
  },
  {
    name: "Miley Cyrus",
    city: "Los Angeles",
    county: "Orange",
    state: "CA",
    country: "USA",
    username: "Miley@Cyrus.com",
    password: "$2a$10$C11KcwcxqtDlBkJo3JRrE.VMxFooUs9OL.9GryqagIfRs7sgDERG6",
    issues: [{ issue: "LGBT Rights", stance: 10, important: true }, { issue: "Government Mandates", stance: -4, important: true }, { issue: "First Amendment", stance: 6, important: true }, { issue: "Gun Control", stance: 9, important: true }, { issue: "Net Neutrality", stance: 3, important: true }, { issue: "Government Healthcare", stance: 10, important: true }],
    candidate: true,
    campaign: { level: "State", body: "Department of Justice", office: "Attorney General" }
  },
  {
    name: "Joe Biden",
    city: "Scranton",
    county: "Lackawanna",
    state: "PA",
    country: "USA",
    username: "Joe@Biden.com",
    password: "$2a$10$5.ul7hUFMWCRlTl2l2Fd.OhA66ouaWCp9Mlb0aMGQU64md.54h/PW",
    issues: [{ issue: "LGBT Rights", stance: 7, important: true }, { issue: "Government Mandates", stance: 7, important: true }, { issue: "First Amendment", stance: 6, important: true }, { issue: "Gun Control", stance: 7, important: true }, { issue: "Net Neutrality", stance: 3, important: true }, { issue: "Government Healthcare", stance: 10, important: true }],
    candidate: true,
    campaign: { level: "Federal", body: "Executive", office: "President" }
  },
  {
    name: "Donald Trump",
    city: "New York",
    county: "Queens",
    state: "NY",
    country: "USA",
    username: "Donald@Trump.com",
    password: "$2a$10$iLGv3b9cKowZQOUux587AOhce2Nu6e4CMCaMRN/4f0xFA97F8OTuG",
    issues: [{ issue: "LGBT Rights", stance: 0, important: true }, { issue: "Government Mandates", stance: 0, important: true }, { issue: "First Amendment", stance: 9, important: true }, { issue: "Gun Control", stance: 0, important: true }, { issue: "Net Neutrality", stance: 10, important: true }, { issue: "Government Healthcare", stance: -10, important: true }],
    candidate: true,
    campaign: { level: "Federal", body: "Executive", office: "President" }
  },
  {
    name: "Kanye West",
    city: "Los Angeles",
    county: "Orange",
    state: "CA",
    country: "USA",
    username: "Kanye@West.com",
    password: "$2a$10$4edWIQwC9BcUuI9SSAE48eFPQZRanzKvaXihu7LzVCO0DrSmWg0Xy",
    issues: [{ issue: "LGBT Rights", stance: 7, important: true }, { issue: "Government Mandates", stance: 6, important: true }, { issue: "First Amendment", stance: -3, important: true }, { issue: "Gun Control", stance: 1, important: true }, { issue: "Net Neutrality", stance: 0, important: true }, { issue: "Government Healthcare", stance: 7, important: true }],
    candidate: true,
    campaign: { level: "State", body: "Department of Justice", office: "Attorney General" }
  },
  {
    name: "Elizabeth Warren",
    city: "Oklahoma City",
    county: "Oklahoma",
    state: "OK",
    country: "USA",
    username: "Elizabeth@Warren.com",
    password: "$2a$10$1hGBiFXc5QFTDGvRTs5PpunbL4D4n2G5tgoy8nXh3crVbBnyJImJe",
    issues: [{ issue: "LGBT Rights", stance: 9, important: true }, { issue: "Government Mandates", stance: 8, important: true }, { issue: "First Amendment", stance: 3, important: true }, { issue: "Gun Control", stance: 9, important: true }, { issue: "Net Neutrality", stance: 6, important: true }, { issue: "Government Healthcare", stance: 7, important: true }],
    candidate: true,
    campaign: { level: "State", body: "Department of Justice", office: "Attorney General" }
  },
  {
    name: "Bernie Sanders",
    city: "Brooklyn",
    county: "Kings",
    state: "NY",
    country: "USA",
    username: "Bernie@Sanders.com",
    password: "$2a$10$FAB3rNcIx/eZPBljb2sWn.n1ScSAvz93YHbcb.MNw.KI000dhH96K",
    issues: [{ issue: "LGBT Rights", stance: 7, important: true }, { issue: "Government Mandates", stance: 10, important: true }, { issue: "First Amendment", stance: 2, important: true }, { issue: "Gun Control", stance: 9, important: true }, { issue: "Net Neutrality", stance: 4, important: true }, { issue: "Government Healthcare", stance: 10, important: true }],
    candidate: true,
    campaign: { level: "State", body: "Council", office: "NC Auditor" }
  },
  {
    name: "Mickey Mouse",
    city: "Orlando",
    county: "Orange",
    state: "FL",
    country: "USA",
    username: "Mickey@Mouse.com",
    password: "$2a$10$4DPooHKPKRTR24YOERKkNuH9fWxYxIU82nqIVena4BwfL1Fs0b4p2",
    issues: [{ issue: "LGBT Rights", stance: 6, important: true }, { issue: "Government Mandates", stance: 7, important: true }, { issue: "First Amendment", stance: 5, important: true }, { issue: "Gun Control", stance: 3, important: true }, { issue: "Net Neutrality", stance: 0, important: true }, { issue: "Government Healthcare", stance: 10, important: true }],
    candidate: true,
    campaign: { level: "State", body: "Council", office: "NC Auditor" }
  },
  {
    name: "Carl Vega",
    city: "Greensboro",
    county: "Guilford",
    state: "NC",
    country: "USA",
    username: "Carl@Vega.com",
    password: "$2a$10$jibvNxVzwBj/fk5NzbyV8e2cTwml.3jcxEFzDp43irApM9b.Rs3jW",
    issues: [{ issue: "LGBT Rights", stance: -6, important: true }, { issue: "Government Mandates", stance: -7, important: true }, { issue: "First Amendment", stance: -5, important: true }, { issue: "Gun Control", stance: -3, important: true }, { issue: "Net Neutrality", stance: -3, important: true }, { issue: "Government Healthcare", stance: -8, important: true }],
    candidate: true,
    campaign: { level: "State", body: "DOA&CS", office: "Commissioner of Agriculture" }
  },
  {
    name: "Zach Rickards",
    city: "Raleigh",
    county: "Wake",
    state: "NC",
    country: "USA",
    username: "Zach@Rickards.com",
    password: "$2a$10$6N8GngTp9se1Kd1ru8MHw.xhaZac5q56ohYI6nhYLyUon4lFgemm6",
    issues: [{ issue: "LGBT Rights", stance: 8, important: true }, { issue: "Government Mandates", stance: 8, important: true }, { issue: "First Amendment", stance: 2, important: true }, { issue: "Gun Control", stance: 3, important: true }, { issue: "Net Neutrality", stance: 5, important: true }, { issue: "Government Healthcare", stance: -10, important: true }],
    candidate: true,
    campaign: { level: "State", body: "DOA&CS", office: "Commissioner of Agriculture" }
  }
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(Seed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
