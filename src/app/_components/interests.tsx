
// Define a reusable Card component with an updated layout
import Image from "next/image";
const Card = ({ title, imageUrl, content, extraContent, link }:any) => (
  <div className="bg-white rounded-lg border p-4 flex flex-row">
    <img src={imageUrl} alt="Placeholder" className="flex-none w-80 h-80 rounded-md object-cover" />
    <div className="flex-grow px-4 py-2">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base" dangerouslySetInnerHTML={{ __html: content }}></p>
      {extraContent}
    </div>
  </div>
);

// Main Component using Tailwind and React
const Interests = () => (
  <div className="my-10">
    <div className="mx-auto py-4">
      <div className="grid grid-cols-1 gap-4">
        <Card
          title="Movies"
          imageUrl="/assets/about/deniro.jpg"
          content="As a movie lover, I enjoy diverse genres and styles. From the intricate and intense films of David Fincher to the whimsical and offbeat tales of Wes Anderson. I have a soft spot for artsy French New Wave, thrilling suspense movies, and thought-provoking sci-fi films."
          extraContent={<>
            <p className="mt-4">Checkout out my Letterboxd profile:</p>
            <a id="letterboxd" href="https://letterboxd.com/atullal/" className=" rounded text-white bg-[#333] hover:bg-[#24292e] active:bg-[#2c2f31] w-52 block text-sm p-3.5 py-2"><Image src="https://a.ltrbxd.com/logos/letterboxd-logo-h-neg-rgb.svg" alt="Letterboxd Logo" width="200" height="40" /></a>
            </>}
        />
        <Card
          title="Music"
          imageUrl="/assets/about/davies.jpg"
          content="I am equally captivated by the timeless elegance of Mozart and the modern rhythms of Kendrick Lamar. The soulful jazz of Donald Byrd, the gritty lyrics of Prabh Deep, and the ethereal melodies of Frank Ocean, I find solace in the introspective sounds of Sufjan Stevens and the electric energy of Elton John's rock anthems."
          extraContent={<>
            <p>Checkout out my Apple Music playlists:</p>
            <a className="apple-music" href="https://music.apple.com/profile/atullal"><Image className="logo" src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Apple_Music_icon.svg" alt="Apple Music Logo" width="60" height="40" /> Follow on Apple Music </a>
          </>}
        />
        <Card
          title="Art"
          imageUrl="/assets/about/monet.jpg"
          content="From the classics of Monet and Van Gogh to the modern works of Basquiat and Warhol, I find beauty and inspiration in all forms of art. Whether I am admiring a breathtaking landscape painting or a thought-provoking digital creation by La Robotte, art has the power to transport to another world and evoke a range of emotions."
        />
        <Card
          title="Sports"
          imageUrl="/assets/about/modric.jpg"
          content="My love for Real Madrid runs deep. The iconic white kit, electric atmosphere of the Santiago Bernabeu Stadium, and watching the team dominate with incredible players, always leaves me in awe. I am part of a global community with a shared passion for one of the greatest football clubs in history. Hala Madrid!"
        />
      </div>
    </div>
  </div>
);

export default Interests;
