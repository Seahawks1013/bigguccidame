/** Prefix an internal path with the site base (just "/" on Netlify). */
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const path = (p = '/') => `${base}${p}`;

export const links = {
  wavesSpotify: 'https://open.spotify.com/album/61OHhCOsd0YzmaDvowbCq5',
  spotifyArtist: 'https://open.spotify.com/artist/6mjDlBKzYcYavIYfOfQLKi',
  appleArtist: 'https://music.apple.com/us/artist/bigguccidame/1513853825',
  youtubeChannel: 'https://www.youtube.com/@bigguccidame',
  instagram: 'https://www.instagram.com/bigguccidame/',
  tiktok: 'https://www.tiktok.com/@.bigguccidame',
  x: 'https://twitter.com/dame_gucci',
};

/** The single currently being promoted (home "Featured" + /socials). */
export const latestRelease = {
  title: 'Birds of a Feather',
  artists: 'BigGucciDame & Austin Joyce',
  year: 2026,
  spotifyAlbumId: '1c9qq8iJ2roY1BwpC7OIj2',
  links: [
    { name: 'spotify', label: 'Spotify', href: 'https://open.spotify.com/album/1c9qq8iJ2roY1BwpC7OIj2' },
    { name: 'apple', label: 'Apple Music', href: 'https://music.apple.com/us/album/birds-of-a-feather-single/6816229713' },
    { name: 'ytmusic', label: 'YouTube Music', href: 'https://music.youtube.com/playlist?list=OLAK5uy_md1Sma9NdHSGVJTZudj01eLUl8zIgK-vk' },
    { name: 'amazon', label: 'Amazon Music', href: 'https://music.amazon.com/albums/B0HKYW7MYR' },
    { name: 'tidal', label: 'Tidal', href: 'https://tidal.com/album/564207053' },
    { name: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/watch?v=7SQF61AXT0c' },
  ],
} as const;

export const socials = [
  { name: 'spotify', label: 'Spotify', href: links.spotifyArtist },
  { name: 'apple', label: 'Apple Music', href: links.appleArtist },
  { name: 'youtube', label: 'YouTube', href: links.youtubeChannel },
  { name: 'instagram', label: 'Instagram', href: links.instagram },
  { name: 'tiktok', label: 'TikTok', href: links.tiktok },
  { name: 'x', label: 'Twitter / X', href: links.x },
] as const;

export const tracks = [
  { n: '01', title: 'WAVES', desc: "Might be one of my favorites on the album. I've performed it live and even had others listen to this song and they all say it's the one. I wrote this song about still failing as a believer but still trying to be present, and be a help for others while needing God yourself — knowing that sanctification is a lifelong process." },
  { n: '02', title: 'STAY CONTENDING', desc: "This is all Caleb Osorio lol. This song was made over a beat I made and he was like nah it could hit harder — and he made a new beat over my already finished vocals and boom, here we are. This song is about fighting for the things that God has promised, and you not giving up on it." },
  { n: '03', title: 'WASTE TIME', desc: "The title of this song speaks for itself. At the current writing of this I'm 26 years old and at times you can feel like you're behind — but when you're aligned with Christ you're not behind at all or losing anything. You are right on track where you need to be, and this song is a reminder that he will keep and guide you as long as you rest and trust in him." },
  { n: '04', title: 'OLD LENS', spotify: 'https://open.spotify.com/track/4rINopdbpLkEaokXphw0d8', desc: 'One of my more experimental songs in regards to my vocal takes. Funny enough this song title I got from talking on the phone with a friend — in that conversation we talked about how when living in the world your lens, or the way you see things, can be clouded. She said "OLD LENS" and since then that always stuck with me and I knew I wanted to make a song about that.' },
  { n: '05', title: 'CLT TO LGA', desc: "Man, explaining this song can really be a whole book. This song is based on two perspectives — highkey three. It's about me venting to a friend, then me fighting for a relationship that other parties have more input in, and that other party is dictating where the relationship is going. This song is one of my favorites because it's so real. Half of it isn't even really about me — it's just me telling my friend's story. And I felt that we all could relate to it." },
  { n: '06', title: 'JADED', desc: 'This song is about being jaded and not wanting to wait — and being lost in what the true purpose of waiting is.' },
  { n: '07', title: 'JAMES 1:6-8', tag: 'Interlude', desc: 'This is very dear to me because I got my Mom to talk on this interlude. The whole intent was for at least someone to feel blessed by this.' },
  { n: '08', title: 'STRESSIN', desc: 'I wrote this song about being so anxious or expectant for an outcome that you use other outlets to cope instead of just trying and waiting on God.' },
  { n: '09', title: 'LAST TIME', desc: "Cutting off the vices and coming back to God and surrendering it. This song is about telling God you're done with cycles of sin and wanting to start a new covenant with him. I felt like it was the perfect outro because I really wanted to story-tell with this project — and I think it brings this chapter into a great close." },
] as const satisfies ReadonlyArray<{ n: string; title: string; desc: string; tag?: string; spotify?: string }>;
