import React, { useEffect, useState } from "react";
import HomepageListing from "../HomepageListing/HomepageListing";
import { HashLoader } from "react-spinners";
const descriptions = {
  a: "Ambitious soul, always reaching high, Seeking dreams that touch the sky. Kindness in heart, never shy.",
  b: "Benevolent spirit, compassionate and true, Helping hands in all they do. Boundless empathy, shining through.",
  c: "Curious mind, exploring with glee, Learning from all they hear and see. Creativity flows endlessly.",
  d: "Determined and resilient, they stand, Facing challenges with a guiding hand. Perseverance, their strength so grand.",
  e: "Eloquent speaker, words like art, Inspiring others, playing a part. Thoughtful and kind, a gentle heart.",
  f: "Fearless adventurer, seeking the thrill, Courageous steps, never standing still. Passion and fire, an indomitable will.",
  g: "Generous soul, giving without measure, Spreading joy, a boundless treasure. Warmth and love, their ultimate pleasure.",
  h: "Humble spirit, wise and serene, Guiding with patience, a tranquil scene. Strength in silence, a noble sheen.",
  i: "Inquisitive mind, ever in wonder, Exploring life with lightning and thunder. Imagination sparks like rolling thunder.",
  j: "Joyful soul, laughter in their stride, Spreading happiness far and wide. Optimism's beacon, a constant guide.",
  k: "Kind-hearted and caring, empathy shines, Comforting hearts in challenging times. Radiating warmth like sunlit climbs.",
  l: "Loyal friend, steadfast and true, Supporting always, through and through. Love that's steadfast, like morning dew.",
  m: "Meticulous planner, with details in sight, Organizing paths, making things right. Precision and focus, their guiding light.",
  n: "Noble ideals, integrity's grace, Standing firm in every space. Respect and honor, they embrace.",
  o: "Optimistic spirit, with hope that's vast, Seeing the bright in shadows cast. Courage in uncertainty, steadfast.",
  p: "Passionate soul, ablaze with desire, Fueling ambitions, higher and higher. Devotion like a burning fire.",
  q: "Quirky and unique, a personality rare, With vibrant colors, they boldly declare. Innovation's child, beyond compare.",
  r: "Resilient heart, bouncing back, From trials faced on life's track. Strength from within, never to lack.",
  s: "Sincere in actions, honest and true, In friendship, loyalty shining through. A heart so pure, like morning dew.",
  t: "Tenacious spirit, with willpower strong, Striving to right each possible wrong. Perseverance sings in their song.",
  u: "Understanding nature, empathetic to the core, Listening deeply, emotions they explore. Acceptance and empathy evermore.",
  v: "Vibrant energy, a zest for life, Spreading joy, banishing strife. Enthusiasm, erasing all strife.",
  w: "Wise and patient, a sage in thought, Lessons from life, carefully sought. Guidance and counsel, humbly taught.",
  x: "X-factor of uniqueness, they possess, Standing out, never to regress. A mystery's allure, they address.",
  y: "Yearning for growth, seeking to find, Paths to expand their heart and mind. Endless possibilities, to unwind.",
  z: "Zealous and passionate in all they pursue, Chasing dreams, embracing the new. Adventure beckons, a thrilling view."
};

// Example access:
console.log(descriptions['a']); // Output the description for the letter 'a'




const Utility = () => {
  const [apidata, setapidata] = useState([]);
  const [search, setsearch] = useState("");
  const [city, setcity] = useState("Mumbai");
  const [price, setprice] = useState(12000);
  const [bhk, setbhk] = useState(0);
  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    let data = await fetch(
      "http://localhost:8000/api/bookings"
    );
    let jsondata = await data.json();
    setapidata(jsondata);
  };
  //console.log(apidata);

  return (
    <>
    <h2 className="innerWidth heading">Join the Community of Motivated Individuals whose Lives were Empowered by Embracing Yoga with Us:</h2>
      {apidata.length === 0 ? (
        <div className="flexCenter innerWidth">
          <HashLoader loading={true} color="blue" />
        </div>
      ) : (
        <HomepageListing
          apidata={apidata}
          descriptions={descriptions}
        />
      )}
    </>
  );
};

export default Utility;
